var aws = require('aws-sdk');

var ddb = new aws.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  const newUserInfo = event.request.userAttributes;

  const now = new Date().toISOString();

  const userReferralCode = await getReferralCode();

  const newReferralItem = {
    pk: 'REFERRAL#' + userReferralCode,
    sk: 'REFERRAL#' + userReferralCode,
    code: userReferralCode,
    user: newUserInfo.sub,
    createdAt: now,
    updatedAt: now,
    __typename: 'ReferralCode',
  };

  console.log(newUserInfo);
  const newUserItem = {
    pk: 'USER#USER',
    sk: 'USER#' + newUserInfo.sub,
    phoneNumber: newUserInfo.phone_number,
    cognitoId: newUserInfo.sub,
    isUser: true,
    referralCode: userReferralCode,
    pfp: 'https://images153411-prod.s3.amazonaws.com/default-pfp.png',
    dev: false,
    admin: false,
    referredUsers: [],
    createdAt: now,
    updatedAt: now,
    __typename: 'USER',
  };

  const referralPutParams = {
    TableName: 'ToppingsDB',
    Item: newReferralItem,
  };

  await ddb.put(referralPutParams).promise();

  const userPutParams = {
    TableName: 'ToppingsDB',
    Item: newUserItem,
  };

  await ddb.put(userPutParams).promise();

  context.done(null, event);
};

const getReferralCode = async () => {
  let code = '';
  while (true) {
    code = generateCode();

    const referralParams = {
      TableName: 'ToppingsDB',
      Key: {
        pk: 'REFERRAL#' + code,
        sk: 'REFERRAL#' + code,
      },
    };

    const referralResp = await ddb.get(referralParams).promise();
    if (!referralResp.Item) {
      break;
    }
  }
  return code;
};

function generateCode() {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  for (var i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
