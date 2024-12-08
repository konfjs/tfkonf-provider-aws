import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchEventConnectionArgsAuthParametersApiKey {
  key: string;
  value: string;
}

export interface AwsCloudwatchEventConnectionArgsAuthParametersBasic {
  password: string;
  username: string;
}

export interface AwsCloudwatchEventConnectionArgsAuthParametersInvocationHttpParametersBody {
  is_value_secret?: boolean;
  key?: string;
  value?: string;
}

export interface AwsCloudwatchEventConnectionArgsAuthParametersInvocationHttpParametersHeader {
  is_value_secret?: boolean;
  key?: string;
  value?: string;
}

export interface AwsCloudwatchEventConnectionArgsAuthParametersInvocationHttpParametersQueryString {
  is_value_secret?: boolean;
  key?: string;
  value?: string;
}

export interface AwsCloudwatchEventConnectionArgsAuthParametersInvocationHttpParameters {
  body?: AwsCloudwatchEventConnectionArgsAuthParametersInvocationHttpParametersBody[];
  header?: AwsCloudwatchEventConnectionArgsAuthParametersInvocationHttpParametersHeader[];
  query_string?: AwsCloudwatchEventConnectionArgsAuthParametersInvocationHttpParametersQueryString[];
}

export interface AwsCloudwatchEventConnectionArgsAuthParametersOauthClientParameters {
  client_id: string;
  client_secret: string;
}

export interface AwsCloudwatchEventConnectionArgsAuthParametersOauthOauthHttpParametersBody {
  is_value_secret?: boolean;
  key?: string;
  value?: string;
}

export interface AwsCloudwatchEventConnectionArgsAuthParametersOauthOauthHttpParametersHeader {
  is_value_secret?: boolean;
  key?: string;
  value?: string;
}

export interface AwsCloudwatchEventConnectionArgsAuthParametersOauthOauthHttpParametersQueryString {
  is_value_secret?: boolean;
  key?: string;
  value?: string;
}

export interface AwsCloudwatchEventConnectionArgsAuthParametersOauthOauthHttpParameters {
  body?: AwsCloudwatchEventConnectionArgsAuthParametersOauthOauthHttpParametersBody[];
  header?: AwsCloudwatchEventConnectionArgsAuthParametersOauthOauthHttpParametersHeader[];
  query_string?: AwsCloudwatchEventConnectionArgsAuthParametersOauthOauthHttpParametersQueryString[];
}

export interface AwsCloudwatchEventConnectionArgsAuthParametersOauth {
  authorization_endpoint: string;
  http_method: string;
  client_parameters?: AwsCloudwatchEventConnectionArgsAuthParametersOauthClientParameters;
  oauth_http_parameters: AwsCloudwatchEventConnectionArgsAuthParametersOauthOauthHttpParameters;
}

export interface AwsCloudwatchEventConnectionArgsAuthParameters {
  api_key?: AwsCloudwatchEventConnectionArgsAuthParametersApiKey;
  basic?: AwsCloudwatchEventConnectionArgsAuthParametersBasic;
  invocation_http_parameters?: AwsCloudwatchEventConnectionArgsAuthParametersInvocationHttpParameters;
  oauth?: AwsCloudwatchEventConnectionArgsAuthParametersOauth;
}

export interface AwsCloudwatchEventConnectionArgs {
  authorization_type: string;
  description?: string;
  name: string;
  auth_parameters: AwsCloudwatchEventConnectionArgsAuthParameters;
}

export class aws_cloudwatch_event_connection extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudwatchEventConnectionArgs) {
    const meta = {auth_parameters:{isBlock:true,api_key:{isBlock:true},basic:{isBlock:true},invocation_http_parameters:{isBlock:true,body:{isBlock:true},header:{isBlock:true},query_string:{isBlock:true}},oauth:{isBlock:true,client_parameters:{isBlock:true},oauth_http_parameters:{isBlock:true,body:{isBlock:true},header:{isBlock:true},query_string:{isBlock:true}}}}};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_event_connection", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get authorization_type(): string {
    return `${this.resourceType}.${this.resourceName}.authorization_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get secret_arn(): string {
    return `${this.resourceType}.${this.resourceName}.secret_arn`;
  }
}
