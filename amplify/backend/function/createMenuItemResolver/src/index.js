var aws = require('aws-sdk');
var { v4: uuidv4 } = require('uuid');

var ddb = new aws.DynamoDB.DocumentClient();
var sns = new aws.SNS();

const menuItemDbName = process.env.MENUITEMDB_NAME;
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

  const menuItemItem = {
    id: uuidv4(),
    menuId: args.menuId,
    menuCategoryName: args.menuCategoryName,
    name: args.name,
    description: args.description,
    price: args.price,
    createdAt: now,
    updatedAt: now,
  };

  const menuItemParams = {
    TableName: menuItemDbName,
    Item: menuItemItem,
  };

  await ddb.put(menuItemParams).promise();

  const menuUpdateMessage = {
    id: args.menuId,
  };

  const menuUpdateParams = {
    Message: JSON.stringify(menuUpdateMessage),
    TopicArn: menuUpdateTopicArn,
  };

  await sns.publish(menuUpdateParams).promise();

  return menuItemItem;
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
