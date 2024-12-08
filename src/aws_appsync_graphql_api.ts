import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppsyncGraphqlApiArgsAdditionalAuthenticationProviderLambdaAuthorizerConfig {
  authorizer_result_ttl_in_seconds?: number;
  authorizer_uri: string;
  identity_validation_expression?: string;
}

export interface AwsAppsyncGraphqlApiArgsAdditionalAuthenticationProviderOpenidConnectConfig {
  auth_ttl?: number;
  client_id?: string;
  iat_ttl?: number;
  issuer: string;
}

export interface AwsAppsyncGraphqlApiArgsAdditionalAuthenticationProviderUserPoolConfig {
  app_id_client_regex?: string;
  user_pool_id: string;
}

export interface AwsAppsyncGraphqlApiArgsAdditionalAuthenticationProvider {
  authentication_type: string;
  lambda_authorizer_config?: AwsAppsyncGraphqlApiArgsAdditionalAuthenticationProviderLambdaAuthorizerConfig;
  openid_connect_config?: AwsAppsyncGraphqlApiArgsAdditionalAuthenticationProviderOpenidConnectConfig;
  user_pool_config?: AwsAppsyncGraphqlApiArgsAdditionalAuthenticationProviderUserPoolConfig;
}

export interface AwsAppsyncGraphqlApiArgsEnhancedMetricsConfig {
  data_source_level_metrics_behavior: string;
  operation_level_metrics_config: string;
  resolver_level_metrics_behavior: string;
}

export interface AwsAppsyncGraphqlApiArgsLambdaAuthorizerConfig {
  authorizer_result_ttl_in_seconds?: number;
  authorizer_uri: string;
  identity_validation_expression?: string;
}

export interface AwsAppsyncGraphqlApiArgsLogConfig {
  cloudwatch_logs_role_arn: string;
  exclude_verbose_content?: boolean;
  field_log_level: string;
}

export interface AwsAppsyncGraphqlApiArgsOpenidConnectConfig {
  auth_ttl?: number;
  client_id?: string;
  iat_ttl?: number;
  issuer: string;
}

export interface AwsAppsyncGraphqlApiArgsUserPoolConfig {
  app_id_client_regex?: string;
  default_action: string;
  user_pool_id: string;
}

export interface AwsAppsyncGraphqlApiArgs {
  api_type?: string;
  authentication_type: string;
  introspection_config?: string;
  merged_api_execution_role_arn?: string;
  name: string;
  query_depth_limit?: number;
  resolver_count_limit?: number;
  schema?: string;
  tags?: { [key: string]: string };
  visibility?: string;
  xray_enabled?: boolean;
  additional_authentication_provider?: AwsAppsyncGraphqlApiArgsAdditionalAuthenticationProvider[];
  enhanced_metrics_config?: AwsAppsyncGraphqlApiArgsEnhancedMetricsConfig;
  lambda_authorizer_config?: AwsAppsyncGraphqlApiArgsLambdaAuthorizerConfig;
  log_config?: AwsAppsyncGraphqlApiArgsLogConfig;
  openid_connect_config?: AwsAppsyncGraphqlApiArgsOpenidConnectConfig;
  user_pool_config?: AwsAppsyncGraphqlApiArgsUserPoolConfig;
}

export class aws_appsync_graphql_api extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAppsyncGraphqlApiArgs) {
    const meta = {additional_authentication_provider:{isBlock:true,lambda_authorizer_config:{isBlock:true},openid_connect_config:{isBlock:true},user_pool_config:{isBlock:true}},enhanced_metrics_config:{isBlock:true},lambda_authorizer_config:{isBlock:true},log_config:{isBlock:true},openid_connect_config:{isBlock:true},user_pool_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_appsync_graphql_api", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get authentication_type(): string {
    return `${this.resourceType}.${this.resourceName}.authentication_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get uris(): string {
    return `${this.resourceType}.${this.resourceName}.uris`;
  }
}
