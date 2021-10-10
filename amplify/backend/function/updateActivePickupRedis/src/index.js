var aws = require('aws-sdk');
var redis = require('redis');
var { promisify } = require('util');

const getPickup = require('/opt/nodejs/index.js');

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
let redisDel = promisify(redisClient.del).bind(redisClient);

const pickupDbName = process.env.PICKUPDB_NAME;
const orderDbName = process.env.ORDERDB_NAME;
const userDbName = process.env.USERDB_NAME;
const orderItemDbName = process.env.ORDERITEMDB_NAME;
const restaurantDbName = process.env.RESTAURANTDB_NAME;
const restaurantImageDbName = process.env.RESTAURANTIMAGEDB_NAME;

exports.handler = async (event) => {

  for (var record of event.Records) {
    console.log(record);
    const message = JSON.parse(record.Sns.Message);

    const delivererId = message.delivererId;

    try {
      var activePickup = await getPickup(delivererId);
    } catch (err) {
      console.log('[ERROR GET PICKUP]:', err);
      
      const errorMessage = JSON.parse(err.message);
      
      if (errorMessage.statusCode === 200 && errorMessage.body === 'NO ACTIVE PICKUPS') {
        console.log('NO PICKUP');
        
        const redisVal = await redisGet('ACTIVEPICKUP#' + delivererId);
        console.log('GOT REDIS');
        
        if (redisVal) {
          console.log('IS REDIS');
          await redisDel('ACTIVEPICKUP#' + delivererId);
          console.log('DEL REDIS');
        }
    
        await redisSet('ACTIVEPICKUP#' + delivererId, JSON.stringify(errorMessage), 'EX', 60 * 60 * 24);
        console.log('SET REDIS');
      } else {
        console.log(record.Sns.MessageId + ' FAILED');
      }
    }
  
    if (activePickup) {
      const redisVal = await redisGet('ACTIVEPICKUP#' + delivererId);
      console.log('GOT REDIS');
      
      if (redisVal) {
        console.log('IS REDIS');
        await redisDel('ACTIVEPICKUP#' + delivererId);
        console.log('DEL REDIS');
      }
  
      await redisSet('ACTIVEPICKUP#' + delivererId, JSON.stringify(activePickup), 'EX', 60 * 60 * 24);
      console.log('SET REDIS');
    }
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify('SUCCESS'),
  };
  
  return response;
};
