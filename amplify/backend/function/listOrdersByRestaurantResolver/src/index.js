var aws = require('aws-sdk');

const prod = process.env.PROD === 'true';

var ddb = new aws.DynamoDB.DocumentClient();

const restaurantDbName = process.env.RESTAURANTDB_NAME;
const userDbName = process.env.USERDB_NAME;
const orderDbName = process.env.ORDERDB_NAME;
const orderItemDbName = process.env.ORDERITEMDB_NAME;
const pickupDbName = process.env.PICKUPDB_NAME;

exports.handler = async event => {
  const args = event.arguments;
  const identity = event.identity;

  const restaurantParams = {
    TableName: restaurantDbName,
    Key: {
      id: args.restaurantId,
    },
  };

  const restaurantResp = await ddb.get(restaurantParams).promise();
  const restaurant = restaurantResp.Item;

  if (!(await checkSecurity(restaurant, identity))) {
    const resp = {
      statusCode: 401,
      body: 'UNAUTHORIZED',
    };

    return Promise.reject(JSON.stringify(resp));
  }

  const ordersParams = {
    TableName: orderDbName,
    IndexName: 'byRestaurantId',
    KeyConditionExpression: 'orderRestaurantId = :id',
    ExpressionAttributeValues: {
      ':id': args.restaurantId,
    },
  };

  const ordersResp = await ddb.query(ordersParams).promise();
  const orders = ordersResp.Items;

  const resp = [];

  var allPickups = {};
  var allCustomers = {};

  for (var order of orders) {
    if (!allPickups[order.pickupId]) {
      const pickupParams = {
        TableName: pickupDbName,
        Key: {
          id: order.pickupId,
        },
      };

      const pickupResp = await ddb.get(pickupParams).promise();
      const pickup = pickupResp.Item;

      const delivererParams = {
        TableName: 'ToppingsDB',
        Key: {
          pk: 'USER#USER',
          sk: 'USER#' + pickup.delivererId,
        },
      };

      const delivererResp = await ddb.get(delivererParams).promise();
      const deliverer = delivererResp.Item;

      const pickupObj = {
        ...pickup,
        deliverer: {
          pk: deliverer.pk,
          sk: deliverer.sk,
          name: deliverer.name,
          phoneNumber: deliverer.phoneNumber,
          pfp: deliverer.pfp,
        },
      };

      allPickups[order.pickupId] = pickupObj;
    }

    if (!allCustomers[order.customerId]) {
      const customerParams = {
        TableName: 'ToppingsDB',
        Key: {
          pk: 'USER#USER',
          sk: 'USER#' + order.customerId,
        },
      };

      const customerResp = await ddb.get(customerParams).promise();
      const customer = customerResp.Item;

      allCustomers[order.customerId] = customer;
    }

    const orderItemsParams = {
      TableName: orderItemDbName,
      IndexName: 'byOrder',
      KeyConditionExpression: 'orderId = :id',
      ExpressionAttributeValues: {
        ':id': order.id,
      },
    };

    const orderItemsResp = await ddb.query(orderItemsParams).promise();
    const orderItems = orderItemsResp.Items;

    if (orderItems.length === 0) {
      continue;
    }

    const orderObj = {
      ...order,
      charge_id: null,
      pickup: allPickups[order.pickupId],
      customer: allCustomers[order.customerId],
      orderItems,
      restaurant,
    };

    if (
      (order.closed === 'true' &&
        allPickups[order.pickupId].deliverer.email !== order.customerId &&
        allPickups[order.pickupId].status === 'CLOSED') ||
      !order.isPaid
    ) {
      continue;
    }

    resp.push(orderObj);
  }

  return resp;
};

const checkSecurity = async (restaurant, identity) => {
  return restaurant.userId === identity.username;
};
