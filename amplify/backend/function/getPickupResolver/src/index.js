var aws = require('aws-sdk');
var redis = require('redis');
var { promisify } = require('util');

const getPickup = require('/opt/nodejs/index.js');

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

let redisGet = promisify(redisClient.get).bind(redisClient);
let redisSet = promisify(redisClient.set).bind(redisClient);
let redisDel = promisify(redisClient.del).bind(redisClient);

var ddb = new aws.DynamoDB.DocumentClient();

const pickupDbName = process.env.PICKUPDB_NAME;
const orderDbName = process.env.ORDERDB_NAME;
const userDbName = process.env.USERDB_NAME;
const orderItemDbName = process.env.ORDERITEMDB_NAME;
const restaurantDbName = process.env.RESTAURANTDB_NAME;
const restaurantImageDbName = process.env.RESTAURANTIMAGEDB_NAME;

const region = process.env.REGION;

aws.config.update({ region: region });

exports.handler = async event => {
  const args = event.arguments;
  const identity = event.identity;

  const redisVal = await redisGet('ACTIVEPICKUP#' + args.delivererId);
  console.log('GOT REDIS');

  if (redisVal) {
    const redisParsed = JSON.parse(redisVal);
    if (redisParsed.statusCode === 200 && redisParsed.body === 'NO ACTIVE PICKUPS') {
      return Promise.reject(new Error(redisVal));
    } else {
      return redisParsed;
    }
  }

  const pickupParams = {
    TableName: pickupDbName,
    IndexName: 'byDelivererId',
    KeyConditionExpression: 'delivererId = :delivererId and closed = :closed',
    ExpressionAttributeValues: {
      ':delivererId': args.delivererId,
      ':closed': 'false',
    },
  };

  const pickupResp = await ddb.query(pickupParams).promise();
  const pickup = pickupResp.Items[0];
  console.log('GOT PICKUP');

  if (!pickup) {
    const resp = {
      statusCode: 200,
      body: 'NO ACTIVE PICKUPS',
    };
    console.log('NO ACTIVE PICKUPS');

    await redisSet('ACTIVEPICKUP#' + args.delivererId, JSON.stringify(resp), 'EX', 60 * 60 * 24);

    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  if (!(await checkSecurity(pickup, identity))) {
    const resp = {
      statusCode: 401,
      body: 'UNAUTHORIZED',
    };
    console.log('UNAUTHORIZED');

    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  const resp = await getPickup(args.delivererId);

  await redisSet('ACTIVEPICKUP#' + args.delivererId, JSON.stringify(resp), 'EX', 60 * 60 * 24);
  console.log('SET REDIS');

  return resp;
};

const checkSecurity = async (pickup, identity) => {
  return pickup.delivererId === identity.username;
};
