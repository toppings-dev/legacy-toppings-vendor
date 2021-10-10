var aws = require('aws-sdk');
var { v4: uuidv4 } = require('uuid');

var ddb = new aws.DynamoDB.DocumentClient();
var sns = new aws.SNS();

const menuCategoryDbName = process.env.MENUCATEGORYDB_NAME;
const restaurantDbName = process.env.RESTAURANTDB_NAME;
const userDbName = process.env.USERDB_NAME;

const menuUpdateTopicArn = process.env.MENUUPDATE_TOPIC_ARN;

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

  const newMenuCategoryItem = {
    id: uuidv4(),
    menuId: args.menuId,
    name: args.name,
    createdAt: now,
    updatedAt: now,
  };

  const menuCategoryPutParams = {
    TableName: menuCategoryDbName,
    Item: newMenuCategoryItem,
  };

  await ddb.put(menuCategoryPutParams).promise();

  const menuSnsMessage = {
    id: args.menuId,
  };

  const menuSnsParams = {
    Message: JSON.stringify(menuSnsMessage),
    TopicArn: menuUpdateTopicArn,
  };

  await sns.publish(menuSnsParams).promise();

  return newMenuCategoryItem;
};

const checkSecurity = async (menuId, identity) => {
  const restaurantParams = {
    TableName: restaurantDbName,
    Key: {
      id: menuId,
    },
  };

  const restaurantResp = await ddb.get(restaurantParams).promise();
  const restaurant = restaurantResp.Item;

  return restaurant.userId === identity.username;
};
