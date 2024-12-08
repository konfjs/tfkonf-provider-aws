import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSnsTopicDataProtectionPolicyArgs {
  arn: string;
  policy: string;
}

export class aws_sns_topic_data_protection_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSnsTopicDataProtectionPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sns_topic_data_protection_policy", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }
}
