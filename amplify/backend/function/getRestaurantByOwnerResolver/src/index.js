var aws = require('aws-sdk');

var ddb = new aws.DynamoDB.DocumentClient();

const restaurantDbName = process.env.RESTAURANTDB_NAME;
const userDbName = process.env.USERDB_NAME;

exports.handler = async event => {
  const args = event.arguments;
  const identity = event.identity;

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

  if (!(await checkSecurity(restaurant.userId, identity))) {
    const resp = {
      statusCode: 401,
      body: 'UNAUTHORIZED',
    };

    return Promise.reject(JSON.stringify(resp));
  }

  return restaurant;
};

const checkSecurity = async (userId, identity) => {
  return userId === identity.username;
};
