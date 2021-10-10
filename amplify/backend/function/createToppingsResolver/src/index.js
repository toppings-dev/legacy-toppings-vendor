var aws = require('aws-sdk');

var ddb = new aws.DynamoDB.DocumentClient();
var sns = new aws.SNS();

const foodOptionDbName = process.env.FOODOPTIONDB_NAME;
const optionDbName = process.env.OPTIONDB_NAME;
const itemOptionCatJoinDbName = process.env.ITEMOPTIONCATJOINDB_NAME;
const itemOptionOptionJoinDbName = process.env.ITEMOPTIONOPTIONJOINDB_NAME;
const restaurantDbName = process.env.RESTAURANTDB_NAME;
const userDbName = process.env.USERDB_NAME;

const menuUpdateTopicArn = process.env.MENUUPDATE_TOPIC_ARN;

exports.handler = async event => {
  const args = event.arguments;
  const identity = event.identity;

  const restaurantParams = {
    TableName: restaurantDbName,
    Key: {
      id: args.id,
    },
  };

  const restaurantResp = await ddb.get(restaurantParams).promise();
  const restaurant = restaurantResp.Item;

  const now = new Date().toISOString();

  if (!(await checkSecurity(restaurant, identity))) {
    const resp = {
      statusCode: 401,
      body: 'UNAUTHORIZED',
    };

    return Promise.reject(JSON.stringify(resp));
  }

  await Promise.all(
    args.selectedMenuItemToppings.map(async topping => {
      const toppingCategoryItem = {
        menuId: args.id,
        name: topping.foodOptionName,
        createdAt: now,
        updatedAt: now,
      };

      const toppingCategoryParams = {
        TableName: foodOptionDbName,
        Item: toppingCategoryItem,
      };

      await ddb.put(toppingCategoryParams).promise();
    })
  );

  await Promise.all(
    args.selectedMenuItemOptions.map(async option => {
      const toppingOptionItem = {
        menuId: args.id,
        name: option.optionName,
        createdAt: now,
        updatedAt: now,
      };

      const toppingOptionParams = {
        TableName: optionDbName,
        Item: toppingOptionItem,
      };

      await ddb.put(toppingOptionParams).promise();
    })
  );

  await Promise.all(
    args.selectedMenuItemToppings.concat(args.selectedMenuItemExistingToppings).map(async topping => {
      const toppingCategoryJoinerItem = {
        menuId: args.id,
        foodOptionName: topping.foodOptionName,
        menuItemName: args.menuItem.name,
        numchoices: topping.numchoices,
        createdAt: now,
        updatedAt: now,
      };

      const toppingCategoryJoinerParams = {
        TableName: itemOptionCatJoinDbName,
        Item: toppingCategoryJoinerItem,
      };

      await ddb.put(toppingCategoryJoinerParams).promise();
    })
  );

  await Promise.all(
    args.selectedMenuItemOptions.map(async option => {
      const toppingOptionJoinerItem = {
        menuId: args.id,
        foodOptionName: option.foodOptionName,
        optionName: option.optionName,
        createdAt: now,
        updatedAt: now,
      };

      const toppingOptionJoinerParams = {
        TableName: itemOptionOptionJoinDbName,
        Item: toppingOptionJoinerItem,
      };

      await ddb.put(toppingOptionJoinerParams).promise();
    })
  );

  const menuUpdateMessage = {
    id: args.id,
  };

  const menuUpdateParams = {
    Message: JSON.stringify(menuUpdateMessage),
    TopicArn: menuUpdateTopicArn,
  };

  await sns.publish(menuUpdateParams).promise();

  return restaurant;
};

const checkSecurity = async (restaurant, identity) => {
  return restaurant.userId === identity.username;
};
