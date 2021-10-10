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
const redisDel = promisify(redisClient.del).bind(redisClient);

exports.handler = async (event) => {
  
  for (var record of event.Records) {
    console.log(record);
    const message = JSON.parse(record.Sns.Message);

    const id = message.id;
  
    const redisVal = await redisGet('MENU#' + id);
    console.log('GOT REDIS');
    
    if (redisVal) {
      console.log('IS REDIS');
      await redisDel('MENU#' + id);
      console.log('DEL REDIS');
    }
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify('SUCCESS'),
  };
  
  return response;

};
