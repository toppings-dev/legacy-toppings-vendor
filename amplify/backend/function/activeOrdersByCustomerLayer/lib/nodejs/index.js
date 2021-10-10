var aws = require('aws-sdk');

var ddb = new aws.DynamoDB.DocumentClient();

const userDbName = process.env.USERDB_NAME;
const restaurantDbName = process.env.RESTAURANTDB_NAME;
const restaurantImageDbName = process.env.RESTAURANTIMAGEDB_NAME;
const orderDbName = process.env.ORDERDB_NAME;
const pickupDbName = process.env.PICKUPDB_NAME;

const listActiveOrdersByCustomer = async customerId => {
  const ordersParams = {
    TableName: orderDbName,
    IndexName: 'byCustomerId',
    KeyConditionExpression: 'customerId = :customerId and closed = :false',
    ExpressionAttributeValues: {
      ':customerId': customerId,
      ':false': 'false',
    },
  };

  const ordersResp = await ddb.query(ordersParams).promise();
  console.log('GOT ORDERS');

  var resp = [];

  for (var order of ordersResp.Items) {
    const pickupParams = {
      TableName: pickupDbName,
      Key: {
        id: order.pickupId,
      },
    };

    const pickupResp = await ddb.get(pickupParams).promise();
    const pickup = pickupResp.Item;
    console.log('GOT PICKUP');

    const pickupDelivererParams = {
      TableName: 'ToppingsDB',
      Key: {
        pk: 'USER#USER',
        sk: 'USER#' + pickup.delivererId,
      },
    };

    const pickupDelivererResp = await ddb.get(pickupDelivererParams).promise();
    const pickupDeliverer = pickupDelivererResp.Item;

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

    const curOrderObj = {
      id: order.id,
      status: order.status,
      pickupId: pickup.id,
      pickup: {
        id: pickup.id,
        delivererId: pickup.delivererId,
        deliverer: {
          pk: pickupDeliverer.pk,
          sk: pickupDeliverer.sk,
          phoneNumber: pickupDeliverer.phoneNumber,
          name: pickupDeliverer.name,
          pfp: pickupDeliverer.pfp,
        },
      },
      orderRestaurantId: restaurant.id,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        images: [
          {
            url: restaurantImage.url,
          },
        ],
      },
    };

    resp.push(curOrderObj);
  }

  return resp;
};

module.exports = listActiveOrdersByCustomer;
