var aws = require('aws-sdk');
var redis = require('redis');
var axios = require('axios');
var { promisify } = require('util');
const { v4: uuidv4 } = require('uuid');

aws.config.apiVersion = {
  stepfunctions: '2016-11-23',
};

const prod = process.env.PROD === 'true';
const redisEndpoint = prod
  ? 'redis.gfmuwq.0001.use1.cache.amazonaws.com'
  : 'redis-dev.gfmuwq.0001.use1.cache.amazonaws.com';

const redisOptions = {
  host: redisEndpoint,
  port: 6379,
};

redis.debug_mode = false;

// const redisClient = redis.createClient(redisOptions);

// const redisGet = promisify(redisClient.get).bind(redisClient);
// const redisSet = promisify(redisClient.set).bind(redisClient);
// const redisDel = promisify(redisClient.del).bind(redisClient);

var ddb = new aws.DynamoDB.DocumentClient();
var sf = new aws.StepFunctions();
var sns = new aws.SNS();

const userDbName = process.env.USERDB_NAME;
const orderDbName = process.env.ORDERDB_NAME;
const orderItemDbName = process.env.ORDERITEMDB_NAME;
const pickupDbName = process.env.PICKUPDB_NAME;
const rewardDbName = process.env.REWARDDB_NAME;
const vendorRewardDbName = process.env.VENDORREWARDDB_NAME;
const menuItemDbName = process.env.MENUITEMDB_NAME;
const restaurantDbName = process.env.RESTAURANTDB_NAME;
const restaurantImageDbName = process.env.RESTAURANTIMAGEDB_NAME;

const STRIPE_API_URL = process.env.STRIPE_API_URL;

const stepFunctionARN = process.env.STEPFUNCTIONARN;

const ActivePickupTopicArn = process.env.ACTIVEPICKUPUPDATE_TOPIC_ARN;
const OpenPickupsTopicArn = process.env.OPENPICKUPS_TOPIC_ARN;
const RewardInfoTopicArn = process.env.REWARDINFOUPDATE_TOPIC_ARN;
const PnsTopicArn = process.env.PNS_TOPIC_ARN;

