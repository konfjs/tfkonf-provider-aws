import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchLogDataProtectionPolicyArgs {
  log_group_name: string;
  policy_document: string;
}

export class aws_cloudwatch_log_data_protection_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudwatchLogDataProtectionPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_log_data_protection_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get log_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.log_group_name`;
  }

  get policy_document(): string {
    return `${this.resourceType}.${this.resourceName}.policy_document`;
  }
}
