var aws = require('aws-sdk');

var ddb = new aws.DynamoDB.DocumentClient();

const userDbName = process.env.USERDB_NAME;
const restaurantDbName = process.env.RESTAURANTDB_NAME;
const restaurantImageDbName = process.env.RESTAURANTIMAGEDB_NAME;
const pickupDbName = process.env.PICKUPDB_NAME;

const listOpenPickups = async userId => {
  const pickupsParams = {
    TableName: pickupDbName,
    IndexName: 'byWindowClosed',
    KeyConditionExpression: 'windowClosed = :false',
    ExpressionAttributeValues: {
      ':false': 'false',
    },
  };

  const pickupsResp = await ddb.query(pickupsParams).promise();
  const pickups = pickupsResp.Items;
  console.log('GOT PICKUPS');

  var resp = [];

  for (var pickup of pickups) {
    if (pickup.delivererId === userId) {
      continue;
    }

    const pickupDelivererParams = {
      TableName: 'ToppingsDB',
      Key: {
        pk: 'USER#USER',
        sk: 'USER#' + userId,
      },
    };

    const pickupDelivererResp = await ddb.get(pickupDelivererParams).promise();
    const pickupDeliverer = pickupDelivererResp.Item;
    console.log('GOT PICKUP DELIVERER');

    const restaurantParams = {
      TableName: restaurantDbName,
      Key: {
        id: pickup.menuId,
      },
    };

    const restaurantResp = await ddb.get(restaurantParams).promise();
    const restaurant = restaurantResp.Item;
    console.log('GOT RESTAURANT');

    const restaurantImageParams = {
      TableName: restaurantImageDbName,
      IndexName: 'imagesByMenu',
      KeyConditionExpression: 'menuId = :menuId',
      ExpressionAttributeValues: {
        ':menuId': pickup.menuId,
      },
    };

    const restaurantImageResp = await ddb.query(restaurantImageParams).promise();
    const restaurantImage = restaurantImageResp.Items[0];
    console.log('GOT RESTAURANT IMAGE');

    const pickupObj = {
      id: pickup.id,
      delivererId: pickup.delivererId,
      deliverer: {
        pk: pickupDeliverer.pk,
        sk: pickupDeliverer.sk,
        name: pickupDeliverer.name,
        pfp: pickupDeliverer.pfp,
      },
      windowEndTime: pickup.windowEndTime,
      menuId: pickup.menuId,
      restaurant: {
        id: pickup.menuId,
        name: restaurant.name,
        images: [
          {
            url: restaurantImage.url,
          },
        ],
      },
    };

    resp.push(pickupObj);
  }

  return resp;
};

module.exports = listOpenPickups;
