var aws = require('aws-sdk');
var axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const prod = process.env.PROD === 'true';

var ddb = new aws.DynamoDB.DocumentClient();
var sns = new aws.SNS();

const orderDbName = process.env.ORDERDB_NAME;
const orderItemDbName = process.env.ORDERITEMDB_NAME;
const menuItemDbName = process.env.MENUITEMDB_NAME;
const rewardDbName = process.env.REWARDDB_NAME;
const vendorRewardDbName = process.env.VENDORREWARDDB_NAME;
const userDbName = process.env.USERDB_NAME;
const pickupDbName = process.env.PICKUPDB_NAME;
const STRIPE_API_URL = process.env.STRIPE_API_URL;
const restaurantDbName = process.env.RESTAURANTDB_NAME;

const region = process.env.REGION;

aws.config.update({ region: region });

const ActivePickupTopicArn = process.env.ACTIVEPICKUPUPDATE_TOPIC_ARN;
const ActiveOrdersByCustomerTopicArn = process.env.ACTIVEORDERSBYCUSTOMERUPDATE_TOPIC_ARN;
const OrderInfoTopicArn = process.env.ORDERINFOUPDATE_TOPIC_ARN;
const RewardInfoTopicArn = process.env.REWARDINFOUPDATE_TOPIC_ARN;
const PnsTopicArn = process.env.PNS_TOPIC_ARN;

