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
const region = process.env.REGION;

const ActivePickupTopicArn = process.env.ACTIVEPICKUPUPDATE_TOPIC_ARN;

aws.config.update({ region: region });

exports.handler = async event => {
  const args = event.arguments;
  const identity = event.identity;

  const userParams = {
    TableName: 'ToppingsDB',
    Key: {
      pk: 'USER#USER',
      sk: 'USER#' + args.userId,
    },
  };

  const userResp = await ddb.get(userParams).promise();
  const user = userResp.Item;

  if (!checkIdentity(args.userId, identity)) {
    const resp = {
      statusCode: 401,
      body: 'UNAUTHORIZED',
    };

    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  const updateParams = {
    TableName: 'ToppingsDB',
    Key: {
      pk: 'USER#USER',
      sk: 'USER#' + args.userId,
    },
    UpdateExpression: 'set pfp = :pfp, #updatedAt = :updatedAt',
    ExpressionAttributeNames: {
      '#updatedAt': 'updatedAt',
    },
    ExpressionAttributeValues: {
      ':pfp': args.pfp,
      ':updatedAt': new Date().toISOString(),
    },
    ReturnValues: 'UPDATED_NEW',
  };

  await ddb.update(updateParams).promise();

  const activePickupSnsMessage = {
    delivererId: args.userId,
  };

  const activePickupSnsParams = {
    Message: JSON.stringify(activePickupSnsMessage),
    TopicArn: ActivePickupTopicArn,
  };

  await sns.publish(activePickupSnsParams).promise();

  const resp = {
    pk: user.pk,
    sk: user.sk,
    name: user.name,
    phoneNumber: user.phoneNumber,
    pfp: args.pfp,
  };

  return resp;
};

const checkIdentity = (userId, identity) => {
  return userId === identity.username;
};
