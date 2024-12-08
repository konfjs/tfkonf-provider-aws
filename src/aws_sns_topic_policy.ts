import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSnsTopicPolicyArgs {
  arn: string;
  policy: string;
}

export class aws_sns_topic_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSnsTopicPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sns_topic_policy", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owner(): string {
    return `${this.resourceType}.${this.resourceName}.owner`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }
}
