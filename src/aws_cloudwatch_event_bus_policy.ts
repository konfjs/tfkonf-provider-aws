import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchEventBusPolicyArgs {
  event_bus_name?: string;
  policy: string;
}

export class aws_cloudwatch_event_bus_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudwatchEventBusPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_event_bus_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }
}
