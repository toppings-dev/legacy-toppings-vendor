var aws = require('aws-sdk');
var redis = require('redis');
var { promisify } = require('util');

const listActiveOrdersByCustomer = require ('/opt/nodejs/index.js');

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
const redisDel = promisify(redisClient.del).bind(redisClient);

var ddb = new aws.DynamoDB.DocumentClient();

const userDbName = process.env.USERDB_NAME;
const restaurantDbName = process.env.RESTAURANTDB_NAME;
const restaurantImageDbName = process.env.RESTAURANTIMAGEDB_NAME;
const orderDbName = process.env.ORDERDB_NAME;
const pickupDbName = process.env.PICKUPDB_NAME;

exports.handler = async (event) => {
  for (var record of event.Records) {
    console.log(record);
    const message = JSON.parse(record.Sns.Message);

    const customerId = message.customerId;

    try {
      var activeOrders = await listActiveOrdersByCustomer(customerId);
    } catch (err) {
      console.log('[ERROR LIST ORDERS]:', err);

      console.log(record.Sns.MessageId + ' FAILED');
    }
  
    if (activeOrders) {
      const redisVal = await redisGet('ACTIVEORDERSBYCUSTOMER#' + customerId);
      console.log('GOT REDIS');
      
      if (redisVal) {
        console.log('IS REDIS');
        await redisDel('ACTIVEORDERSBYCUSTOMER#' + customerId);
        console.log('DEL REDIS');
      }
  
      await redisSet('ACTIVEORDERSBYCUSTOMER#' + customerId, JSON.stringify(activeOrders), 'EX', 60 * 60 * 24);
      console.log('SET REDIS');
    }
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify('SUCCESS'),
  };
  
  return response;
};
