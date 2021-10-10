var aws = require('aws-sdk');
var redis = require('redis');
var axios = require('axios');
var { v4: uuidv4 } = require('uuid');

const prod = process.env.PROD === 'true';
const redisEndpoint = prod
  ? 'redis.gfmuwq.0001.use1.cache.amazonaws.com'
  : 'redis-dev.gfmuwq.0001.use1.cache.amazonaws.com';

const redisOptions = {
  host: redisEndpoint,
  port: 6379,
};

redis.debug_mode = false;

// const redisClient = redis.createClient(redisOptions);

// const redisGet = promisify(redisClient.get).bind(redisClient);
// const redisSet = promisify(redisClient.set).bind(redisClient);
// const redisDel = promisify(redisClient.del).bind(redisClient);

var ddb = new aws.DynamoDB.DocumentClient();
var sns = new aws.SNS();

const userDbName = process.env.USERDB_NAME;
const orderDbName = process.env.ORDERDB_NAME;
const pickupDbName = process.env.PICKUPDB_NAME;
const orderItemDbName = process.env.ORDERITEMDB_NAME;
const rewardDbName = process.env.REWARDDB_NAME;

const STRIPE_API_URL = process.env.STRIPE_API_URL;

const ActivePickupTopicArn = process.env.ACTIVEPICKUPUPDATE_TOPIC_ARN;
const ActiveOrdersByCustomerTopicArn = process.env.ACTIVEORDERSBYCUSTOMERUPDATE_TOPIC_ARN;
const OpenPickupsTopicArn = process.env.OPENPICKUPS_TOPIC_ARN;
const OrderInfoTopicArn = process.env.ORDERINFOUPDATE_TOPIC_ARN;

