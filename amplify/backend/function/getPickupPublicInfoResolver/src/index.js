var aws = require('aws-sdk');

const prod = process.env.PROD === 'true';

var ddb = new aws.DynamoDB.DocumentClient();

const pickupDbName = process.env.PICKUPDB_NAME;

exports.handler = async event => {
  const args = event.arguments;

  const pickupParams = {
    TableName: pickupDbName,
    Key: {
      id: args.id,
    },
  };

  const pickupResp = await ddb.get(pickupParams).promise();
  const pickup = pickupResp.Item;

  const resp = {
    id: pickup.id,
    delivererId: pickup.delivererId,
    closed: pickup.closed,
  };

  return resp;
};
