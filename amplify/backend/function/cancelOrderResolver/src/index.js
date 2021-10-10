var aws = require('aws-sdk');
var redis = require('redis');
var { promisify } = require('util');
var axios = require('axios');

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

var ddb = new aws.DynamoDB.DocumentClient();
var sns = new aws.SNS();

const userDbName = process.env.USERDB_NAME;
const orderDbName = process.env.ORDERDB_NAME;
const pickupDbName = process.env.PICKUPDB_NAME;

const STRIPE_API_URL = process.env.STRIPE_API_REFUND_URL;

const ActivePickupTopicArn = process.env.ACTIVEPICKUPUPDATE_TOPIC_ARN;
const ActiveOrdersByCustomerTopicArn = process.env.ACTIVEORDERSBYCUSTOMERUPDATE_TOPIC_ARN;
const OrderInfoTopicArn = process.env.ORDERINFOUPDATE_TOPIC_ARN;

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

  if (!(await checkSecurity(order, identity))) {
    const resp = {
      status: 401,
      body: 'UNAUTHORIZED',
    };

    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  if (!checkProcessable(order)) {
    const resp = {
      status: 422,
      body: 'UNPROCESSABLE ENTITY',
    };

    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  if (prod) {
    try {
      await handleRefund(order.charge_id);
    } catch (err) {
      return;
    }
  }

  const updateOrderParams = {
    TableName: orderDbName,
    Key: {
      id: args.id,
    },
    UpdateExpression: 'set #status = :status, #closed = :closed',
    ExpressionAttributeNames: {
      '#status': 'status',
      '#closed': 'closed',
    },
    ExpressionAttributeValues: {
      ':status': 'CANCELED',
      ':closed': 'true',
    },
    ReturnValues: 'UPDATED_NEW',
  };

  await ddb.update(updateOrderParams).promise();

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

  const activeOrdersByCustomerSnsMessage = {
    customerId: order.customerId,
  };

  const activeOrdersByCustomerSnsParams = {
    Message: JSON.stringify(activeOrdersByCustomerSnsMessage),
    TopicArn: ActiveOrdersByCustomerTopicArn,
  };

  await sns.publish(activeOrdersByCustomerSnsParams).promise();

  const orderInfoSnsMessage = {
    id: args.id,
  };

  const orderInfoSnsParams = {
    Message: JSON.stringify(orderInfoSnsMessage),
    TopicArn: OrderInfoTopicArn,
  };

  await sns.publish(orderInfoSnsParams).promise();

  const resp = {
    ...order,
    charge_id: null,
    status: 'ACCEPTED',
  };

  return resp;
};

const checkSecurity = async (order, identity) => {
  return order.customerId === identity.username;
};

const checkProcessable = order => {
  return order.status === 'PENDING';
};

const handleRefund = async chargeId => {
  try {
    await postData(STRIPE_API_URL, {
      chargeId,
    });
  } catch (err) {
    console.log('[ERROR] HANDLE REFUND:', err);
    return Promise.reject(new Error(err));
  }
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
