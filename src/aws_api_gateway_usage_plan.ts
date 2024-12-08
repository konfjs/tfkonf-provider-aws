import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayUsagePlanArgsApiStagesThrottle {
  burst_limit?: number;
  path: string;
  rate_limit?: number;
}

export interface AwsApiGatewayUsagePlanArgsApiStages {
  api_id: string;
  stage: string;
  throttle?: AwsApiGatewayUsagePlanArgsApiStagesThrottle[];
}

export interface AwsApiGatewayUsagePlanArgsQuotaSettings {
  limit: number;
  offset?: number;
  period: string;
}

export interface AwsApiGatewayUsagePlanArgsThrottleSettings {
  burst_limit?: number;
  rate_limit?: number;
}

export interface AwsApiGatewayUsagePlanArgs {
  description?: string;
  name: string;
  product_code?: string;
  tags?: { [key: string]: string };
  api_stages?: AwsApiGatewayUsagePlanArgsApiStages[];
  quota_settings?: AwsApiGatewayUsagePlanArgsQuotaSettings;
  throttle_settings?: AwsApiGatewayUsagePlanArgsThrottleSettings;
}

export class aws_api_gateway_usage_plan extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApiGatewayUsagePlanArgs) {
    const meta = {api_stages:{isBlock:true,throttle:{isBlock:true}},quota_settings:{isBlock:true},throttle_settings:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_usage_plan", resourceName);
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

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
