const stage = "dev";

const configVars = {
    dev: {
        aws_cognito_identity_pool_id: "us-east-1:774d9e9a-94b1-4380-ad62-a5f56c5f0f77",
        aws_user_pools_id: "us-east-1_mqU4wOr3S",
        aws_user_pools_web_client_id: "75e3mq3pape88oe3bbi2bb0fc6",
        aws_appsync_graphqlEndpoint: "https://j2lz5urxhnej7hy4s6xrrirdoq.appsync-api.us-east-1.amazonaws.com/graphql",
        aws_dynamodb_table_schemas_tableName: "userdb-dev",
        aws_user_files_s3_bucket: "images122034-dev",
    },
    prod: {
        aws_cognito_identity_pool_id: "us-east-1:0d91a1fd-2f83-4386-94ff-13e7029d360e",
        aws_user_pools_id: "us-east-1_sPJ3bNpKy",
        aws_user_pools_web_client_id: "4f4neinvod1mgsfs69ogku2heo",
        aws_appsync_graphqlEndpoint: "https://mik3xstqlreaxo22eswh3jdlia.appsync-api.us-east-1.amazonaws.com/graphql",
        aws_dynamodb_table_schemas_tableName: "userdb-prod",
        aws_user_files_s3_bucket: "images153411-prod",
    }
};

const awsConfig = {
    "aws_project_region": "us-east-1",
    "aws_cognito_region": "us-east-1",
    "oauth": {},
    "aws_appsync_region": "us-east-1",
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
    "aws_dynamodb_all_tables_region": "us-east-1",
    "aws_dynamodb_table_schemas": [
        {
            "tableName": configVars[stage].aws_dynamodb_table_schemas_tableName,
            "region": "us-east-1"
        }
    ],
    "aws_user_files_s3_bucket_region": "us-east-1",
    ...configVars[stage]
};

export default awsConfig;