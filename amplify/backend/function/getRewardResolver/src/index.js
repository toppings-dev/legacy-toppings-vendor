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
const rewardDbName = process.env.REWARDDB_NAME;

exports.handler = async event => {
  const args = event.arguments;
  const identity = event.identity;

  if (!(await checkSecurity(args.userId, identity))) {
    console.log('UNAUTHORIZED');

    const resp = {
      statusCode: 401,
      body: 'UNAUTHORIZED',
    };
    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  const redisVal = await redisGet('REWARD#' + args.userId + '#' + args.menuId);
  console.log('GOT REDIS');

  if (redisVal !== null) {
    console.log('IS REDIS');

    const redisResp = JSON.parse(redisVal);

    if (redisResp.body === 'REWARD DOES NOT EXIST') {
      return Promise.reject(new Error(redisVal));
    }

    return redisResp;
  }

  const rewardParams = {
    TableName: rewardDbName,
    IndexName: 'byMenu',
    KeyConditionExpression: 'menuId = :menuId and userId = :userId',
    ExpressionAttributeValues: {
      ':menuId': args.menuId,
      ':userId': args.userId,
    },
  };

  const rewardResp = await ddb.query(rewardParams).promise();
  const reward = rewardResp.Items[0];
  console.log('GOT REWARD');

  if (!reward) {
    console.log('NO REWARD');
    const resp = {
      statusCode: 400,
      body: 'REWARD DOES NOT EXIST',
    };

    await redisSet('REWARD#' + args.userId + '#' + args.menuId, JSON.stringify(resp), 'EX', 60 * 60 * 24);
    console.log('SET REDIS');

    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  const resp = reward;

  await redisSet('REWARD#' + args.userId + '#' + args.menuId, JSON.stringify(resp), 'EX', 60 * 60 * 24);
  console.log('SET REDIS');

  return resp;
};

const checkSecurity = async (userId, identity) => {
  return userId === identity.username;
};
