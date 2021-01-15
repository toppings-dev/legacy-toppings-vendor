var aws = require('aws-sdk');
var ddb = new aws.DynamoDB({apiVersion: '2012-10-08'});

exports.handler = async (event, context) => {
    console.log(event);
    let date = new Date();
    const userdbName = process.env.USERDB_NAME;
    const univdbName = process.env.UNIVDB_NAME;
    const tableName = process.env.TABLE_NAME;
    const region = process.env.REGION;
    
    console.log("table=" + tableName + " -- region=" + region);
    console.log("table=" + userdbName + " -- region=" + region);
    console.log("table=" + univdbName + " -- region=" + region);
    aws.config.update({region: region});
    
    // If the required parameters are present, proceed
    if (event.request.userAttributes) {

        // -- Write data to DDB
        console.log(event.request.userAttributes);
        var params = {
          TableName: univdbName,
          Key: {
            'name': {S: event.request.userAttributes['custom:university']}
          },
        };
        try {
            let res = await ddb.getItem(params).promise();
            let database_item = res.Item;
            console.log("SUCCESSFULL GET", database_item);
            let ddbParams = {
                Item: {
                    'name': {S: event.request.userAttributes.name},
                    'phone_number': {S: event.request.userAttributes.phone_number},
                    'email': {S: event.request.userAttributes.email},
                    'university_name': {S: event.request.userAttributes['custom:university']},
                    'university': {M: database_item},
                    'createdAt': {S: date.toISOString()},
                    'updatedAt': {S: date.toISOString()}
                },
                TableName: userdbName
            };
            console.log(ddbParams)
            await ddb.putItem(ddbParams).promise()
            console.log("Success: Everything executed correctly");
            context.done(null, event);
            
        } catch (err) {
            console.log("Error", err);
        }
        

    } else {
        // Nothing to do, the user's email ID is unknown
        console.log("Error: Nothing was written to DDB or SQS");
        context.done(null, event);
    }
};