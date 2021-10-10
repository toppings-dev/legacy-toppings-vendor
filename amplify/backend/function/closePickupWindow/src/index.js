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
// const redisDel = promisify(redisClient.del).bind(redisClient);

var ddb = new aws.DynamoDB.DocumentClient();
var sns = new aws.SNS();

const pickupDbName = process.env.PICKUPDB_NAME;
const userDbName = process.env.USERDB_NAME;
const orderDbName = process.env.ORDERDB_NAME;

const ActivePickupTopicArn = process.env.ACTIVEPICKUPUPDATE_TOPIC_ARN;
const OpenPickupsTopicArn = process.env.OPENPICKUPS_TOPIC_ARN;
const OrderInfoTopicArn = process.env.ORDERINFOUPDATE_TOPIC_ARN;

exports.handler = async event => {
  const pickupId = event.Payload.pickupId;

  const updatePickupParams = {
    TableName: pickupDbName,
    Key: {
      id: pickupId,
    },
    UpdateExpression: 'set #status = :status, #windowClosed = :windowClosed, #updatedAt = :updatedAt',
    ExpressionAttributeNames: {
      '#status': 'status',
      '#windowClosed': 'windowClosed',
      '#updatedAt': 'updatedAt',
    },
    ExpressionAttributeValues: {
      ':status': 'PREPARING',
      ':windowClosed': 'true',
      ':updatedAt': new Date().toISOString(),
    },
  };

  await ddb.update(updatePickupParams).promise();
  console.log('UPDATED PICKUP');

  const pickupParams = {
    TableName: pickupDbName,
    Key: {
      id: pickupId,
    },
  };

  const pickupResp = await ddb.get(pickupParams).promise();
  const pickup = pickupResp.Item;

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

  const ordersParams = {
    TableName: orderDbName,
    IndexName: 'byPickupId',
    KeyConditionExpression: 'pickupId = :pickupId',
    ExpressionAttributeValues: {
      ':pickupId': pickupId,
    },
  };

  const ordersResp = await ddb.query(ordersParams).promise();
  const orders = ordersResp.Items;

  for (var order of orders) {
    const orderInfoSnsMessage = {
      id: order.id,
    };

    const orderInfoSnsParams = {
      Message: JSON.stringify(orderInfoSnsMessage),
      TopicArn: OrderInfoTopicArn,
    };

    await sns.publish(orderInfoSnsParams).promise();
  }
};
