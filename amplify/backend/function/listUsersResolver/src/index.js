var aws = require('aws-sdk');

const prod = process.env.PROD === 'true';

var ddb = new aws.DynamoDB.DocumentClient();

const userDbName = process.env.USERDB_NAME;

exports.handler = async event => {
  const usersParams = {
    TableName: 'ToppingsDB',
    KeyConditionExpression: 'pk = :pk',
    ExpressionAttributeValues: {
      ':pk': 'USER#USER',
    },
  };

  const usersResp = await ddb.query(usersParams).promise();
  const users = usersResp.Items;

  const resp = [];

  for (var user of users) {
    if (!user.isUser) {
      continue;
    }

    resp.push({
      pk: user.pk,
      sk: user.sk,
      name: user.name,
      phoneNumber: user.phoneNumber,
      pfp: user.pfp,
    });
  }

  return resp;
};
