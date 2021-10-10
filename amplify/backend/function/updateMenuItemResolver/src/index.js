var aws = require('aws-sdk');

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

  const updateParams = {
    TableName: menuItemDbName,
    Key: {
      id: args.id,
    },
    UpdateExpression:
      'set menuId = :menuId, menuCategoryName = :menuCategoryName, #name = :name, description = :description, price = :price, #updatedAt = :updatedAt',
    ExpressionAttributeNames: {
      '#name': 'name',
      '#updatedAt': 'updatedAt',
    },
    ExpressionAttributeValues: {
      ':menuCategoryName': args.menuCategoryName,
      ':menuId': args.menuId,
      ':name': args.name,
      ':description': args.description,
      ':price': args.price,
      ':updatedAt': now,
    },
    ReturnValues: 'UPDATED_NEW',
  };

  await ddb.update(updateParams).promise();

  const menuUpdateMessage = {
    id: args.menuId,
  };

  const menuUpdateParams = {
    Message: JSON.stringify(menuUpdateMessage),
    TopicArn: menuUpdateTopicArn,
  };

  await sns.publish(menuUpdateParams).promise();

  const newMenuItem = {
    id: args.id,
    name: args.name,
    menuCategoryName: args.menuCategoryName,
    menuId: args.menuId,
    description: args.description,
    price: args.price,
    updatedAt: now,
  };

  return newMenuItem;
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
