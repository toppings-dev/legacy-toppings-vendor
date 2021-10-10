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

const redisClient = redis.createClient(redisOptions);

const redisGet = promisify(redisClient.get).bind(redisClient);
const redisSet = promisify(redisClient.set).bind(redisClient);

var ddb = new aws.DynamoDB.DocumentClient();

const vendorRewardDbName = process.env.VENDORREWARDDB_NAME;

exports.handler = async (event) => {

  const args = event.arguments;

  const redisVal = await redisGet('VENDORREWARD#' + args.menuId);
  console.log('GOT REDIS');

  if (redisVal !== null) {
    console.log('IS REDIS');
    return JSON.parse(redisVal);
  }
  
  const vendorRewardsParams = {
    TableName: vendorRewardDbName,
    IndexName: 'byMenu',
    KeyConditionExpression: 'menuId = :menuId',
    ExpressionAttributeValues: {
      ':menuId': args.menuId
    }
  };

  const vendorRewardsResp = await ddb.query(vendorRewardsParams).promise();
  const vendorRewards = vendorRewardsResp.Items;
  console.log('GOT VENDOR REWARDS');
  
  const resp = vendorRewards;

  await redisSet('VENDORREWARD#' + args.menuId, JSON.stringify(resp), 'EX', 60 * 60 * 24);
  console.log('SET REDIS');

  return resp;
};
