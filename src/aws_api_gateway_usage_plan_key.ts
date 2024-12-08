import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayUsagePlanKeyArgs {
  key_id: string;
  key_type: string;
  usage_plan_id: string;
}

export class aws_api_gateway_usage_plan_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsApiGatewayUsagePlanKeyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_usage_plan_key", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_id(): string {
    return `${this.resourceType}.${this.resourceName}.key_id`;
  }

  get key_type(): string {
    return `${this.resourceType}.${this.resourceName}.key_type`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get usage_plan_id(): string {
    return `${this.resourceType}.${this.resourceName}.usage_plan_id`;
  }

  get value(): string {
    return `${this.resourceType}.${this.resourceName}.value`;
  }
}
