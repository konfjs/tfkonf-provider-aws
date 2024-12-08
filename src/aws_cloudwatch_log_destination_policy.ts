import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchLogDestinationPolicyArgs {
  access_policy: string;
  destination_name: string;
  force_update?: boolean;
}

export class aws_cloudwatch_log_destination_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudwatchLogDestinationPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_log_destination_policy", resourceName);
  }

  get access_policy(): string {
    return `${this.resourceType}.${this.resourceName}.access_policy`;
  }

  get destination_name(): string {
    return `${this.resourceType}.${this.resourceName}.destination_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
