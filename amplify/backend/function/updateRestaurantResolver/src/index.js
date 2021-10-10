var aws = require('aws-sdk');
const prod = process.env.PROD === 'true';
var ddb = new aws.DynamoDB.DocumentClient();
var sns = new aws.SNS();
const restaurantDbName = process.env.RESTAURANTDB_NAME;
const restaurantArn = process.env.RESTAURANTUPDATE_TOPIC_ARN;
exports.handler = async event => {
  const args = event.arguments;
  const identity = event.identity;

  const updateParameters = [
    'name',
    'description',
    'phoneNumber',
    'userId',
    'address',
    'city',
    'state',
    'zip_code',
    'restaurantOwnerName',
    'sundayHours',
    'mondayHours',
    'tuesdayHours',
    'wednesdayHours',
    'thursdayHours',
    'fridayHours',
    'saturdayHours',
    'isOpen',
  ];

  console.log(args);
  console.log(args.input);

  var UpdateExpression = 'set ';
  var ExpressionAttributeValues = {};
  var ExpressionAttributeNames = {};

  for (var param of updateParameters) {
    console.log(param, args.input[param]);
    if (args.input[param]) {
      UpdateExpression += `#${param} = :${param}, `;
      ExpressionAttributeValues[`:${param}`] = args.input[param];
      ExpressionAttributeNames[`#${param}`] = param;
    }
  }

  UpdateExpression = UpdateExpression.slice(0, UpdateExpression.length - 2);

  console.log(UpdateExpression);
  console.log(ExpressionAttributeValues);

  const restaurantUpdateParams = {
    TableName: restaurantDbName,
    Key: {
      id: args.id,
    },
    UpdateExpression,
    ExpressionAttributeValues,
    ExpressionAttributeNames,
  };

  await ddb.update(restaurantUpdateParams).promise();

  const restaurantParams = {
    TableName: restaurantDbName,
    Key: {
      id: args.id,
    },
  };
  const restaurantResp = await ddb.get(restaurantParams).promise();
  const restaurant = restaurantResp.Item;

  const resp = restaurant;
  const restaurantSnsMessage = {
    id: args.id,
  };
  const restaurantSnsParams = {
    Message: JSON.stringify(restaurantSnsMessage),
    TopicArn: restaurantArn,
  };
  await sns.publish(restaurantSnsParams).promise();
  return resp;
};
