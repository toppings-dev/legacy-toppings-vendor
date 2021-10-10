var aws = require('aws-sdk');

var ddb = new aws.DynamoDB.DocumentClient();
var sns = new aws.SNS();

const vendorRewardDbName = process.env.VENDORREWARDDB_NAME;
const restaurantDbName = process.env.RESTAURANTDB_NAME;
const userDbName = process.env.USERDB_NAME;

const vendorRewardUpdateTopicArn = process.env.VENDORREWARDUPDATE_TOPIC_ARN;

exports.handler = async event => {
  const args = event.arguments;
  const identity = event.identity;

  const vendorRewardParams = {
    TableName: vendorRewardDbName,
    Key: {
      id: args.id,
    },
  };

  const vendorRewardResp = await ddb.get(vendorRewardParams).promise();
  const vendorReward = vendorRewardResp.Item;

  if (!(await checkSecurity(vendorReward.menuId, identity))) {
    const resp = {
      statusCode: 401,
      body: 'UNAUTHORIZED',
    };

    return Promise.reject(JSON.stringify(resp));
  }

  const delParams = {
    TableName: vendorRewardDbName,
    Key: {
      id: args.id,
    },
  };

  await ddb.delete(delParams).promise();

  const vendorRewardSnsMessage = {
    menuId: vendorReward.menuId,
  };

  const vendorRewardSnsParams = {
    Message: JSON.stringify(vendorRewardSnsMessage),
    TopicArn: vendorRewardUpdateTopicArn,
  };

  await sns.publish(vendorRewardSnsParams).promise();

  return args;
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
