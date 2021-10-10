var aws = require('aws-sdk');

var ddb = new aws.DynamoDB.DocumentClient();
var sns = new aws.SNS();

const pickupDbName = process.env.PICKUPDB_NAME;
const orderDbName = process.env.ORDERDB_NAME;
const userDbName = process.env.USERDB_NAME;
const region = process.env.REGION;

const ActivePickupTopicArn = process.env.ACTIVEPICKUPUPDATE_TOPIC_ARN;
const OrderInfoTopicArn = process.env.ORDERINFOUPDATE_TOPIC_ARN;

aws.config.update({ region: region });

exports.handler = async event => {
  const args = event.arguments;
  const identity = event.identity;

  if (!checkSecurity(args.id, identity)) {
    const resp = {
      statusCode: 401,
      body: 'UNAUTHORIZED',
    };
    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  const updateParams = {
    TableName: orderDbName,
    Key: {
      id: args.id,
    },
    UpdateExpression: 'set estimated_delivery_time = :eta, #updatedAt = :updatedAt',
    ExpressionAttributeNames: {
      '#updatedAt': 'updatedAt',
    },
    ExpressionAttributeValues: {
      ':eta': args.estimated_delivery_time,
      ':updatedAt': new Date().toISOString(),
    },
    ReturnValues: 'UPDATED_NEW',
  };

  await ddb.update(updateParams).promise();

  const orderParams = {
    TableName: orderDbName,
    Key: {
      id: args.id,
    },
  };

  const orderResp = await ddb.get(orderParams).promise();
  const order = orderResp.Item;

  const pickupParams = {
    TableName: pickupDbName,
    Key: {
      id: order.pickupId,
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

  const orderInfoSnsMessage = {
    id: args.id,
  };

  const orderInfoSnsParams = {
    Message: JSON.stringify(orderInfoSnsMessage),
    TopicArn: OrderInfoTopicArn,
  };

  await sns.publish(orderInfoSnsParams).promise();

  const response = {
    id: args.id,
    estimated_delivery_time: args.estimated_delivery_time,
  };

  console.log('RESP', response);
  return response;
};

const checkSecurity = async (orderId, identity) => {
  const ordersParams = {
    TableName: orderDbName,
    KeyConditionExpression: '#i = :ii',
    ExpressionAttributeNames: {
      '#i': 'id',
    },
    ExpressionAttributeValues: {
      ':ii': orderId,
    },
  };
  console.log('ORDERS PARAMS', ordersParams);

  const ordersResp = await ddb.query(ordersParams).promise();
  const order = ordersResp.Items[0];

  return order.customerId === identity.username;
};
