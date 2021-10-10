var aws = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const userdbName = process.env.USERDB_NAME;
const rewardDbName = process.env.REWARDDB_NAME;
const univdbName = process.env.UNIVDB_NAME;
const tableName = process.env.TABLE_NAME;
const referralDbName = process.env.REFERRALDB_NAME;
const region = process.env.REGION;
const prod = process.env.PROD;

const RewardInfoTopicArn = process.env.REWARDINFOUPDATE_TOPIC_ARN;

var ddb = new aws.DynamoDB.DocumentClient();
var sns = new aws.SNS();

exports.handler = async (event, context) => {
  aws.config.update({ region: region });

  // If the required parameters are present, proceed
  if (event.request.userAttributes) {
    // -- Write data to DDB
    console.log(event.request.userAttributes);

    var university_name;
    if (event.request.userAttributes['custom:university'] === undefined) {
      university_name = 'huh';
    } else {
      university_name = event.request.userAttributes['custom:university'];
    }

    const now = new Date().toISOString();

    const userReferralCode = await getReferralCode();

    const newReferralItem = {
      code: userReferralCode,
      email: event.request.userAttributes.email,
      createdAt: now,
      updatedAt: now,
    };

    const newUserItem = {
      email: event.request.userAttributes.email,
      university_name,
      phone_number: event.request.userAttributes.phone_number,
      name: event.request.userAttributes.name,
      isUser: event.request.userAttributes['custom:isUser'],
      createdAt: now,
      updatedAt: now,
      cognitoId: event.userName,
      admin: false,
      dev: false,
      pfp: 'https://images153411-prod.s3.amazonaws.com/default-pfp.png',
      referralCode: newReferralItem,
      referredUsers: [],
    };

    try {
      const newUserParams = {
        TableName: userdbName,
        Item: newUserItem,
      };

      const newReferralParams = {
        TableName: referralDbName,
        Item: newReferralItem,
      };

      await ddb.put(newUserParams).promise();
      await ddb.put(newReferralParams).promise();
    } catch (err) {
      console.log('[ERROR CREATE USER]:', err);
    }

    if (
      event.request.userAttributes['custom:referralCode'] &&
      event.request.userAttributes['custom:referralCode'] !== ''
    ) {
      await handleReferralCode(event, newUserItem);
    }
    context.done(null, event);
  } else {
    // Nothing to do, the user's email ID is unknown
    console.log('Error: Nothing was written to DDB or SQS');
    context.done(null, event);
  }
};

function generateCode() {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  for (var i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const getReferralCode = async () => {
  let code = '';
  while (true) {
    code = generateCode();

    const referralParams = {
      TableName: referralDbName,
      Key: {
        code,
      },
    };

    const referralResp = await ddb.get(referralParams).promise();
    if (!referralResp.Item) {
      break;
    }
  }
  return code;
};

const handleReferralCode = async (event, newUserItem) => {
  const referralParams = {
    TableName: referralDbName,
    Key: {
      code: event.request.userAttributes['custom:referralCode'],
    },
  };

  const referralResp = await ddb.get(referralParams).promise();
  const referral = referralResp.Item;

  if (!referral) {
    return;
  }

  const referrerParams = {
    TableName: userdbName,
    Key: {
      email: referral.email,
    },
  };

  const referrerResp = await ddb.get(referrerParams).promise();
  const referrer = referrerResp.Item;

  const referrerReferredUsers = JSON.parse(JSON.stringify(referrer.referredUsers));

  referrerReferredUsers.push({
    email: newUserItem.email,
    phone_number: newUserItem.phone_number,
    name: newUserItem.name,
    pfp: newUserItem.pfp,
    referralCode: newUserItem.referralCode,
  });

  const referrerUpdateParams = {
    TableName: userdbName,
    Key: {
      email: referrer.email,
    },
    UpdateExpression: 'set referredUsers = :referredUsers',
    ExpressionAttributeValues: {
      ':referredUsers': referrerReferredUsers,
    },
    ReturnValues: 'UPDATED_NEW',
  };

  await ddb.update(referrerUpdateParams).promise();

  const referralRewardsParams = {
    TableName: 'ToppingsDB',
    KeyConditionExpression: 'pk = :pk',
    ExpressionAttributeValues: {
      ':pk': 'REFERRALREWARD',
    },
  };
  console.log(referralRewardsParams);

  const referralRewardsResp = await ddb.query(referralRewardsParams).promise();
  const referralRewards = referralRewardsResp.Items;

  const selectedReferral = referralRewards[Math.floor(Math.random() * referralRewards.length)];
  const referralMenuId = selectedReferral.sk;
  console.log('GAVE POINTS FOR ' + referralMenuId);

  await updateRewardPoints(referralMenuId, event.request.userAttributes.email, selectedReferral.points);
  await updateRewardPoints(referralMenuId, referrer.email, selectedReferral.points);
};

const updateRewardPoints = async (menuId, userEmail, points) => {
  const rewardParams = {
    TableName: rewardDbName,
    IndexName: 'byMenu',
    KeyConditionExpression: 'menuId = :menuId and userEmail = :userEmail',
    ExpressionAttributeValues: {
      ':menuId': menuId,
      ':userEmail': userEmail,
    },
  };

  const rewardResp = await ddb.query(rewardParams).promise();
  const reward = rewardResp.Items[0];
  console.log('GOT REWARD');

  if (reward) {
    console.log('REWARD EXISTS');
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
        ':points': reward.points + points,
        ':updatedAt': new Date().toISOString(),
      },
    };

    await ddb.update(rewardUpdateParams).promise();
    console.log('UPDATED REWARD');

    // const redisVal = await redisGet('REWARD#' + reward.userEmail);
    // console.log('GOT REDIS VAL');

    // if (redisVal !== null) {
    //   await redisDel('REWARD#' + reward.userEmail);
    //   console.log('DELETED REDIS');
    // }
  } else {
    console.log('REWARD DOES NOT EXIST');

    const now = new Date().toISOString();

    const newReward = {
      id: uuidv4(),
      menuId,
      userEmail,
      points: points,
      createdAt: now,
      updatedAt: now,
    };

    const rewardPutParams = {
      TableName: rewardDbName,
      Item: newReward,
    };

    await ddb.put(rewardPutParams).promise();
    console.log('PUT NEW REWARD');

    // const redisVal = await redisGet('REWARD#' + userEmail);
    // console.log('GOT REDIS VAL');

    // if (redisVal !== null) {
    //   await redisDel('REWARD#' + userEmail);
    //   console.log('DELETED REDIS');
    // }
  }

  const rewardInfoSnsMessage = {
    userEmail,
    menuId,
  };

  const rewardInfoSnsParams = {
    Message: JSON.stringify(rewardInfoSnsMessage),
    TopicArn: RewardInfoTopicArn,
  };

  await sns.publish(rewardInfoSnsParams).promise();
};
