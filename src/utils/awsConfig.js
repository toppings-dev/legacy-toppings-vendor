let awsConfig = {
    "aws_project_region": "us-east-1",
    "aws_cognito_identity_pool_id": "us-east-1:81c41e7c-e2da-4cd4-84dc-64cbda50fc7f",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_0liMRDQnV",
    "aws_user_pools_web_client_id": "2p16ei2skvph25vof5j6qean18",
    "oauth": {},
    "aws_appsync_graphqlEndpoint": "https://b6udcgxx5nbx7jen7dklahhx5y.appsync-api.us-east-1.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-1",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-tftozmnegfhghf3m4bbjrh5heu",
    "aws_dynamodb_all_tables_region": "us-east-1",
    "aws_dynamodb_table_schemas": [
        {
            "tableName": "userdb-testflight",
            "region": "us-east-1"
        }
    ]
};

const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_cognito_identity_pool_id": "us-east-1:0d91a1fd-2f83-4386-94ff-13e7029d360e",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_sPJ3bNpKy",
    "aws_user_pools_web_client_id": "4f4neinvod1mgsfs69ogku2heo",
    "oauth": {},
    "aws_appsync_graphqlEndpoint": "https://mik3xstqlreaxo22eswh3jdlia.appsync-api.us-east-1.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-1",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-qk442xiobbh6lfvby5k52xbbwi",
    "aws_dynamodb_all_tables_region": "us-east-1",
    "aws_dynamodb_table_schemas": [
        {
            "tableName": "userdb-prod",
            "region": "us-east-1"
        }
    ]
};

export default awsConfig;