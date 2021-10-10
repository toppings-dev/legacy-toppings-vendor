var aws = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

var ddb = new aws.DynamoDB.DocumentClient();

const userDbName = process.env.USERDB_NAME;
const feedbackDbName = process.env.FEEDBACKDB_NAME;

exports.handler = async event => {
  const args = event.arguments;
  const identity = event.identity;

  if (!(await checkSecurity(args.userId, identity))) {
    const resp = {
      statusCode: 401,
      body: 'UNAUTHORIZED',
    };

    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  if (!checkProcessable(args.feedback)) {
    const resp = {
      statusCode: 422,
      body: 'UNPROCESSABLE ENTITY',
    };

    return Promise.reject(new Error(JSON.stringify(resp)));
  }

  const now = new Date().toISOString();

  const feedbackItem = {
    id: uuidv4(),
    userId: args.userId,
    feedback: args.feedback,
    resolved: 'false',
    createdAt: now,
    updatedAt: now,
  };

  const feedbackParams = {
    TableName: feedbackDbName,
    Item: feedbackItem,
  };

  await ddb.put(feedbackParams).promise();

  return feedbackItem;
};

const checkSecurity = async (userId, identity) => {
  return userId === identity.username;
};

const checkProcessable = feedback => {
  return feedback.length > 0;
};
