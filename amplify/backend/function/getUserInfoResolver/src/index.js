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

const userDbName = process.env.USERDB_NAME;

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

  const userResp = ddb.get(userParams).promise();
  const user = (await userResp).Item;

  if (!checkSecurity(args.userId, identity)) {
    const resp = {
      status: 401,
      body: 'UNAUTHORIZED',
    };

    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  const resp = {
    pk: user.pk,
    sk: user.sk,
    phoneNumber: user.phoneNumber,
    name: user.name,
    pfp: user.pfp,
    referralCode: user.referralCode,
    referredUsers: user.referredUsers,
  };

  return resp;
};

const checkSecurity = (userId, identity) => {
  return userId === identity.username;
};
