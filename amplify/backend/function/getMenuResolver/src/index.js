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

const redisClient = redis.createClient(redisOptions);

let redisGet = promisify(redisClient.get).bind(redisClient);
let redisSet = promisify(redisClient.set).bind(redisClient);

var ddb = new aws.DynamoDB.DocumentClient();

const restaurantDbName = process.env.RESTAURANTDB_NAME;
const restaurantImageDbName = process.env.RESTAURANTIMAGEDB_NAME;
const menuCategoryDbName = process.env.MENUCATEGORYDB_NAME;
const menuItemDbName = process.env.MENUITEMDB_NAME;
const foodOptionDbName = process.env.FOODOPTIONDB_NAME;
const itemOptionCatJoinDbName = process.env.ITEMOPTIONCATJOINDB_NAME;
const optionDbName = process.env.OPTIONDB_NAME;
const itemOptionOptionJoinDbName = process.env.ITEMOPTIONOPTIONJOINDB_NAME;

const region = process.env.REGION;

aws.config.update({ region: region });

exports.handler = async event => {
  const args = event.arguments;

  console.log(args);
  console.log(event.identity);

  const redisVal = await redisGet('MENU#'.concat(args.id));
  console.log('GOT REDIS');

  if (redisVal !== null) {
    console.log('IS REDIS');
    return JSON.parse(redisVal);
  }

  const restParams = {
    TableName: 'ToppingsDB',
    Key: {
      pk: 'RESTAURANT#' + args.id,
      sk: 'RESTAURANT#' + args.id,
    },
  };

  const restResp = await ddb.get(restParams).promise();
  const rest = restResp.Item;

  const response = {
    ...rest,
    pk: undefined,
    sk: undefined,
    id: args.id,
  };

  await redisSet('MENU#'.concat(args.id), JSON.stringify(response), 'EX', 60 * 60 * 24);
  console.log('SET REDIS');

  return response;
};
