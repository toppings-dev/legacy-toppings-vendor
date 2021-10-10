var aws = require('aws-sdk');

var ddb = new aws.DynamoDB.DocumentClient();

const prod = process.env.PROD === 'true';

const restaurantDbName = process.env.RESTAURANTDB_NAME;
const restaurantImageDbName = process.env.RESTAURANTIMAGEDB_NAME;

const listRestaurantsInfo = async () => {
  if (prod) {
    // const restaurantsParams = {
    //   TableName: restaurantDbName,
    //   IndexName: 'byOpen',
    //   KeyConditionExpression: 'isOpen = :isOpen',
    //   ExpressionAttributeValues: {
    //     ':isOpen': 'true'
    //   }
    // };
    const restaurantsParams = {
      TableName: restaurantDbName,
    };

    const restaurantsResp = await ddb.scan(restaurantsParams).promise();
    var restaurants = restaurantsResp.Items;
  } else {
    const restaurantsParams = {
      TableName: restaurantDbName,
    };

    const restaurantsResp = await ddb.scan(restaurantsParams).promise();
    var restaurants = restaurantsResp.Items;
  }

  const resp = [];

  for (var restaurant of restaurants) {
    const imageParams = {
      TableName: restaurantImageDbName,
      IndexName: 'imagesByMenu',
      KeyConditionExpression: 'menuId = :menuId',
      ExpressionAttributeValues: {
        ':menuId': restaurant.id,
      },
    };

    const restaurantImageResp = await ddb.query(imageParams).promise();
    const restaurantImage = restaurantImageResp.Items[0];

    const restaurantObj = {
      ...restaurant,
      images: [
        {
          url: restaurantImage?.url ? restaurantImage.url : '',
        },
      ],
    };

    resp.push(restaurantObj);
  }

  return resp;
};

module.exports = listRestaurantsInfo;
