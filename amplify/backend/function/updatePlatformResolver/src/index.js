var aws = require('aws-sdk');

const prod = process.env.PROD === 'true';

var ddb = new aws.DynamoDB.DocumentClient();

const userDbName = process.env.USERDB_NAME;

exports.handler = async event => {
  const args = event.arguments;
  const identity = event.identity;

  const userParams = {
    TableName: 'ToppingsDB',
    Key: {
      pk: 'USER#USER',
      sk: 'USER#' + args.userId,
    },
  };

  const userResp = await ddb.get(userParams).promise();
  const user = userResp.Item;

  if (!checkSecurity(args.userId, identity)) {
    const resp = {
      statusCode: 401,
      body: 'UNAUTHORIZED',
    };

    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  const userUpdateParams = {
    TableName: 'ToppingsDB',
    Key: {
      pk: 'USER#USER',
      sk: 'USER#' + args.userId,
    },
    UpdateExpression: 'set platform = :platform',
    ExpressionAttributeValues: {
      ':platform': args.platform,
    },
  };

  await ddb.update(userUpdateParams).promise();

  const resp = {
    pk: user.pk,
    sk: user.sk,
    name: user.name,
    phoneNumber: user.phoneNumber,
  };

  return resp;
};

const checkSecurity = (userId, identity) => {
  return userId === identity.username;
};
