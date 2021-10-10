var aws = require('aws-sdk');
var redis = require('redis');
var { promisify } = require('util');

const listRestaurantsInfo = require('/opt/nodejs/index.js');

const prod = process.env.PROD === 'true';
const redisEndpoint = prod ? 'redis.gfmuwq.0001.use1.cache.amazonaws.com' : 'redis-dev.gfmuwq.0001.use1.cache.amazonaws.com';

const redisOptions = {
  host: redisEndpoint,
  port: 6379
};

redis.debug_mode = false;

const redisClient = redis.createClient(redisOptions);

let redisGet = promisify(redisClient.get).bind(redisClient);
let redisSet = promisify(redisClient.set).bind(redisClient);

var ddb = new aws.DynamoDB.DocumentClient();

const restaurantDbName = process.env.RESTAURANTDB_NAME;
const restaurantImageDbName = process.env.RESTAURANTIMAGEDB_NAME;

const region = process.env.REGION;

aws.config.update({region: region});


exports.handler = async (event) => {
  const args = event.arguments;

  const redisVal = await redisGet('RESTAURANTS');
  console.log('GOT REDIS');
  
  if (redisVal) {
    console.log('IS REDIS');
    return JSON.parse(redisVal);
  }

  const resp = await listRestaurantsInfo();

  await redisSet('RESTAURANTS', JSON.stringify(resp), 'EX', 60 * 60 * 24);
  console.log('SET REDIS');

  return resp;
};
