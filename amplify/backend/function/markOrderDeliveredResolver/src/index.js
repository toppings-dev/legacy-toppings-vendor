var aws = require('aws-sdk');
var redis = require('redis');
var { promisify } = require('util');

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

var ddb = new aws.DynamoDB.DocumentClient();
var sns = new aws.SNS();

const userDbName = process.env.USERDB_NAME;
const orderDbName = process.env.ORDERDB_NAME;
const orderItemDbName = process.env.ORDERITEMDB_NAME;
const pickupDbName = process.env.PICKUPDB_NAME;
const restaurantDbName = process.env.RESTAURANTDB_NAME;

const ActivePickupTopicArn = process.env.ACTIVEPICKUPUPDATE_TOPIC_ARN;
const ActiveOrdersByCustomerTopicArn = process.env.ACTIVEORDERSBYCUSTOMERUPDATE_TOPIC_ARN;
const OrderInfoTopicArn = process.env.ORDERINFOUPDATE_TOPIC_ARN;
const PnsTopicArn = process.env.PNS_TOPIC_ARN;

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

  const pickupParams = {
    TableName: pickupDbName,
    Key: {
      id: order.pickupId,
    },
  };

  const pickupResp = await ddb.get(pickupParams).promise();
  const pickup = pickupResp.Item;

  const delivererParams = {
    TableName: 'ToppingsDB',
    Key: {
      pk: 'USER#USER',
      sk: 'USER#' + pickup.delivererId,
    },
  };

  const delivererResp = await ddb.get(delivererParams).promise();
  const deliverer = delivererResp.Item;

  if (!(await checkSecurity(pickup.delivererId, identity))) {
    const resp = {
      status: 401,
      body: 'UNAUTHORIZED',
    };

    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  if (!checkProcessable(order)) {
    const resp = {
      status: 422,
      body: 'UNPROCESSABLE ENTITY',
    };

    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  const updateOrderParams = {
    TableName: orderDbName,
    Key: {
      id: args.id,
    },
    UpdateExpression: 'set #status = :status',
    ExpressionAttributeNames: {
      '#status': 'status',
    },
    ExpressionAttributeValues: {
      ':status': 'DELIVERED',
    },
    ReturnValues: 'UPDATED_NEW',
  };

  await ddb.update(updateOrderParams).promise();

  const activePickupSnsMessage = {
    delivererId: pickup.delivererId,
  };

  const activePickupSnsParams = {
    Message: JSON.stringify(activePickupSnsMessage),
    TopicArn: ActivePickupTopicArn,
  };

  await sns.publish(activePickupSnsParams).promise();

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

  const restaurantParams = {
    TableName: restaurantDbName,
    Key: {
      id: pickup.menuId,
    },
  };

  const restaurantResp = await ddb.get(restaurantParams).promise();
  const restaurant = restaurantResp.Item;

  const customerParams = {
    TableName: 'ToppingsDB',
    Key: {
      pk: 'USER#USER',
      sk: 'USER#' + order.customerId,
    },
  };

  const customerResp = await ddb.get(customerParams).promise();
  const customer = customerResp.Item;

  const pnsSnsMessage = {
    users: [
      {
        title: 'Your order has been delivered!',
        body: `${deliverer.name} delivered your ${restaurant.name}`,
        deviceToken: customer.deviceToken,
        platform: customer.platform,
      },
    ],
  };

  const pnsSnsParams = {
    Message: JSON.stringify(pnsSnsMessage),
    TopicArn: PnsTopicArn,
  };

  await sns.publish(pnsSnsParams).promise();

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

  const resp = {
    ...order,
    charge_id: null,
    status: 'ACCEPTED',
    customer: {
      pk: customer.pk,
      sk: customer.sk,
      name: customer.name,
      phoneNumber: customer.phoneNumber,
      pfp: customer.pfp,
    },
    orderItems,
  };

  return resp;
};

const checkSecurity = async (delivererId, identity) => {
  return delivererId === identity.username;
};

const checkProcessable = order => {
  return (
    (order.status !== 'DELIVERED' &&
      order.status !== 'RECEIVED' &&
      order.status !== 'DECLINED' &&
      order.status !== 'PENDING') ||
    order.status !== 'CANCELED'
  );
};
