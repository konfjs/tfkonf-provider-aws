import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayStageArgsAccessLogSettings {
  destination_arn: string;
  format: string;
}

export interface AwsApiGatewayStageArgsCanarySettings {
  deployment_id: string;
  percent_traffic?: number;
  stage_variable_overrides?: { [key: string]: string };
  use_stage_cache?: boolean;
}

export interface AwsApiGatewayStageArgs {
  cache_cluster_enabled?: boolean;
  cache_cluster_size?: string;
  client_certificate_id?: string;
  deployment_id: string;
  description?: string;
  documentation_version?: string;
  rest_api_id: string;
  stage_name: string;
  tags?: { [key: string]: string };
  variables?: { [key: string]: string };
  xray_tracing_enabled?: boolean;
  access_log_settings?: AwsApiGatewayStageArgsAccessLogSettings;
  canary_settings?: AwsApiGatewayStageArgsCanarySettings;
}

export class aws_api_gateway_stage extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsApiGatewayStageArgs) {
    const meta = {access_log_settings:{isBlock:true},canary_settings:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_stage", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get deployment_id(): string {
    return `${this.resourceType}.${this.resourceName}.deployment_id`;
  }

  get execution_arn(): string {
    return `${this.resourceType}.${this.resourceName}.execution_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get invoke_url(): string {
    return `${this.resourceType}.${this.resourceName}.invoke_url`;
  }

  get rest_api_id(): string {
    return `${this.resourceType}.${this.resourceName}.rest_api_id`;
  }

  get stage_name(): string {
    return `${this.resourceType}.${this.resourceName}.stage_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get web_acl_arn(): string {
    return `${this.resourceType}.${this.resourceName}.web_acl_arn`;
  }
}
