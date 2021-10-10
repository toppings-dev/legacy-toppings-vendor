var aws = require('aws-sdk');

var ddb = new aws.DynamoDB.DocumentClient();

const restaurantDbName = process.env.RESTAURANTDB_NAME;
const userDbName = process.env.USERDB_NAME;
const menuItemDbName = process.env.MENUITEMDB_NAME;

exports.handler = async event => {
  const args = event.arguments;
  const identity = event.identity;

  if (!(await checkSecurity(args.id, identity))) {
    const resp = {
      statusCode: 401,
      body: 'UNAUTHORIZED',
    };

    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  const deleteParams = {
    TableName: menuItemDbName,
    Key: {
      id: args.id,
    },
  };

  await ddb.delete(deleteParams).promise();

  const resp = {
    id: args.id,
  };

  return resp;
};

const checkSecurity = async (menuItemId, identity) => {
  const menuItemParams = {
    TableName: menuItemDbName,
    Key: {
      id: menuItemId,
    },
  };

  const menuItemResp = await ddb.get(menuItemParams).promise();
  const menuItem = menuItemResp.Item;

  const restaurantParams = {
    TableName: restaurantDbName,
    Key: {
      id: menuItem.menuId,
    },
  };

  const restaurantResp = await ddb.get(restaurantParams).promise();
  const restaurant = restaurantResp.Item;

  return restaurant.userId === identity.username;
};
