const stage = "prod";

const awsConfig = {
    dev: {
        "aws_project_region": "us-east-1",
        "aws_cognito_identity_pool_id": "us-east-1:67dded4c-bb6d-49fc-b675-457e8b32bae5",
        "aws_cognito_region": "us-east-1",
        "aws_user_pools_id": "us-east-1_Y1CeCsOG5",
        "aws_user_pools_web_client_id": "4ub6q9tsg7np3pjrbr4i2r3pe8",
        "oauth": {},
        "aws_appsync_graphqlEndpoint": "https://j2lz5urxhnej7hy4s6xrrirdoq.appsync-api.us-east-1.amazonaws.com/graphql",
        "aws_appsync_region": "us-east-1",
        "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
        "aws_dynamodb_all_tables_region": "us-east-1",
        "aws_dynamodb_table_schemas": [
            {
                "tableName": "userdb-dev",
                "region": "us-east-1"
            }
        ],
        "aws_user_files_s3_bucket": "images122034-dev",
        "aws_user_files_s3_bucket_region": "us-east-1"
    },
    prod: {
        "aws_project_region": "us-east-1",
        "aws_cognito_identity_pool_id": "us-east-1:0d91a1fd-2f83-4386-94ff-13e7029d360e",
        "aws_cognito_region": "us-east-1",
        "aws_user_pools_id": "us-east-1_sPJ3bNpKy",
        "aws_user_pools_web_client_id": "4f4neinvod1mgsfs69ogku2heo",
        "oauth": {},
        "aws_appsync_graphqlEndpoint": "https://mik3xstqlreaxo22eswh3jdlia.appsync-api.us-east-1.amazonaws.com/graphql",
        "aws_appsync_region": "us-east-1",
        "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
        "aws_dynamodb_all_tables_region": "us-east-1",
        "aws_dynamodb_table_schemas": [
            {
                "tableName": "userdb-prod",
                "region": "us-east-1"
            }
        ],
        "aws_user_files_s3_bucket": "images153411-prod",
        "aws_user_files_s3_bucket_region": "us-east-1"
    }
};

export default awsConfig[stage];