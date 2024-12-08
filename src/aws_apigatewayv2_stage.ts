import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApigatewayv2StageArgsAccessLogSettings {
  destination_arn: string;
  format: string;
}

export interface AwsApigatewayv2StageArgsDefaultRouteSettings {
  data_trace_enabled?: boolean;
  detailed_metrics_enabled?: boolean;
  throttling_burst_limit?: number;
  throttling_rate_limit?: number;
}

export interface AwsApigatewayv2StageArgsRouteSettings {
  data_trace_enabled?: boolean;
  detailed_metrics_enabled?: boolean;
  route_key: string;
  throttling_burst_limit?: number;
  throttling_rate_limit?: number;
}

export interface AwsApigatewayv2StageArgs {
  api_id: string;
  auto_deploy?: boolean;
  client_certificate_id?: string;
  description?: string;
  name: string;
  stage_variables?: { [key: string]: string };
  tags?: { [key: string]: string };
  access_log_settings?: AwsApigatewayv2StageArgsAccessLogSettings;
  default_route_settings?: AwsApigatewayv2StageArgsDefaultRouteSettings;
  route_settings?: AwsApigatewayv2StageArgsRouteSettings[];
}

export class aws_apigatewayv2_stage extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsApigatewayv2StageArgs) {
    const meta = {access_log_settings:{isBlock:true},default_route_settings:{isBlock:true},route_settings:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_apigatewayv2_stage", resourceName);
  }

  get api_id(): string {
    return `${this.resourceType}.${this.resourceName}.api_id`;
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

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