exports.handler = async event => {
  const args = event.arguments;
  const identity = event.identity;

  if (!(await checkSecurity(identity, args))) {
    const resp = {
      status: 401,
      body: 'UNAUTHORIZED',
    };
    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  const rewardsCart = [];
  let totalPointsCost = 0;

  for (var rewardItem of args.rewardsCart) {
    if (rewardItem.id === 'd4211ec9-5975-4c61-aa6e-35f34e414ee7') {
      const resp = {
        status: 422,
        body: 'UNPROCESSABLE ENTITY',
      };
      return Promise.reject(new Error(JSON.stringify(resp)));
    }

    const vendorRewardParams = {
      TableName: vendorRewardDbName,
      Key: {
        id: rewardItem.id,
      },
    };

    const vendorRewardResp = await ddb.get(vendorRewardParams).promise();
    const vendorReward = vendorRewardResp.Item;
    console.log('GOT VENDOR REWARD');

    const rewardsCartItem = {
      itemName: vendorReward.itemName,
      menuId: vendorReward.menuId,
      quantity: rewardItem.quantity,
      price_per_item: 0,
      price_before_reward: 0,
      foodOptionsArray: [],
    };

    totalPointsCost += vendorReward.points;
    rewardsCart.push(rewardsCartItem);
  }

  const cart = [];
  let totalCost = 0;

  for (var cartItem of args.cart) {
    const menuItemParams = {
      TableName: menuItemDbName,
      Key: {
        id: cartItem.id,
      },
    };

    const menuItemResp = await ddb.get(menuItemParams).promise();
    const menuItem = menuItemResp.Item;
    console.log('GOT MENU ITEM');

    const cartOrderItem = {
      itemName: menuItem.name,
      menuId: menuItem.menuId,
      quantity: cartItem.quantity,
      price_per_item: menuItem.price,
      price_before_reward: menuItem.price,
      foodOptionsArray: cartItem.foodOptionsArray,
    };

    totalCost += menuItem.price * 100 * cartItem.quantity;
    cart.push(cartOrderItem);
  }

  if (!(await checkProcessable(args, totalPointsCost, totalCost))) {
    const resp = {
      status: 422,
      body: 'UNPROCESSABLE ENTITY',
    };
    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  const now = new Date().toISOString();

  const orderId = uuidv4();

  var allOrderItems = [];

  for (var rewardItem of rewardsCart) {
    const rewardOrderItemObj = await addOrderItems(rewardItem, orderId);
    allOrderItems.push(rewardOrderItemObj);
  }

  for (var cartItem of cart) {
    const cartItemObj = await addOrderItems(cartItem, orderId);
    allOrderItems.push(cartItemObj);
  }
  console.log('PUT ORDER ITEMS');

  const tax = (((6.25 / 100) * totalCost) / 100).toFixed(2);
  const grandTotal = (((6.25 / 100) * totalCost + totalCost) / 100).toFixed(2);
  const tip = 0;

  const orderObj = {
    id: orderId,
    isPaid: false,
    closed: 'true',
    pickupId: args.pickupId,
    orderRestaurantId: args.orderRestaurantId,
    delivery_address: args.delivery_address,
    delivery_lat: args.delivery_lat,
    delivery_long: args.delivery_long,
    customerId: args.customerId,
    status: 'PENDING',
    tax,
    tip,
    grandTotal,
    createdAt: now,
    updatedAt: now,
  };

  const orderParams = {
    TableName: orderDbName,
    Item: orderObj,
  };

  await ddb.put(orderParams).promise();
  console.log('PUT ORDER');

  if (prod && args.orderRestaurantId !== '0135975d-d0fd-4465-9410-10fac4e87a2e') {
    if (args.stripeToken !== 'NOCART') {
      var chargeId = await handlePayment(
        args.stripeToken,
        Math.floor(grandTotal * 100),
        args.currency,
        args.description
      );
      console.log('PAYMENT SUCCESSFUL');
    } else {
      var chargeId = 'NOCART';
    }
  } else {
    var chargeId = 'TESTING';
  }

  if (totalPointsCost > 0) {
    await handleRewardsPayment(totalPointsCost, args.orderRestaurantId, args.customerId);
    console.log('REWARD PAYMENT SUCCESSFUL');
  }

  const updateOrderParams = {
    TableName: orderDbName,
    Key: {
      id: orderObj.id,
    },
    UpdateExpression: 'set #paid = :paid, #chargeId = :chargeId, #closed = :closed, #updatedAt = :updatedAt',
    ExpressionAttributeNames: {
      '#paid': 'isPaid',
      '#chargeId': 'charge_id',
      '#closed': 'closed',
      '#updatedAt': 'updatedAt',
    },
    ExpressionAttributeValues: {
      ':paid': true,
      ':chargeId': chargeId,
      ':closed': 'false',
      ':updatedAt': new Date().toISOString(),
    },
  };

  await ddb.update(updateOrderParams).promise();
  console.log('UPDATED ORDER');

  const pickupParams = {
    TableName: pickupDbName,
    Key: {
      id: args.pickupId,
    },
  };

  const pickupResp = await ddb.get(pickupParams).promise();
  const pickup = pickupResp.Item;

  const activePickupSnsMessage = {
    delivererId: pickup.delivererId,
  };

  const activePickupSnsParams = {
    Message: JSON.stringify(activePickupSnsMessage),
    TopicArn: ActivePickupTopicArn,
  };

  await sns.publish(activePickupSnsParams).promise();

  const activeOrdersByCustomerSnsMessage = {
    customerId: args.customerId,
  };

  const activeOrdersByCustomerSnsParams = {
    Message: JSON.stringify(activeOrdersByCustomerSnsMessage),
    TopicArn: ActiveOrdersByCustomerTopicArn,
  };

  await sns.publish(activeOrdersByCustomerSnsParams).promise();

  const orderInfoSnsMessage = {
    id: orderId,
  };

  const orderInfoSnsParams = {
    Message: JSON.stringify(orderInfoSnsMessage),
    TopicArn: OrderInfoTopicArn,
  };

  await sns.publish(orderInfoSnsParams).promise();

  const rewardInfoSnsMessage = {
    userId: args.customerId,
    menuId: args.orderRestaurantId,
  };

  const rewardInfoSnsParams = {
    Message: JSON.stringify(rewardInfoSnsMessage),
    TopicArn: RewardInfoTopicArn,
  };

  await sns.publish(rewardInfoSnsParams).promise();

  const delivererParams = {
    TableName: 'ToppingsDB',
    Key: {
      pk: 'USER#USER',
      sk: 'USER#' + pickup.delivererId,
    },
  };

  const delivererResp = await ddb.get(delivererParams).promise();
  const deliverer = delivererResp.Item;

  const customerParams = {
    TableName: 'ToppingsDB',
    Key: {
      pk: 'USER#USER',
      sk: 'USER#' + args.customerId,
    },
  };

  const customerResp = await ddb.get(customerParams).promise();
  const customer = customerResp.Item;

  const restaurantParams = {
    TableName: restaurantDbName,
    Key: {
      id: args.orderRestaurantId,
    },
  };

  const restaurantResp = await ddb.get(restaurantParams).promise();
  const restaurant = restaurantResp.Item;

  const pnsSnsMessage = {
    users: [
      {
        title: 'A friend placed a request!',
        body: `${customer.name} requested food from ${restaurant.name}`,
        deviceToken: deliverer.deviceToken,
        platform: deliverer.platform,
      },
    ],
  };

  const pnsSnsParams = {
    Message: JSON.stringify(pnsSnsMessage),
    TopicArn: PnsTopicArn,
  };

  await sns.publish(pnsSnsParams).promise();

  const response = {
    ...orderObj,
    isPaid: true,
    charge_id: null,
    orderItems: allOrderItems,
    pickup: {
      ...pickup,
      deliverer: {
        pk: deliverer.pk,
        sk: deliverer.sk,
        name: deliverer.name,
        phoneNumber: deliverer.phoneNumber,
        pfp: deliverer.pfp,
      },
    },
    customer: {
      pk: customer.pk,
      sk: customer.sk,
      name: customer.name,
      phoneNumber: customer.phoneNumber,
      pfp: customer.pfp,
    },
  };

  return response;
};

const checkSecurity = async (identity, args) => {
  return args.customerId === identity.username;
};

const checkProcessable = async (args, totalPointsCost, totalCost) => {
  if (totalPointsCost === 0 && totalCost === 0) {
    return false;
  }

  const rewardParams = {
    TableName: rewardDbName,
    IndexName: 'byMenu',
    KeyConditionExpression: 'menuId = :menuId and userId = :userId',
    ExpressionAttributeValues: {
      ':menuId': args.orderRestaurantId,
      ':userId': args.customerId,
    },
  };

  const rewardResp = await ddb.query(rewardParams).promise();
  const reward = rewardResp.Items[0];
  console.log('GOT REWARD');

  if ((!reward && totalPointsCost > 0) || (reward && totalPointsCost > reward.points)) {
    return false;
  }

  for (var rewardItem of args.rewardsCart) {
    if (rewardItem.quantity <= 0) {
      return false;
    }
  }

  for (var orderItem of args.cart) {
    if (orderItem.quantity <= 0) {
      return false;
    }
  }

  const pickupParams = {
    TableName: pickupDbName,
    Key: {
      id: args.pickupId,
    },
  };

  const pickupResp = await ddb.get(pickupParams).promise();
  const pickup = pickupResp.Item;

  if (pickup.closed === 'true' || pickup.windowClosed === 'true' || pickup.isPickedUp) {
    return false;
  }

  if (new Date(pickup.windowEndTime * 1000) < new Date()) {
    return false;
  }

  if (totalCost === 0 && totalPointsCost === 0 && args.stripeToken !== 'YEET') {
    return false;
  }

  return true;
};

const addOrderItems = async (item, orderId) => {
  const now = new Date().toISOString();

  const itemObj = {
    id: uuidv4(),
    itemName: item.itemName,
    menuId: item.menuId,
    orderId,
    quantity: item.quantity,
    price_per_item: item.price_per_item,
    price_before_reward: item.price_before_reward,
    foodOptionsArray: item.foodOptionsArray,
    createdAt: now,
    updatedAt: now,
  };

  const orderItemParams = {
    TableName: orderItemDbName,
    Item: itemObj,
  };

  await ddb.put(orderItemParams).promise();

  return itemObj;
};

const handlePayment = async (stripeToken, amount, currency, description) => {
  try {
    var resp = await postData(STRIPE_API_URL, {
      stripeToken,
      amount,
      currency,
      description,
    });
  } catch (err) {
    console.log('[ERROR] HANDLE PAYMENT:', err);
    return Promise.reject(new Error(err));
  }

  const chargeId = resp.createdCharge.id;

  return chargeId;
};

const postData = async (url = ``, data = {}) => {
  const resp = await axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (resp.status === 200) {
    return resp.data;
  } else {
    console.log('[ERROR]: STRIPE API POST FAILED\n', resp.data);
    return Promise.reject(new Error(resp.data));
  }
};

const handleRewardsPayment = async (totalPointsCost, orderRestaurantId, customerId) => {
  const rewardParams = {
    TableName: rewardDbName,
    IndexName: 'byMenu',
    KeyConditionExpression: 'menuId = :menuId and userId = :userId',
    ExpressionAttributeValues: {
      ':menuId': orderRestaurantId,
      ':userId': customerId,
    },
  };

  const rewardResp = await ddb.query(rewardParams).promise();
  const reward = rewardResp.Items[0];
  console.log('GOT REWARD');

  const rewardUpdateParams = {
    TableName: rewardDbName,
    Key: {
      id: reward.id,
    },
    UpdateExpression: 'set points = :points, #updatedAt = :updatedAt',
    ExpressionAttributeNames: {
      '#updatedAt': 'updatedAt',
    },
    ExpressionAttributeValues: {
      ':points': reward.points - totalPointsCost,
      ':updatedAt': new Date().toISOString(),
    },
  };

  await ddb.update(rewardUpdateParams).promise();
};
