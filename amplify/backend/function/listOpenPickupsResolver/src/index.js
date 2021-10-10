var aws = require('aws-sdk');
var redis = require('redis');
var { promisify } = require('util');

const listOpenPickups = require('/opt/nodejs/index.js');

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

exports.handler = async event => {
  const args = event.arguments;
  const identity = event.identity;

  if (!(await checkSecurity(args.userId, identity))) {
    const resp = {
      statusCode: 401,
      body: 'UNAUTHORIZED',
    };

    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  const redisVal = await redisGet('OPENPICKUPS#' + args.userId);
  console.log('GOT REDIS');

  if (redisVal) {
    console.log('IS REDIS');
    return JSON.parse(redisVal);
  }

  const resp = await listOpenPickups(args.userId);

  await redisSet('OPENPICKUPS#' + args.userId, JSON.stringify(resp), 'EX', 60 * 60 * 24);
  console.log('SET REDIS');

  return resp;
};

const checkSecurity = async (userId, identity) => {
  return userId === identity.username;
};
