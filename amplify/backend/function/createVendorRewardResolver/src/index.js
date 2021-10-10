var aws = require('aws-sdk');
var { v4: uuidv4 } = require('uuid');

var ddb = new aws.DynamoDB.DocumentClient();
var sns = new aws.SNS();

const vendorRewardDbName = process.env.VENDORREWARDDB_NAME;
const restaurantDbName = process.env.RESTAURANTDB_NAME;
const userDbName = process.env.USERDB_NAME;

const vendorRewardUpdateTopicArn = process.env.VENDORREWARDUPDATE_TOPIC_ARN;

exports.handler = async event => {
  const args = event.arguments;
  const identity = event.identity;

  if (!(await checkSecurity(args.menuId, identity))) {
    const resp = {
      statusCode: 401,
      body: 'UNAUTHORIZED',
    };

    return Promise.reject(JSON.stringify(resp));
  }

  const now = new Date().toISOString();

  const newVendorRewardItem = {
    ...args,
    id: uuidv4(),
    createdAt: now,
    updatedAt: now,
  };

  const vendorRewardPutParams = {
    TableName: vendorRewardDbName,
    Item: newVendorRewardItem,
  };

  await ddb.put(vendorRewardPutParams).promise();

  const vendorRewardSnsMessage = {
    menuId: args.menuId,
  };

  const vendorRewardSnsParams = {
    Message: JSON.stringify(vendorRewardSnsMessage),
    TopicArn: vendorRewardUpdateTopicArn,
  };

  await sns.publish(vendorRewardSnsParams).promise();

  return newVendorRewardItem;
};

const checkSecurity = async (restaurantId, identity) => {
  const restaurantParams = {
    TableName: restaurantDbName,
    Key: {
      id: restaurantId,
    },
  };

  const restaurantResp = await ddb.get(restaurantParams).promise();
  const restaurant = restaurantResp.Item;

  return restaurant.userId === identity.username;
};