exports.handler = async event => {
  const args = event.arguments;
  const identity = event.identity;

  const pickupParams = {
    TableName: pickupDbName,
    Key: {
      id: args.id,
    },
  };

  const pickupResp = await ddb.get(pickupParams).promise();
  const pickup = pickupResp.Item;

  if (!(await checkSecurity(pickup, identity))) {
    const resp = {
      status: 401,
      body: 'UNAUTHORIZED',
    };
    console.log('UNAUTHORIZED');

    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  if (!checkProcessable(pickup)) {
    const resp = {
      status: 422,
      body: 'UNPROCESSABLE ENTITY',
    };
    console.log('UNPROCESSABLE ENTITY');

    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  const ordersParams = {
    TableName: orderDbName,
    IndexName: 'byPickupId',
    KeyConditionExpression: 'pickupId = :pickupId',
    ExpressionAttributeValues: {
      ':pickupId': args.id,
    },
  };

  const ordersResp = await ddb.query(ordersParams).promise();
  const orders = ordersResp.Items;
  console.log('GOT ORDERS BY PICKUP ID');

  var numAcceptedOrders = 0;
  for (var order of orders) {
    if (order.customerId === pickup.delivererId) {
      const orderItemsParams = {
        TableName: orderItemDbName,
        IndexName: 'byOrder',
        KeyConditionExpression: 'orderId = :orderId',
        ExpressionAttributeValues: {
          ':orderId': order.id,
        },
      };

      const orderItemsResp = await ddb.query(orderItemsParams).promise();
      const orderItems = orderItemsResp.Items;

      await updateRewardPoints(order.orderRestaurantId, order.customerId, orderItems.length);

      continue;
    }
    numAcceptedOrders += orderIsOpen(order) ? 1 : 0;
  }

  if (numAcceptedOrders === 0) {
    console.log('SHOULD CLOSE PICKUP');

    var pickupUpdateParams = {
      TableName: pickupDbName,
      Key: {
        id: args.id,
      },
      UpdateExpression:
        'set isPickedUp = :isPickedUp, windowClosed = :windowClosed, #status = :status, closed = :closed',
      ExpressionAttributeNames: {
        '#status': 'status',
      },
      ExpressionAttributeValues: {
        ':status': 'PICKEDUP',
        ':windowClosed': 'true',
        ':isPickedUp': true,
        ':closed': 'true',
      },
      ReturnValues: 'UPDATED_NEW',
    };
  } else {
    console.log('SHOULD NOT CLOSE PICKUP');

    var pickupUpdateParams = {
      TableName: pickupDbName,
      Key: {
        id: args.id,
      },
      UpdateExpression: 'set isPickedUp = :isPickedUp, windowClosed = :windowClosed, #status = :status',
      ExpressionAttributeNames: {
        '#status': 'status',
      },
      ExpressionAttributeValues: {
        ':status': 'PICKEDUP',
        ':windowClosed': 'true',
        ':isPickedUp': true,
      },
      ReturnValues: 'UPDATED_NEW',
    };
  }

  await ddb.update(pickupUpdateParams).promise();
  console.log('UPDATED PICKUP');

  for (var order of orders) {
    if (order.status !== 'PENDING') {
      continue;
    }

    if (prod && order.orderRestaurantId !== '0135975d-d0fd-4465-9410-10fac4e87a2e') {
      try {
        await handleRefund(order.charge_id);
        console.log('REFUNDED');
      } catch (err) {
        return;
      }
    }

    const updateOrderParams = {
      TableName: orderDbName,
      Key: {
        id: order.id,
      },
      UpdateExpression: 'set #status = :status',
      ExpressionAttributeNames: {
        '#status': 'status',
      },
      ExpressionAttributeValues: {
        ':status': 'DECLINED',
      },
      ReturnValues: 'UPDATED_NEW',
    };

    await ddb.update(updateOrderParams).promise();
    console.log('UPDATED ORDER DECLINED ' + order.id);

    const activeOrdersByCustomerSnsMessage = {
      customerId: order.customerId,
    };

    const activeOrdersByCustomerSnsParams = {
      Message: JSON.stringify(activeOrdersByCustomerSnsMessage),
      TopicArn: ActiveOrdersByCustomerTopicArn,
    };

    await sns.publish(activeOrdersByCustomerSnsParams).promise();

    const orderInfoSnsMessage = {
      id: order.id,
    };

    const orderInfoSnsParams = {
      Message: JSON.stringify(orderInfoSnsMessage),
      TopicArn: OrderInfoTopicArn,
    };

    await sns.publish(orderInfoSnsParams).promise();
  }

  for (var order of orders) {
    if (order.status === 'DECLINED' || order.status === 'CANCELED' || order.status === 'PENDING') {
      continue;
    }

    const orderUpdateParams = {
      TableName: orderDbName,
      Key: {
        id: args.id,
      },
      UpdateExpression: 'set #status = :status',
      ExpressionAttributeNames: {
        '#status': 'status',
      },
      ExpressionAttributeValues: {
        ':status': 'PICKEDUP',
      },
      ReturnValues: 'UPDATED_NEW',
    };

    await ddb.update(orderUpdateParams).promise();
    console.log('UPDATED ORDER PICKED UP ' + order.id);

    const activeOrdersByCustomerSnsMessage = {
      customerId: order.customerId,
    };

    const activeOrdersByCustomerSnsParams = {
      Message: JSON.stringify(activeOrdersByCustomerSnsMessage),
      TopicArn: ActiveOrdersByCustomerTopicArn,
    };

    await sns.publish(activeOrdersByCustomerSnsParams).promise();

    const orderInfoSnsMessage = {
      id: order.id,
    };

    const orderInfoSnsParams = {
      Message: JSON.stringify(orderInfoSnsMessage),
      TopicArn: OrderInfoTopicArn,
    };

    await sns.publish(orderInfoSnsParams).promise();
  }

  const activePickupSnsMessage = {
    delivererId: pickup.delivererId,
  };

  const activePickupSnsParams = {
    Message: JSON.stringify(activePickupSnsMessage),
    TopicArn: ActivePickupTopicArn,
  };

  await sns.publish(activePickupSnsParams).promise();

  const usersParams = {
    TableName: 'ToppingsDB',
    KeyConditionExpression: 'pk = :pk',
    ExpressionAttributeValues: {
      ':pk': 'USER#USER',
    },
  };

  const usersResp = await ddb.query(usersParams).promise();
  const users = usersResp.Items;

  for (var user of users) {
    const openPickupsSnsMessage = {
      userId: user.sk.substring(5),
    };

    const openPickupsSnsParams = {
      Message: JSON.stringify(openPickupsSnsMessage),
      TopicArn: OpenPickupsTopicArn,
    };

    await sns.publish(openPickupsSnsParams).promise();
  }

  const updatedOrdersParams = {
    TableName: orderDbName,
    IndexName: 'byPickupId',
    KeyConditionExpression: 'pickupId = :pickupId',
    ExpressionAttributeValues: {
      ':pickupId': args.id,
    },
  };

  const updatedOrdersResp = await ddb.query(updatedOrdersParams).promise();
  const updatedOrders = updatedOrdersResp.Items;

  const updatedOrdersNoChargeId = [];
  for (var updatedOrder of updatedOrders) {
    updatedOrdersNoChargeId.push({
      ...updatedOrder,
      charge_id: undefined,
    });
  }

  const resp = {
    ...pickup,
    status: 'PICKEDUP',
    windowClosed: 'true',
    isPickedUp: true,
    closed: pickupUpdateParams.ExpressionAttributeValues[':closed'] ? 'true' : 'false',
    orders: updatedOrdersNoChargeId,
  };

  return resp;
};

const checkSecurity = async (pickup, identity) => {
  return pickup.delivererId === identity.username;
};

const checkProcessable = pickup => {
  return !pickup.isPickedUp && pickup.status !== 'PICKEDUP';
};

const handleRefund = async chargeId => {
  try {
    await postData(STRIPE_API_URL, {
      chargeId,
    });
  } catch (err) {
    console.log('[ERROR] HANDLE REFUND:', err);
    return Promise.reject(new Error(err));
  }
};

const postData = async (url = ``, data = {}) => {
  const resp = await axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (resp.status === 200) {
    return resp.data;
  } else {
    console.log('[ERROR]: STRIPE API POST FAILED\n', resp.data);
    return Promise.reject(new Error(resp.data));
  }
};

const orderIsOpen = order => {
  const status = order.status;

  return (
    status === 'ACCEPTED' ||
    status === 'PREPARING' ||
    status === 'READY' ||
    status === 'PICKEDUP' ||
    status === 'DELIVERED'
  );
};

const updateRewardPoints = async (menuId, userId, numOrderItems) => {
  const rewardParams = {
    TableName: rewardDbName,
    IndexName: 'byMenu',
    KeyConditionExpression: 'menuId = :menuId and userId = :userId',
    ExpressionAttributeValues: {
      ':menuId': menuId,
      ':userId': userId,
    },
  };

  const rewardResp = await ddb.query(rewardParams).promise();
  const reward = rewardResp.Items[0];
  console.log('GOT REWARD');

  if (reward) {
    console.log('REWARD EXISTS');
    const rewardUpdateParams = {
      TableName: rewardDbName,
      Key: {
        id: reward.id,
      },
      UpdateExpression: 'set points = :points, #updatedAt = :updatedAt',
      ExpressionAttributeNames: {
        '#updatedAt': 'updatedAt',
      },
      ExpressionAttributeValues: {
        ':points': reward.points + numOrderItems,
        ':updatedAt': new Date().toISOString(),
      },
    };

    await ddb.update(rewardUpdateParams).promise();
    console.log('UPDATED REWARD');

    // const redisVal = await redisGet('REWARD#' + reward.userEmail);
    // console.log('GOT REDIS VAL');

    // if (redisVal !== null) {
    //   await redisDel('REWARD#' + reward.userEmail);
    //   console.log('DELETED REDIS');
    // }
  } else {
    console.log('REWARD DOES NOT EXIST');

    const now = new Date().toISOString();

    const newReward = {
      id: uuidv4(),
      menuId,
      userId,
      points: numOrderItems,
      createdAt: now,
      updatedAt: now,
    };

    const rewardPutParams = {
      TableName: rewardDbName,
      Item: newReward,
    };

    await ddb.put(rewardPutParams).promise();
    console.log('PUT NEW REWARD');

    // const redisVal = await redisGet('REWARD#' + userEmail);
    // console.log('GOT REDIS VAL');

    // if (redisVal !== null) {
    //   await redisDel('REWARD#' + userEmail);
    //   console.log('DELETED REDIS');
    // }
  }
};
