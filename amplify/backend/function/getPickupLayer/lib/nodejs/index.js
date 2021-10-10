var aws = require('aws-sdk');

var ddb = new aws.DynamoDB.DocumentClient();

const pickupDbName = process.env.PICKUPDB_NAME;
const orderDbName = process.env.ORDERDB_NAME;
const userDbName = process.env.USERDB_NAME;
const orderItemDbName = process.env.ORDERITEMDB_NAME;
const restaurantDbName = process.env.RESTAURANTDB_NAME;
const restaurantImageDbName = process.env.RESTAURANTIMAGEDB_NAME;

const getPickup = async delivererId => {
  console.log('LAYER');

  const pickupParams = {
    TableName: pickupDbName,
    IndexName: 'byDelivererId',
    KeyConditionExpression: 'delivererId = :delivererId and closed = :closed',
    ExpressionAttributeValues: {
      ':delivererId': delivererId,
      ':closed': 'false',
    },
  };

  const pickupResp = await ddb.query(pickupParams).promise();
  const pickup = pickupResp.Items[0];
  console.log('GOT PICKUP');

  if (!pickup) {
    const resp = {
      statusCode: 200,
      body: 'NO ACTIVE PICKUPS',
    };
    console.log('NO ACTIVE PICKUPS');

    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  const delivererParams = {
    TableName: 'ToppingsDB',
    Key: {
      pk: 'USER#USER',
      sk: 'USER#' + delivererId,
    },
  };

  const delivererResp = await ddb.get(delivererParams).promise();
  const deliverer = delivererResp.Item;
  console.log('GOT DELIVERER');

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
  console.log('GOT RESTAURANT IMAGES');

  const ordersParams = {
    TableName: orderDbName,
    IndexName: 'byPickupId',
    KeyConditionExpression: 'pickupId = :pickupId',
    ExpressionAttributeValues: {
      ':pickupId': pickup.id,
    },
  };

  const ordersResp = await ddb.query(ordersParams).promise();
  const orders = ordersResp.Items;
  console.log('GOT ORDERS');

  const resp = {
    ...pickup,
    deliverer: {
      pk: deliverer.pk,
      sk: deliverer.sk,
      phoneNumber: deliverer.phoneNumber,
      name: deliverer.name,
    },
    restaurant: {
      ...restaurant,
      images: [
        {
          url: restaurantImage.url,
        },
      ],
    },
    orders: [],
  };

  for (var order of orders) {
    const orderItemsParams = {
      TableName: orderItemDbName,
      IndexName: 'byOrder',
      KeyConditionExpression: 'orderId = :orderId',
      ExpressionAttributeValues: {
        ':orderId': order.id,
      },
    };

    const orderItemsResp = await ddb.query(orderItemsParams).promise();
    const orderItems = orderItemsResp.Items;
    console.log('GOT ORDER ITEMS');

    const customerParams = {
      TableName: 'ToppingsDB',
      Key: {
        pk: 'USER#USER',
        sk: 'USER#' + order.customerId,
      },
    };

    const customerResp = await ddb.get(customerParams).promise();
    const customer = customerResp.Item;
    console.log('GOT CUSTOMER');

    const orderObj = {
      id: order.id,
      food_ready_time: order.food_ready_time,
      estimated_delivery_time: order.estimated_delivery_time,
      actual_delivery_time: order.actual_delivery_time,
      delivery_address: order.delivery_address,
      delivery_lat: order.delivery_lat,
      delivery_long: order.delivery_long,
      customerId: order.customerId,
      comment: order.comment,
      status: order.status,
      closed: order.closed,
      tax: order.tax,
      grandTotal: order.grandTotal,
      customer: {
        pk: customer.pk,
        sk: customer.sk,
        phoneNumber: customer.phoneNumber,
        name: customer.name,
        pfp: customer.pfp,
      },
      orderItems,
    };

    resp.orders.push(orderObj);
  }

  return resp;
};

module.exports = getPickup;
