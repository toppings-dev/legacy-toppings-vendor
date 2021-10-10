var aws = require('aws-sdk');
var { v4: uuidv4 } = require('uuid');

const prod = process.env.PROD === 'true';

var ddb = new aws.DynamoDB.DocumentClient();

exports.handler = async event => {
  const args = event.arguments;

  const userUpdateParams = {
    TableName: 'ToppingsDB',
    Key: {
      pk: 'USER#USER',
      sk: 'USER#' + event.identity.username,
    },
    UpdateExpression: 'set #name = :name',
    ExpressionAttributeNames: {
      '#name': 'name',
    },
    ExpressionAttributeValues: {
      ':name': args.name,
    },
  };

  await ddb.update(userUpdateParams).promise();

  const updatedUserParams = {
    TableName: 'ToppingsDB',
    Key: {
      pk: 'USER#USER',
      sk: 'USER#' + event.identity.username,
    },
  };

  const userResp = await ddb.get(updatedUserParams).promise();
  const user = userResp.Item;

  if (args.referralCode) {
    await handleReferralCode(args, user);
  }
  
  const resp = {
    pk: 'USER#USER',
    sk: 'USER#' + event.identity.username,
    name: args.name,
  };

  return resp;
};

const handleReferralCode = async (args, user) => {
  const referralParams = {
    TableName: 'ToppingsDB',
    Key: {
      pk: 'REFERRAL#' + args.referralCode,
      sk: 'REFERRAL#' + args.referralCode,
    },
  };

  const referralResp = await ddb.get(referralParams).promise();
  const referral = referralResp.Item;

  if (!referral) {
    return;
  }

  const referrerParams = {
    TableName: 'ToppingsDB',
    Key: {
      pk: 'USER#USER',
      sk: 'USER#' + referral.user,
    },
  };

  const referrerResp = await ddb.get(referrerParams).promise();
  const referrer = referrerResp.Item;

  const referrerReferredUsers = JSON.parse(JSON.stringify(referrer.referredUsers));

  referrerReferredUsers.push(user);

  const referrerUpdateParams = {
    TableName: 'ToppingsDB',
    Key: {
      pk: 'USER#USER',
      sk: 'USER#' + referral.user,
    },
    UpdateExpression: 'set referredUsers = :referredUsers',
    ExpressionAttributeValues: {
      ':referredUsers': referrerReferredUsers,
    },
    ReturnValues: 'UPDATED_NEW',
  };

  await ddb.update(referrerUpdateParams).promise();

  const referredUserUpdateParams = {
    TableName: 'ToppingsDB',
    Key: {
      pk: user.pk,
      sk: user.sk,
    },
    UpdateExpression: 'set referrer = :referrer',
    ExpressionAttributeValues: {
      ':referrer': referrer,
    },
  };

  await ddb.update(referredUserUpdateParams).promise();

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

  await updateRewardPoints(referralMenuId, user.cognitoId, selectedReferral.points);
  await updateRewardPoints(referralMenuId, referrer.cognitoId, selectedReferral.points);
};

const updateRewardPoints = async (menuId, userId, points) => {
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

    // const redisVal = await redisGet('REWARD#' + reward.userId);
    // console.log('GOT REDIS VAL');

    // if (redisVal !== null) {
    //   await redisDel('REWARD#' + reward.userId);
    //   console.log('DELETED REDIS');
    // }
  } else {
    console.log('REWARD DOES NOT EXIST');

    const now = new Date().toISOString();

    const newReward = {
      id: uuidv4(),
      menuId,
      userId,
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

    // const redisVal = await redisGet('REWARD#' + userId);
    // console.log('GOT REDIS VAL');

    // if (redisVal !== null) {
    //   await redisDel('REWARD#' + userId);
    //   console.log('DELETED REDIS');
    // }
  }

  const rewardInfoSnsMessage = {
    userId,
    menuId,
  };

  const rewardInfoSnsParams = {
    Message: JSON.stringify(rewardInfoSnsMessage),
    TopicArn: RewardInfoTopicArn,
  };

  await sns.publish(rewardInfoSnsParams).promise();
};