exports.handler = async event => {
  const args = event.arguments;
  const identity = event.identity;

  if (!(await checkSecurity(identity, args))) {
    const resp = {
      statusCode: 401,
      body: 'Unauthorized',
    };
    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  const rewardsCart = [];
  let totalPointsCost = 0;

  for (var rewardItem of args.rewardsCart) {
    if (rewardItem.id === 'd4211ec9-5975-4c61-aa6e-35f34e414ee7') {
      continue;
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
  console.log(rewardsCart);
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
    console.log('UNPROCESSABLE ENTITY');
    const resp = {
      status: 422,
      body: 'UNPROCESSABLE ENTITY',
    };
    return Promise.reject(new Error(JSON.stringify(resp)));
  }
  console.log('IS PROCESSABLE');

  const now = new Date().toISOString();
  const windowEndTime = Math.floor(Date.now() / 1000) + args.windowOpenTime;

  const pickupObj = {
    id: uuidv4(),
    delivererId: args.delivererId,
    transportation_type: 'DRIVING',
    menuId: args.menuId,
    closed: 'true',
    windowEndTime: windowEndTime,
    windowClosed: 'false',
    isPickedUp: false,
    status: 'WINDOW',
    createdAt: now,
    updatedAt: now,
  };

  const orderId = uuidv4();

  const pickupParams = {
    TableName: pickupDbName,
    Item: pickupObj,
  };

  await ddb.put(pickupParams).promise();
  console.log('PUT PICKUP');

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

  const customerParams = {
    TableName: 'ToppingsDB',
    Key: {
      pk: 'USER#USER',
      sk: 'USER#' + args.delivererId,
    },
  };

  const customerResp = await ddb.get(customerParams).promise();
  const customer = customerResp.Item;
  console.log('GOT CUSTOMER');

  const orderObj = {
    id: orderId,
    isPaid: false,
    closed: 'true',
    pickupId: pickupObj.id,
    orderRestaurantId: args.menuId,
    delivery_address: '',
    customerId: args.delivererId,
    customer: {
      pk: customer.pk,
      sk: customer.sk,
      name: customer.name,
      phoneNumber: customer.phoneNumber,
      pfp: customer.pfp,
    },
    status: 'ACCEPTED',
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

  if (allOrderItems.length > 0 || args.menuId === 'fc572141-a825-4e14-8913-4122f2037895') {
    await ddb.put(orderParams).promise();
    console.log('PUT ORDER');
  }

  if (prod && args.menuId !== '0135975d-d0fd-4465-9410-10fac4e87a2e') {
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
    await handleRewardsPayment(totalPointsCost, args.menuId, args.delivererId);
    console.log('REWARDS PAYMENT SUCCESSFUL');
  }

  if (allOrderItems.length > 0) {
    const updateOrderParams = {
      TableName: orderDbName,
      Key: {
        id: orderObj.id,
      },
      UpdateExpression: 'set #paid = :paid, #chargeId = :chargeId, #updatedAt = :updatedAt',
      ExpressionAttributeNames: {
        '#paid': 'isPaid',
        '#chargeId': 'charge_id',
        '#updatedAt': 'updatedAt',
      },
      ExpressionAttributeValues: {
        ':paid': true,
        ':chargeId': chargeId,
        ':updatedAt': new Date().toISOString(),
      },
    };

    await ddb.update(updateOrderParams).promise();
    console.log('UPDATED ORDER');
  }

  const updatePickupParams = {
    TableName: pickupDbName,
    Key: {
      id: pickupObj.id,
    },
    UpdateExpression: 'set #closed = :closed',
    ExpressionAttributeNames: {
      '#closed': 'closed',
    },
    ExpressionAttributeValues: {
      ':closed': 'false',
    },
  };

  await ddb.update(updatePickupParams).promise();
  console.log('UPDATED PICKUP');

  const stepFunctionInput = {
    pickupid: pickupObj.id,
    waittimestamp: new Date(windowEndTime * 1000).toISOString(),
  };

  const startStepFunctionParams = {
    stateMachineArn: stepFunctionARN,
    input: JSON.stringify(stepFunctionInput),
  };

  await sf.startExecution(startStepFunctionParams).promise();
  console.log('STARTED STATE MACHINE');

  const delivererParams = {
    TableName: 'ToppingsDB',
    Key: {
      pk: 'USER#USER',
      sk: 'USER#' + args.delivererId,
    },
  };

  const delivererResp = await ddb.get(delivererParams).promise();
  const deliverer = delivererResp.Item;
  console.log('GOT DELIVERER');

  const restaurantParams = {
    TableName: restaurantDbName,
    Key: {
      id: args.menuId,
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
      ':menuId': args.menuId,
    },
  };

  const restaurantImageResp = await ddb.query(restaurantImageParams).promise();
  const restaurantImage = restaurantImageResp.Items[0];
  console.log('GOT RESTAURANT IMAGES');

  if (allOrderItems.length > 0) {
    var resp = {
      ...pickupObj,
      deliverer: {
        pk: deliverer.pk,
        sk: deliverer.sk,
        name: deliverer.name,
        phoneNumber: deliverer.phoneNumber,
        pfp: deliverer.pfp,
      },
      orders: [
        {
          ...orderObj,
          isPaid: true,
          charge_id: null,
          orderItems: allOrderItems,
        },
      ],
      restaurant: {
        ...restaurant,
        images: {
          items: [
            {
              url: restaurantImage.url,
            },
          ],
        },
      },
    };
  } else {
    var resp = {
      ...pickupObj,
      deliverer: {
        pk: deliverer.pk,
        sk: deliverer.sk,
        name: deliverer.name,
        phoneNumber: deliverer.phoneNumber,
        pfp: deliverer.pfp,
      },
      orders: [],
      restaurant: {
        ...restaurant,
        images: {
          items: [
            {
              url: restaurantImage.url,
            },
          ],
        },
      },
    };
  }

  const activePickupSnsMessage = {
    delivererId: args.delivererId,
  };

  const activePickupSnsParams = {
    Message: JSON.stringify(activePickupSnsMessage),
    TopicArn: ActivePickupTopicArn,
  };

  await sns.publish(activePickupSnsParams).promise();

  const usersParams = {
    TableName: 'ToppingsDB',
    KeyConditionExpression: 'pk = :pk and begins_with(sk, :sk)',
    ExpressionAttributeValues: {
      ':pk': 'USER#USER',
      ':sk': 'USER',
    },
  };

  const usersResp = await ddb.query(usersParams).promise();
  const users = usersResp.Items;

  const pnsSnsMessage = {
    users: [],
  };

  for (var user of users) {
    if (user.sk === deliverer.sk) {
      continue;
    }
    const openPickupsSnsMessage = {
      id: user.sk.substring(5),
    };

    const openPickupsSnsParams = {
      Message: JSON.stringify(openPickupsSnsMessage),
      TopicArn: OpenPickupsTopicArn,
    };

    await sns.publish(openPickupsSnsParams).promise();

    const pnsUser = {
      title: 'Free delivery chance!!',
      body: `${deliverer.name} is at ${restaurant.name}, place a request before it's too late!`,
      deviceToken: user.deviceToken,
      platform: user.platform,
    };

    pnsSnsMessage.users.push(pnsUser);
  }

  const pnsSnsParams = {
    Message: JSON.stringify(pnsSnsMessage),
    TopicArn: PnsTopicArn,
  };

  if (!deliverer.dev) {
    await sns.publish(pnsSnsParams).promise();
  }

  const rewardInfoSnsMessage = {
    userId: args.delivererId,
    menuId: args.menuId,
  };

  const rewardInfoSnsParams = {
    Message: JSON.stringify(rewardInfoSnsMessage),
    TopicArn: RewardInfoTopicArn,
  };

  await sns.publish(rewardInfoSnsParams).promise();

  console.log(resp);
  return resp;
};

const checkSecurity = async (identity, args) => {
  return args.delivererId === identity.username;
};

const checkProcessable = async (args, totalPointsCost, totalCost) => {
  const rewardParams = {
    TableName: rewardDbName,
    IndexName: 'byMenu',
    KeyConditionExpression: 'menuId = :menuId and userId = :userId',
    ExpressionAttributeValues: {
      ':menuId': args.menuId,
      ':userId': args.delivererId,
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

  if (args.windowOpenTime < 0) {
    return false;
  }

  if (
    (totalCost === 0 && args.stripeToken !== 'NOCART' && args.stripeToken !== 'YEET') ||
    (totalCost !== 0 && args.stripeToken === 'NOCART')
  ) {
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

const handleRewardsPayment = async (totalPointsCost, menuId, userId) => {
  const rewardParams = {
    TableName: rewardDbName,
    IndexName: 'byMenu',
    KeyConditionExpression: 'menuId = :menuId and userId = :userId',
    ExpressionAttributeValues: {
      ':menuId': menuId,
      ':userId': userId,
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
