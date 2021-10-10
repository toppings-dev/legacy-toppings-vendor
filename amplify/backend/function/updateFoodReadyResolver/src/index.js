var aws = require('aws-sdk');

const prod = process.env.PROD === 'true';

var ddb = new aws.DynamoDB.DocumentClient();
var sns = new aws.SNS();

const restaurantDbName = process.env.RESTAURANTDB_NAME;
const userDbName = process.env.USERDB_NAME;
const orderDbName = process.env.ORDERDB_NAME;
const pickupDbName = process.env.PICKUPDB_NAME;

const PnsTopicArn = process.env.PNS_TOPIC_ARN;

exports.handler = async event => {
  const args = event.arguments;
  const identity = event.identity;

  const orderParams = {
    TableName: orderDbName,
    Key: {
      id: args.id,
    },
  };

  const orderResp = await ddb.get(orderParams).promise();
  const order = orderResp.Item;

  const restaurantParams = {
    TableName: restaurantDbName,
    Key: {
      id: order.orderRestaurantId,
    },
  };

  const restaurantResp = await ddb.get(restaurantParams).promise();
  const restaurant = restaurantResp.Item;

  if (!(await checkSecurity(restaurant.userId, identity))) {
    const resp = {
      statusCode: 401,
      body: 'UNAUTHORIZED',
    };

    return Promise.reject(JSON.stringify(resp));
  }

  const now = new Date().toISOString();

  const updateParams = {
    TableName: orderDbName,
    Key: {
      id: args.id,
    },
    UpdateExpression: 'set food_ready_time = :food_ready_time, #updateAt = :updateAt',
    ExpressionAttributeNames: {
      '#updatedAt': 'updatedAt',
    },
    ExpressionAttributeValues: {
      ':food_ready_time': args.food_ready_time,
      ':updatedAt': now,
    },
  };

  if (args.status) {
    updateParams.UpdateExpression += ', #status = :status';
    updateParams.ExpressionAttributeValues[':status'] = args.status;
    updateParams.ExpressionAttributeNames['#status'] = 'status';
  }

  await ddb.update(updateParams).promise();

  const resp = {
    id: args.id,
    food_ready_time: args.food_ready_time,
  };

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

  if (args.status === 'PREPARING') {
    if (restaurant.id === '0a1e6d19-5c8f-4884-899c-4bb6f0d58d85' && checkPlayaTime()) {
      var body = `Pick up your ${restaurant.name} in 45 minutes!`;
    } else {
      var body = `Pick up your ${restaurant.name} in 20 minutes!`;
    }

    var PnsSnsMessage = {
      users: [
        {
          title: `Your ${restaurant.name} order is being prepared!`,
          body,
          deviceToken: deliverer.deviceToken,
          platform: deliverer.platform,
        },
      ],
    };
  }

  if (args.status === 'READY') {
    var PnsSnsMessage = {
      users: [
        {
          title: `Your ${restaurant.name} order is ready!`,
          body: 'Come to the restaurant to pick it up!',
          deviceToken: deliverer.deviceToken,
          platform: deliverer.platform,
        },
      ],
    };
  }

  if (PnsSnsMessage) {
    const pnsSnsParams = {
      Message: JSON.stringify(PnsSnsMessage),
      TopicArn: PnsTopicArn,
    };

    await sns.publish(pnsSnsParams).promise();
  }

  return resp;
};

const checkSecurity = async (ownerId, identity) => {
  return ownerId === identity.username;
};

const checkPlayaTime = () => {
  const startTime = '11:00:00';
  const endTime = '14:00:00';

  const currentDate = new Date();

  var startDate = new Date(currentDate.getTime());
  startDate.setHours(startTime.split(':')[0]);
  startDate.setMinutes(startTime.split(':')[1]);
  startDate.setSeconds(startTime.split(':')[2]);

  var endDate = new Date(currentDate.getTime());
  endDate.setHours(endTime.split(':')[0]);
  endDate.setMinutes(endTime.split(':')[1]);
  endDate.setSeconds(endTime.split(':')[2]);

  const timeValid = startDate <= currentDate && endDate >= currentDate;

  const dayValid = currentDate.getDay() === 0 || currentDate.getDay() === 1;

  return timeValid && dayValid;
};
