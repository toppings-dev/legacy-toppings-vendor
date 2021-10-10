var aws = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const prod = process.env.PROD === 'true';

var ddb = new aws.DynamoDB.DocumentClient();
var sns = new aws.SNS();

const restaurantDbName = process.env.RESTAURANTDB_NAME;
const restaurantArn = process.env.RESTAURANTUPDATE_TOPIC_ARN;
exports.handler = async event => {
  const args = event.arguments;
  const identity = event.identity;
  const now = new Date().toISOString();

  const restaurantParams = {
    TableName: restaurantDbName,
    IndexName: 'byUserId',
    KeyConditionExpression: 'userId = :userId',
    ExpressionAttributeValues: {
      ':userId': args.userId,
    },
  };

  const restaurantResp = await ddb.query(restaurantParams).promise();
  const restaurant = restaurantResp.Items[0];

  if (restaurant) {
    return restaurant;
  }
  // for (var restaurant of restaurants) {
  //   if (restaurant.name === args.name) {
  //     return restaurant;
  //   }
  // }

  const restaurantItem = {
    name: args.name,
    id: uuidv4(),
    userId: args.userId,
    address: args.address,
    city: args.city,
    description: args.description,
    lat: args.lat,
    long: args.long,
    phoneNumber: args.phoneNumber,
    state: args.state,
    zip_code: args.zip_code,
    isOpen: 'true',
    createdAt: now,
    updatedAt: now,
  };
  const restaurantPutParams = {
    TableName: restaurantDbName,
    Item: restaurantItem,
  };
  await ddb.put(restaurantPutParams).promise();

  const toppingsDbRestaurantItem = {
    pk: 'RESTAURANT#' + restaurantItem.id,
    sk: 'RESTAURANT#' + restaurantItem.id,
    ...restaurantItem,
  };

  const topRestPutParams = {
    TableName: 'ToppingsDB',
    Item: toppingsDbRestaurantItem,
  };

  await ddb.put(topRestPutParams).promise();
  
  const restaurantSnsMessage = {
    id: args.id,
  };
  const restaurantSnsParams = {
    Message: JSON.stringify(restaurantSnsMessage),
    TopicArn: restaurantArn,
  };
  await sns.publish(restaurantSnsParams).promise();
  return restaurantItem;
};