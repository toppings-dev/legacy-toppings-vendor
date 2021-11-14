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
        aws_cognito_identity_pool_id: "us-east-1:d28b4525-5715-4996-8b46-20d2c6bbd0a4",
        aws_user_pools_id: "us-east-1_YgvAk1566",
        aws_user_pools_web_client_id: "5n7lj78gnd8ocj4eu45v4eqjvj",
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