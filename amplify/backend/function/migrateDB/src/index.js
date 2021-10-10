const AWS = require('aws-sdk')

// Use the scan method to get everything from the old table
const readAllDataFromTable = async ({ region, table }) => {
  AWS.config.update({ region })
  const db = new AWS.DynamoDB.DocumentClient()

  return await new Promise((resolve, reject) => {
    db.scan(
      {
        TableName: table,
      },
      (err, data) => {
        if (err) {
          reject('Unable to scan the table.')
        } else {
          resolve(data.Items)
        }
      }
    )
  })
}

// Write one row of data to the new table
const writeRowToTable = async (db, table, row) => {
  return await new Promise((resolve, reject) => {
    db.put(
      {
        TableName: table,
        Item: row,
      },
      err => {
        if (err) {
          reject()
        } else {
          resolve()
        }
      }
    )
  })
}

// Write all the data to the new table
const writeDataToTable = async ({ region, table, data }) => {
  AWS.config.update({ region })
  const db = new AWS.DynamoDB.DocumentClient()

  // Keep a count of the successful writes so we can know if
  // all the items were written successfully
  let successfulWrites = 0

  await Promise.all(
    data.map(async item => {
      return new Promise(async resolve => {
        try {
          await writeRowToTable(db, table, item)
          successfulWrites++
        } catch (e) {
          // If something fails, log it
          console.log('error', e)
        }
        resolve()
      })
    })
  )

  console.log(`wrote ${successfulWrites} of ${data.length} rows to database`)
}

exports.handler = async (event) => {

    for (var db of event.dbs) {
      try {
        var data = await readAllDataFromTable({
          region: 'us-east-1',
          table: db.from,
        })
      } catch (err) {
        console.log('[ERROR]: ', err);
        const response = {
            statusCode: 500,
        //  Uncomment below to enable CORS requests
        //  headers: {
        //      "Access-Control-Allow-Origin": "*",
        //      "Access-Control-Allow-Headers": "*"
        //  }, 
            body: JSON.stringify('oof'),
        };
        return response;
      }

      // Write the saved data to the new table
      try {
        await writeDataToTable({
          region: 'us-east-1',
          table: db.to,
          data,
        })
      } catch (err) {
        console.log('[ERROR]: ', err);
        const response = {
            statusCode: 500,
        //  Uncomment below to enable CORS requests
        //  headers: {
        //      "Access-Control-Allow-Origin": "*",
        //      "Access-Control-Allow-Headers": "*"
        //  }, 
            body: JSON.stringify('oof'),
        };
        return response;
      }
    }

    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
