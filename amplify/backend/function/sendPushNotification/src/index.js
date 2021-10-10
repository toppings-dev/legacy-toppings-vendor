var apn = require('apn');
var path = require('path');
var admin = require('firebase-admin');

var serviceAccount = require('moonlit-state-299120-firebase-adminsdk-c91nc-53e7524b35.json');

const prod = process.env.PROD === 'true';

async function sendAndroid(user) {
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  console.log('USER', user);

  var message = {
    notification: {
      title: user.title,
      body: user.body,
    },
    token: user.deviceToken,
  };

  console.log('MESSAGE', message);

  try {
    var resp = await admin.messaging().send(message);
    console.log(resp);
    return resp;
  } catch (err) {
    console.log('err', err);
    return err;
  }
}

async function sendIOS(user) {
  const apnOptions = {
    token: {
      key: path.join(__dirname, '.', process.env.APN_KEY_FILENAME),
      keyId: process.env.APN_KEY_ID,
      teamId: process.env.TEAM_ID,
    },
    production: prod,
  };

  console.log('APN OPTS: ', apnOptions);

  var apnProvider = new apn.Provider(apnOptions);

  let notification = new apn.Notification({
    alert: {
      title: user.title,
      body: user.body,
    },
    topic: 'com.toppingsapp.toppings',
    pushType: 'alert',
  });

  console.log('NOTI', notification);

  const deviceToken = user.deviceToken;

  console.log('TOKEN', deviceToken);

  try {
    var resp = await apnProvider.send(notification, deviceToken);
  } catch (err) {
    var resp = err;
  }
  console.log('RESP', resp);
  for (var device of resp.failed) {
    console.log('FAIL', device);
  }
  return resp;
}

exports.handler = async event => {
  for (var record of event.Records) {
    console.log(record);
    const message = JSON.parse(record.Sns.Message);

    const users = message.users;

    for (var user of users) {
      try {
        if (user.platform === 'android') {
          var resp = await sendAndroid(user);
        } else {
          var resp = await sendIOS(user);
        }
      } catch (err) {
        console.log('[TOKEN FAILED]:', err);
      }
    }
  }

  const response = {
    statusCode: 200,
  };
  return response;
};
