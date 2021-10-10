var aws = require('aws-sdk');
var redis = require('redis');
var { promisify } = require('util');

const prod = process.env.PROD === 'true';
const redisEndpoint = prod ? 'redis.gfmuwq.0001.use1.cache.amazonaws.com' : 'redis-dev.gfmuwq.0001.use1.cache.amazonaws.com';

const redisOptions = {
  host: redisEndpoint,
  port: 6379
};

redis.debug_mode = false;

// const redisClient = redis.createClient(redisOptions);

// const redisGet = promisify(redisClient.get).bind(redisClient);
// const redisSet = promisify(redisClient.set).bind(redisClient);

var ddb = new aws.DynamoDB.DocumentClient();

const referralDbName = process.env.REFERRALDB_NAME;

exports.handler = async (event) => {
  const attributes = event.request.userAttributes;
  
  const code = attributes['custom:referralCode'];

  if (code === '' || await checkReferralCode(code)) {
    console.log('CODE OK');

    return event;
  } else {
    console.log('CODE BAD');
  
    return Promise.reject(new Error('INVALID'));
  }
};

const checkReferralCode = async (code) => {
  const referralParams = {
    TableName: referralDbName,
    Key: {
      code
    },
  };

  const referralResp = await ddb.get(referralParams).promise();
  const referral = referralResp.Item;

  if (!referral) {
    return false;
  }

  if (referral.referredUserId) {
    return false;
  }

  return true;
}