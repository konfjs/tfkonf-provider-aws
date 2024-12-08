import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppsyncDatasourceArgsDynamodbConfigDeltaSyncConfig {
  base_table_ttl?: number;
  delta_sync_table_name: string;
  delta_sync_table_ttl?: number;
}

export interface AwsAppsyncDatasourceArgsDynamodbConfig {
  table_name: string;
  use_caller_credentials?: boolean;
  versioned?: boolean;
  delta_sync_config?: AwsAppsyncDatasourceArgsDynamodbConfigDeltaSyncConfig;
}

export interface AwsAppsyncDatasourceArgsElasticsearchConfig {
  endpoint: string;
}

export interface AwsAppsyncDatasourceArgsEventBridgeConfig {
  event_bus_arn: string;
}

export interface AwsAppsyncDatasourceArgsHttpConfigAuthorizationConfigAwsIamConfig {
  signing_region?: string;
  signing_service_name?: string;
}

export interface AwsAppsyncDatasourceArgsHttpConfigAuthorizationConfig {
  authorization_type?: string;
  aws_iam_config?: AwsAppsyncDatasourceArgsHttpConfigAuthorizationConfigAwsIamConfig;
}

export interface AwsAppsyncDatasourceArgsHttpConfig {
  endpoint: string;
  authorization_config?: AwsAppsyncDatasourceArgsHttpConfigAuthorizationConfig;
}

export interface AwsAppsyncDatasourceArgsLambdaConfig {
  function_arn: string;
}

export interface AwsAppsyncDatasourceArgsOpensearchserviceConfig {
  endpoint: string;
}

export interface AwsAppsyncDatasourceArgsRelationalDatabaseConfigHttpEndpointConfig {
  aws_secret_store_arn: string;
  database_name?: string;
  db_cluster_identifier: string;
  schema?: string;
}

export interface AwsAppsyncDatasourceArgsRelationalDatabaseConfig {
  source_type?: string;
  http_endpoint_config?: AwsAppsyncDatasourceArgsRelationalDatabaseConfigHttpEndpointConfig;
}

export interface AwsAppsyncDatasourceArgs {
  api_id: string;
  description?: string;
  name: string;
  service_role_arn?: string;
  type: string;
  dynamodb_config?: AwsAppsyncDatasourceArgsDynamodbConfig;
  elasticsearch_config?: AwsAppsyncDatasourceArgsElasticsearchConfig;
  event_bridge_config?: AwsAppsyncDatasourceArgsEventBridgeConfig;
  http_config?: AwsAppsyncDatasourceArgsHttpConfig;
  lambda_config?: AwsAppsyncDatasourceArgsLambdaConfig;
  opensearchservice_config?: AwsAppsyncDatasourceArgsOpensearchserviceConfig;
  relational_database_config?: AwsAppsyncDatasourceArgsRelationalDatabaseConfig;
}

export class aws_appsync_datasource extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppsyncDatasourceArgs) {
    const meta = {dynamodb_config:{isBlock:true,delta_sync_config:{isBlock:true}},elasticsearch_config:{isBlock:true},event_bridge_config:{isBlock:true},http_config:{isBlock:true,authorization_config:{isBlock:true,aws_iam_config:{isBlock:true}}},lambda_config:{isBlock:true},opensearchservice_config:{isBlock:true},relational_database_config:{isBlock:true,http_endpoint_config:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_appsync_datasource", resourceName);
  }

  get api_id(): string {
    return `${this.resourceType}.${this.resourceName}.api_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
