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

const userDbName = process.env.USERDB_NAME;
const referralDbName = process.env.REFERRALDB_NAME;

exports.handler = async (event) => {

  const args = event.arguments;
  const identity = event.identity;
  
  if (!(await checkSecurity(args.referrerUserId, identity))) {
    const resp = {
      statusCode: 401,
      body: 'UNAUTHORIZED',
    };

    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  let code = '';
  var codeIsUnique = false;
  while (!codeIsUnique) {
    code = generateCode();

    const referralParams = {
      TableName: referralDbName,
      Key: {
        code
      },
    };

    const referralResp = await ddb.get(referralParams).promise();
    if (!referralResp.Item) {
      codeIsUnique = true;
    }
  }

  const now = new Date().toISOString();

  const referralItem = {
    code,
    referrerUserId: args.referrerUserId,
    createdAt: now,
    updatedAt: now,
  };

  const referralPutParams = {
    TableName: referralDbName,
    Item: referralItem,
  };

  await ddb.put(referralPutParams).promise();

  return referralItem;
};

const checkSecurity = async (referrerUserId, identity) => {
  const referrerUserParams = {
    TableName: userDbName,
    Key: {
      email: referrerUserId,
    },
  };

  const referrerUserResp = await ddb.get(referrerUserParams).promise();
  const referrerUser = referrerUserResp.Item;

  return referrerUser.cognitoId === identity.username;
}

function generateCode() {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  for ( var i = 0; i < 5; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 return result;
}