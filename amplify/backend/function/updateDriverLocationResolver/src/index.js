var aws = require('aws-sdk');
var redis = require('redis');
var axios = require('axios');
var { promisify } = require('util');

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
var sns = new aws.SNS();

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const pickupDbName = process.env.PICKUPDB_NAME;
const orderDbName = process.env.ORDERDB_NAME;
const userDbName = process.env.USERDB_NAME;
const restaurantdbName = process.env.RESTAURANTDB_NAME;
const region = process.env.REGION;

const ActivePickupTopicArn = process.env.ACTIVEPICKUPUPDATE_TOPIC_ARN;
const OrderInfoTopicArn = process.env.ORDERINFOUPDATE_TOPIC_ARN;

aws.config.update({ region: region });

exports.handler = async event => {
  const args = event.arguments;
  const identity = event.identity;

  const pickup = await queryPickupDb(args.id);

  if (!(await checkSecurity(pickup, identity))) {
    const resp = {
      statusCode: 401,
      body: 'UNAUTHORIZED',
    };
    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  const ordersParams = {
    TableName: orderDbName,
    IndexName: 'byPickupId',
    KeyConditionExpression: '#i = :ii and #closed = :closed',
    ExpressionAttributeNames: {
      '#i': 'pickupId',
      '#closed': 'closed',
    },
    ExpressionAttributeValues: {
      ':ii': args.id,
      ':closed': 'false',
    },
  };

  const ordersResp = await ddb.query(ordersParams).promise();

  if (ordersResp.Items.length <= 1) {
    var query = {};
  } else {
    try {
      var query = await getDirectionsToAllDropoffLocations({
        pickupID: args.id,
        newDriverLocation: { lat: args.lat, lng: args.long },
      });
    } catch (err) {
      console.log('[ERROR]: ', err);
      const resp = {
        statusCode: 400,
        body: {
          error: err,
        },
      };
      return resp;
    }
  }

  const updateParams = {
    TableName: pickupDbName,
    Key: {
      id: args.id,
    },
    UpdateExpression: 'set #lat = :lat, #lng = :lng, #rsp = :rsp, #updatedAt = :updatedAt',
    ExpressionAttributeNames: {
      '#lat': 'lat',
      '#lng': 'long',
      '#rsp': 'apiResponse',
      '#updatedAt': 'updatedAt',
    },
    ExpressionAttributeValues: {
      ':lat': args.lat,
      ':lng': args.long,
      ':rsp': query,
      ':updatedAt': new Date().toISOString(),
    },
    ReturnValues: 'UPDATED_NEW',
  };

  try {
    await ddb.update(updateParams).promise();
  } catch (err) {
    console.log('[ERROR]: ', err);
    const resp = {
      statusCode: 400,
      body: {
        error: err,
      },
    };
    return resp;
  }

  const allOrders = await getPickupOrders(args.id);

  console.log('ALL ORDERS', allOrders);

  const response = {
    id: args.id,
    lat: args.lat,
    long: args.long,
    apiResponse: query,
    orders: allOrders,
  };

  const activePickupSnsMessage = {
    delivererId: pickup.delivererId,
  };

  const activePickupSnsParams = {
    Message: JSON.stringify(activePickupSnsMessage),
    TopicArn: ActivePickupTopicArn,
  };

  await sns.publish(activePickupSnsParams).promise();

  for (var order of allOrders) {
    const orderInfoSnsMessage = {
      id: order.id,
    };

    const orderInfoSnsParams = {
      Message: JSON.stringify(orderInfoSnsMessage),
      TopicArn: OrderInfoTopicArn,
    };

    await sns.publish(orderInfoSnsParams).promise();
  }

  console.log('RESP', response);
  return response;
};

const queryPickupDb = async pickupId => {
  const pickupParams = {
    TableName: pickupDbName,
    KeyConditionExpression: '#i = :ii',
    ExpressionAttributeNames: {
      '#i': 'id',
    },
    ExpressionAttributeValues: {
      ':ii': pickupId,
    },
  };

  console.log('PICKUP PARAMS', pickupParams);
  const pickupResp = await ddb.query(pickupParams).promise();
  const pickup = pickupResp.Items[0];
  return pickup;
};

const queryUserDb = async userId => {
  const userParams = {
    TableName: 'ToppingsDB',
    Key: {
      pk: 'USER#USER',
      sk: 'USER#' + userId,
    },
  };

  const userResp = await ddb.get(userParams).promise();
  const user = userResp.Item;

  return user;
};

const checkSecurity = async (pickup, identity) => {
  const pickupDeliverer = await queryUserDb(pickup.delivererId);

  return pickupDeliverer.cognitoId === identity.username;
};

const getPickupInfo = async pickupId => {
  const pickup = await queryPickupDb(pickupId);
  console.log('PICKUP', pickup);

  const allOrders = await getPickupOrders(pickupId);

  const pickupObj = {
    id: pickupId,
    lat: pickup.lat,
    long: pickup.long,
    orders: allOrders,
    transportation_type: pickup.transportation_type,
  };

  console.log('PICKUP OBJ', pickupObj);
  return pickupObj;
};

const getPickupOrders = async pickupId => {
  const ordersParams = {
    TableName: orderDbName,
    IndexName: 'byPickupId',
    KeyConditionExpression: '#i = :ii',
    ExpressionAttributeNames: {
      '#i': 'pickupId',
    },
    ExpressionAttributeValues: {
      ':ii': pickupId,
    },
  };
  console.log('ORDERS PARAMS', ordersParams);

  const ordersResp = await ddb.query(ordersParams).promise();

  console.log('ORDERS', ordersResp);
  var allOrders = [];
  for (var order of ordersResp.Items) {
    if (!order.delivery_lat || !order.delivery_long || !order.delivery_address || order.closed === 'true') {
      continue;
    }

    const user = await queryUserDb(order.customerId);
    console.log('USER', user);

    const userObj = {
      pk: user.pk,
      sk: user.sk,
      name: user.name,
      phoneNumber: user.phoneNumber,
      pfp: user.pfp,
    };

    console.log('USER OBJ', userObj);
    const restaurantParams = {
      TableName: restaurantdbName,
      KeyConditionExpression: '#i = :ii',
      ExpressionAttributeNames: {
        '#i': 'id',
      },
      ExpressionAttributeValues: {
        ':ii': order.orderRestaurantId,
      },
    };
    console.log('REST PARAMS', restaurantParams);

    const restaurantResp = await ddb.query(restaurantParams).promise();
    const restaurant = restaurantResp.Items[0];

    console.log('REST', restaurant);
    const restaurantObj = {
      id: restaurant.id,
      name: restaurant.name,
    };

    const orderObj = {
      id: order.id,
      closed: order.closed,
      customerId: order.customerId,
      customer: userObj,
      delivery_address: order.delivery_address,
      delivery_lat: order.delivery_lat,
      delivery_long: order.delivery_long,
      menuId: order.orderRestaurantId,
      restaurant: restaurantObj,
      pickupId: order.pickupId,
      status: order.status,
    };

    allOrders.push(orderObj);
  }
  return allOrders;
};

//my own thing dont worry about it
const appendToApiURL = (apiURL, toAppend, delim) => {
  for (var part in toAppend) {
    apiURL = apiURL.concat(`${toAppend[part]}${delim}`);
  }
  apiURL = apiURL.slice(0, -1);
  return apiURL;
};

// Params: origins: array of address/latlng/whatever
//         destinations: array of address/latlng/whatever
//         optionals: array of whatever optional stuff you want
//                    https://developers.google.com/maps/documentation/distance-matrix/overview
//                    read it urself
// Return: whatever the distance matrix api gives you
const queryDistanceMatrixAPI = async (origins, destinations, optionals) => {
  //https://maps.googleapis.com/maps/api/distancematrix/json?origins=37.565426,-122.060746&destinations=37.4754263,-121.9135095&key=AIzaSyC2sSuwx7svXqP3iD2DNJAl6VFIdikulR4&mode=driving&units=imperial
  var apiURL = `https://maps.googleapis.com/maps/api/distancematrix/json?&origins=`;
  apiURL = appendToApiURL(apiURL, origins, '|');
  apiURL = apiURL.concat('&destinations=');
  apiURL = appendToApiURL(apiURL, destinations, '|');
  apiURL = apiURL.concat(`&key=${GOOGLE_API_KEY}&`);
  apiURL = appendToApiURL(apiURL, optionals, '&');
  console.log(apiURL);
  try {
    let resp = await axios.get(apiURL);
    if (resp.status === 200 && resp.data.status === 'OK') {
      return resp.data;
    } else {
      console.log('[ERROR]: ', resp);
      return Promise.reject(new Error(resp));
    }
  } catch (err) {
    console.log('[ERROR]: ', err);
    return Promise.reject(new Error(err));
  }
};

// Params: origin: address/latlng/whatever
//         destination: address/latlng/whatever
//         optionals: array of whatever optional stuff you want
//                    https://developers.google.com/maps/documentation/directions/overview
//                    read it urself
// Return: whatever the directions api gives you
const queryDirectionsAPI = async (origin, destination, optionals) => {
  //https://maps.googleapis.com/maps/api/directions/json?origin=37.565426,-122.060746&destination=37.4754263,-121.9135095&key=AIzaSyC2sSuwx7svXqP3iD2DNJAl6VFIdikulR4&mode=driving&waypoints=optimize:true|33.0925511,-96.8135002|37.0331375,-95.62561199999999
  let apiURL = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${GOOGLE_API_KEY}&`;
  apiURL = appendToApiURL(apiURL, optionals, '&');
  console.log(apiURL);
  try {
    let resp = await axios.get(apiURL);
    if (resp.status === 200 && resp.data.status === 'OK') {
      return resp.data;
    } else {
      console.log('[ERROR]: ', resp);
      return Promise.reject(new Error(resp));
    }
  } catch (err) {
    console.log('[ERROR]: ', err);
    return Promise.reject(new Error(err));
  }
};

// Params: orderId: order id or whatever to know which order to query in
// Return: Distance from the driver to the furthest dropoff location in the order
//         Dict with distance in text, raw in meters, which dropoff location it is and its latlng
//         e.g
//         {
//           "text": "12.5 mi",
//           "value": 20194,
//           "index": 1,
//           "latlng": {
//             "latitude": 34,
//             "longitude": 43
//           },
//           "address": "34111 Bridle St, Fremont, CA"
//         }
const getDistanceToFurthestDropoffLocation = async opts => {
  if (opts.query) {
    var query = opts.query;
  } else if (opts.pickupID) {
    try {
      // const q = await API.graphql(graphqlOperation(queries.getPickup, {id: opts.pickupID}))
      // var query = q.data.getPickup;
      var query = await getPickupInfo(opts.pickupID);
    } catch (err) {
      console.log('[ERROR]: ', err);
      return Promise.reject(new Error(err));
    }
  }

  if (opts.newDriverLocation) {
    var driverLocationLatLng = opts.newDriverLocation;
  } else {
    var driverLocationLatLng = {
      lat: query.lat,
      lng: query.long,
    };
  }

  var allDropoffLocationsLatLng = [];
  var allDropoffLocations = [];

  for (var order of query.orders) {
    if (
      order.closed === 'false' &&
      order.delivery_long &&
      order.delivery_lat &&
      order.status &&
      order.status !== 'DECLINED' &&
      order.status !== 'CANCELED'
    ) {
      allDropoffLocationsLatLng.push({
        lat: order.delivery_lat,
        lng: order.delivery_long,
      });
    }
    allDropoffLocations.push(order.delivery_address);
  }

  var furthestDropoffLocation = [-1, 0];

  const origins = [`${driverLocationLatLng.lat},${driverLocationLatLng.lng}`];
  var destinations = [];
  for (var location of allDropoffLocationsLatLng) {
    destinations.push(`${location.lat},${location.lng}`);
  }
  var optionals = [];
  try {
    var distanceMatrixAPIResp = await queryDistanceMatrixAPI(origins, destinations, optionals);
  } catch (err) {
    console.log('[ERROR]:', err);
    return Promise.reject(new Error(err));
  }

  for (var entry in distanceMatrixAPIResp.rows[0].elements) {
    let dist = distanceMatrixAPIResp.rows[0].elements[entry].distance.value;
    if (furthestDropoffLocation[1] < dist) {
      furthestDropoffLocation[0] = entry;
      furthestDropoffLocation[1] = dist;
    }
  }

  var ret = {
    ...distanceMatrixAPIResp.rows[0].elements[furthestDropoffLocation[0]].distance,
    index: furthestDropoffLocation[0],
    latlng: allDropoffLocationsLatLng[furthestDropoffLocation[0]],
    address: allDropoffLocations[furthestDropoffLocation[0]],
  };
  return ret;
};

const getDestinationsWithoutFurthest = async opts => {
  if (opts.query) {
    var query = opts.query;
  } else {
    try {
      // const q = await API.graphql(graphqlOperation(queries.getPickup, {id: opts.pickupID}))
      // var query = q.data.getPickup;
      var query = await getPickupInfo(opts.pickupID);
    } catch (err) {
      console.log('[ERROR]: ', err);
      return Promise.reject(new Error(err));
    }
  }

  var allDropoffLocationsLatLng = [];
  for (var order of query.orders) {
    if (
      order.closed === 'false' &&
      order.delivery_long &&
      order.delivery_lat &&
      order.status &&
      order.status !== 'DECLINED' &&
      order.status !== 'CANCELED'
    ) {
      allDropoffLocationsLatLng.push({
        lat: order.delivery_lat,
        lng: order.delivery_long,
      });
    }
  }

  var destinations = [];
  for (var location of allDropoffLocationsLatLng) {
    destinations.push(`${location.lat},${location.lng}`);
  }

  try {
    var furthestDropoffLocation = await getDistanceToFurthestDropoffLocation({ query: query });
  } catch (err) {
    console.log('[ERROR]:', err);
    return Promise.reject(new Error(err));
  }

  var destinationsWithoutFurthest = [...destinations];
  destinationsWithoutFurthest.splice(furthestDropoffLocation.index, 1);

  return destinationsWithoutFurthest;
};

// Params: orderId: order id or whatever to know which order to query in
// Return: dictionary with step by step directions, the polyline for the whole route, any warnings to display to user
//         ur gonna have to figure it out yourself im not giving an example for this huge array
const getDirectionsToAllDropoffLocations = async opts => {
  if (opts.query) {
    var query = opts.query;
  } else if (opts.pickupID) {
    try {
      // const q = await API.graphql(graphqlOperation(queries.getPickup, {id: opts.pickupID}))
      var query = await getPickupInfo(opts.pickupID);
    } catch (err) {
      console.log('[ERROR]: ', err);
      return Promise.reject(new Error(err));
    }
  }

  if (opts.newDriverLocation) {
    var driverLocationLatLng = opts.newDriverLocation;
  } else {
    var driverLocationLatLng = {
      lat: query.lat,
      lng: query.long,
    };
  }

  var mode = query.transportation_type;

  try {
    var furthestDropoffLocation = await getDistanceToFurthestDropoffLocation({
      query: query,
      newDriverLocation: driverLocationLatLng,
    });
  } catch (err) {
    console.log('[ERROR]:', err);
    return Promise.reject(new Error(err));
  }

  const origin = `${driverLocationLatLng.lat},${driverLocationLatLng.lng}`;
  const destination = `${furthestDropoffLocation.latlng.lat},${furthestDropoffLocation.latlng.lng}`;
  try {
    var destinationsWithoutFurthest = await getDestinationsWithoutFurthest({
      query: query,
      newDriverLocation: driverLocationLatLng,
    });
  } catch (err) {
    console.log(err);
    return Promise.reject(new Error(err));
  }

  var optionals = [`mode=${mode.toLowerCase()}`];
  if (destinationsWithoutFurthest.length > 0) {
    optionals.push('waypoints=optimize:true|');
  } else {
    optionals.push('|');
  }
  optionals[1] = appendToApiURL(optionals[1], destinationsWithoutFurthest, '|');

  var ret = {
    legs: ['y'],
    overviewPolyline: 'ee',
    warnings: ['t'],
  };

  try {
    var directionsAPIResp = await queryDirectionsAPI(origin, destination, optionals);
  } catch (err) {
    console.log('[ERROR]:', err);
    return Promise.reject(new Error(err));
  }

  ret.legs = directionsAPIResp.routes[0].legs;
  ret.overviewPolyline = directionsAPIResp.routes[0].overview_polyline.points;
  ret.warnings = directionsAPIResp.routes[0].warnings;

  return ret;
};
