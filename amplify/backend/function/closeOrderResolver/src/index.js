var aws = require('aws-sdk');
var redis = require('redis');
var { promisify } = require('util');
const { v4: uuidv4 } = require('uuid');

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
const restaurantDbName = process.env.RESTAURANTDB_NAME;
const orderDbName = process.env.ORDERDB_NAME;
const orderItemDbName = process.env.ORDERITEMDB_NAME;
const pickupDbName = process.env.PICKUPDB_NAME;
const rewardDbName = process.env.REWARDDB_NAME;

const ActivePickupTopicArn = process.env.ACTIVEPICKUPUPDATE_TOPIC_ARN;
const ActiveOrdersByCustomerTopicArn = process.env.ACTIVEORDERSBYCUSTOMERUPDATE_TOPIC_ARN;
const OrderInfoTopicArn = process.env.ORDERINFOUPDATE_TOPIC_ARN;
const RewardInfoTopicArn = process.env.REWARDINFOUPDATE_TOPIC_ARN;
const OpenPickupsTopicArn = process.env.OPENPICKUPS_TOPIC_ARN;

exports.handler = async event => {
  const args = event.arguments;
  const identity = event.identity;

  const orderParams = {
    TableName: orderDbName,
    Key: {
      id: args.id,
    },
  };

  const orderResp = await ddb.get(orderParams).promise();
  const order = orderResp.Item;
  console.log('GOT ORDER');

  if (!(await checkSecurity(order, identity))) {
    const resp = {
      statusCode: 401,
      body: 'UNAUTHORIZED',
    };
    console.log('UNAUTHORIZED');

    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  if (order.closed === 'true' || order.status === 'RECEIVED') {
    const resp = {
      statusCode: 422,
      body: 'UNPROCESSABLE ENTITY',
    };
    console.log('UNPROCESSABLE ENTITY');

    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  const orderUpdateParams = {
    TableName: orderDbName,
    Key: {
      id: args.id,
    },
    UpdateExpression: 'set closed = :true, #status = :RECEIVED, #updatedAt = :updatedAt',
    ExpressionAttributeNames: {
      '#status': 'status',
      '#updatedAt': 'updatedAt',
    },
    ExpressionAttributeValues: {
      ':true': 'true',
      ':RECEIVED': 'RECEIVED',
      ':updatedAt': new Date().toISOString(),
    },
  };

  await ddb.update(orderUpdateParams).promise();
  console.log('UPDATED ORDER');

  const orderItemsParams = {
    TableName: orderItemDbName,
    IndexName: 'byOrder',
    KeyConditionExpression: 'orderId = :orderId',
    ExpressionAttributeValues: {
      ':orderId': args.id,
    },
  };

  const orderItemsResp = await ddb.query(orderItemsParams).promise();
  const orderItems = orderItemsResp.Items;
  console.log('GOT ORDER ITEMS');

  let totalOrderPrice = 0;

  for (var orderItem of orderItems) {
    totalOrderPrice += orderItem.price_per_item * orderItem.quantity;
  }

  if (totalOrderPrice > 5) {
    await updateRewardPoints(order.orderRestaurantId, order.customerId, 0);
  }

  const pickupParams = {
    TableName: pickupDbName,
    Key: {
      id: order.pickupId,
    },
  };

  const pickupResp = await ddb.get(pickupParams).promise();
  const pickup = pickupResp.Item;
  console.log('GOT PICKUP');

  await updateRewardPoints(order.orderRestaurantId, pickup.delivererId, orderItems.length);

  const pickupOrdersParams = {
    TableName: orderDbName,
    IndexName: 'byPickupId',
    KeyConditionExpression: 'pickupId = :pickupId',
    ExpressionAttributeValues: {
      ':pickupId': order.pickupId,
    },
  };

  const pickupOrdersResp = await ddb.query(pickupOrdersParams).promise();
  const pickupOrders = pickupOrdersResp.Items;
  console.log('GOT ORDERS');

  let allOrdersClosed = true;

  for (var pickupOrder of pickupOrders) {
    if (pickupOrder.closed !== 'true') {
      allOrdersClosed = false;
      break;
    }
  }

  if (allOrdersClosed) {
    console.log('PICKUP TO CLOSE');
    const pickupUpdateParams = {
      TableName: pickupDbName,
      Key: {
        id: order.pickupId,
      },
      UpdateExpression: 'set closed = :true, #status = :CLOSED, windowClosed = :windowClosed, #updatedAt = :updatedAt',
      ExpressionAttributeNames: {
        '#status': 'status',
        '#updatedAt': 'updatedAt',
      },
      ExpressionAttributeValues: {
        ':true': 'true',
        ':CLOSED': 'CLOSED',
        ':windowClosed': 'true',
        ':updatedAt': new Date().toISOString(),
      },
    };

    await ddb.update(pickupUpdateParams).promise();
    console.log('UPDATED PICKUP');

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
        id: user.sk.substring(5),
      };

      const openPickupsSnsParams = {
        Message: JSON.stringify(openPickupsSnsMessage),
        TopicArn: OpenPickupsTopicArn,
      };

      await sns.publish(openPickupsSnsParams).promise();
    }
  }

  const restaurantParams = {
    TableName: restaurantDbName,
    Key: {
      id: order.orderRestaurantId,
    },
  };

  const restaurantResp = await ddb.get(restaurantParams).promise();
  const restaurant = restaurantResp.Item;
  console.log('GOT RESTAURANT');

  const activeOrdersByCustomerSnsMessage = {
    customerId: order.customerId,
  };

  const activeOrdersByCustomerSnsParams = {
    Message: JSON.stringify(activeOrdersByCustomerSnsMessage),
    TopicArn: ActiveOrdersByCustomerTopicArn,
  };

  await sns.publish(activeOrdersByCustomerSnsParams).promise();

  const orderInfoSnsMessage = {
    id: args.id,
  };

  const orderInfoSnsParams = {
    Message: JSON.stringify(orderInfoSnsMessage),
    TopicArn: OrderInfoTopicArn,
  };

  await sns.publish(orderInfoSnsParams).promise();

  const rewardInfoSnsMessage = {
    userEmail: order.customerId,
    menuId: order.orderRestaurantId,
  };

  const rewardInfoSnsParams = {
    Message: JSON.stringify(rewardInfoSnsMessage),
    TopicArn: RewardInfoTopicArn,
  };

  await sns.publish(rewardInfoSnsParams).promise();

  const resp = {
    ...order,
    closed: 'true',
    status: 'RECEIVED',
    restaurant: {
      name: restaurant.name,
    },
  };

  return resp;
};

const checkSecurity = async (order, identity) => {
  return order.customerId === identity.username;
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
        ':points': reward.points + 4 + numOrderItems,
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
      points: 4 + numOrderItems,
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
