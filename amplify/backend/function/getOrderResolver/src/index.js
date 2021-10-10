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

const redisClient = redis.createClient(redisOptions);

const redisGet = promisify(redisClient.get).bind(redisClient);
const redisSet = promisify(redisClient.set).bind(redisClient);

var ddb = new aws.DynamoDB.DocumentClient();

const userDbName = process.env.USERDB_NAME;
const restaurantDbName = process.env.RESTAURANTDB_NAME;
const restaurantImageDbName = process.env.RESTAURANTIMAGEDB_NAME;
const pickupDbName = process.env.PICKUPDB_NAME;
const orderDbName = process.env.ORDERDB_NAME;
const orderItemDbName = process.env.ORDERITEMDB_NAME;

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

    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  const redisVal = await redisGet('ORDERINFO#' + args.id);

  if (redisVal !== null) {
    return JSON.parse(redisVal);
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

  const restaurantImageParams = {
    TableName: restaurantImageDbName,
    IndexName: 'imagesByMenu',
    KeyConditionExpression: 'menuId = :menuId',
    ExpressionAttributeValues: {
      ':menuId': restaurant.id,
    },
  };

  const restaurantImagesResp = await ddb.query(restaurantImageParams).promise();
  const restaurantImages = restaurantImagesResp.Items;
  console.log('GOT RESTAURANT IMAGES');

  const pickupParams = {
    TableName: pickupDbName,
    Key: {
      id: order.pickupId,
    },
  };

  const pickupResp = await ddb.get(pickupParams).promise();
  const pickup = pickupResp.Item;
  console.log('GOT PICKUP');

  const delivererParams = {
    TableName: 'ToppingsDB',
    Key: {
      pk: 'USER#USER',
      sk: 'USER#' + pickup.delivererId,
    },
  };

  const delivererResp = await ddb.get(delivererParams).promise();
  const deliverer = delivererResp.Item;
  console.log('GOT DELIVERER');

  const customerParams = {
    TableName: 'ToppingsDb',
    Key: {
      pk: 'USER#USER',
      sk: 'USER#' + order.customerId,
    },
  };

  const customerResp = await ddb.get(customerParams).promise();
  const customer = customerResp.Item;

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
    restaurant: {
      ...restaurant,
      images: restaurantImages,
    },
    customer: {
      pk: customer.pk,
      sk: customer.sk,
      deviceToken: customer.deviceToken,
      name: customer.name,
      isUser: customer.isUser,
      phoneNumber: customer.phoneNumber,
      platform: customer.platform,
    },
    pickup: {
      ...pickup,
      deliverer: {
        pk: deliverer.pk,
        sk: deliverer.sk,
        name: deliverer.name,
        phoneNumber: deliverer.phoneNumber,
      },
    },
    orderItems,
  };

  await redisSet('ORDERINFO#' + args.id, JSON.stringify(resp), 'EX', 60 * 60 * 24);

  return resp;
};

const checkSecurity = async (order, identity) => {
  return order.customerId === identity.username;
};
