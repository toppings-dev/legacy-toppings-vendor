var aws = require('aws-sdk');
var redis = require('redis');
var { promisify } = require('util');

const listRestaurants = require('/opt/nodejs/index.js');

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

const restaurantDbName = process.env.RESTAURANTDB_NAME;
const restaurantImageDbName = process.env.RESTAURANTIMAGEDB_NAME;

exports.handler = async (event) => {
  
  for (var record of event.Records) {
    console.log(record);
    const message = JSON.parse(record.Sns.Message);

    try {
      var restaurants = await listRestaurants();
    } catch (err) {
      console.log('[ERROR GET PICKUP]:', err);
      
      console.log(record.Sns.MessageId + ' FAILED');
    }
  
    if (restaurants) {
      const redisVal = await redisGet('RESTAURANTS');
      console.log('GOT REDIS');
      
      if (redisVal) {
        console.log('IS REDIS');
        await redisDel('RESTAURANTS');
        console.log('DEL REDIS');
      }
  
      await redisSet('RESTAURANTS', JSON.stringify(restaurants), 'EX', 60 * 60 * 24);
      console.log('SET REDIS');
    }
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify('SUCCESS'),
  };
  
  return response;

};
