import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchLogSubscriptionFilterArgs {
  destination_arn: string;
  distribution?: string;
  filter_pattern: string;
  log_group_name: string;
  name: string;
}

export class aws_cloudwatch_log_subscription_filter extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudwatchLogSubscriptionFilterArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_log_subscription_filter", resourceName);
  }

  get destination_arn(): string {
    return `${this.resourceType}.${this.resourceName}.destination_arn`;
  }

  get filter_pattern(): string {
    return `${this.resourceType}.${this.resourceName}.filter_pattern`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get log_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.log_group_name`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }
}
