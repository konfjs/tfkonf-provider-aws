import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSqsQueueRedriveAllowPolicyArgs {
  queue_url: string;
  redrive_allow_policy: string;
}

export class aws_sqs_queue_redrive_allow_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSqsQueueRedriveAllowPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sqs_queue_redrive_allow_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get queue_url(): string {
    return `${this.resourceType}.${this.resourceName}.queue_url`;
  }

  get redrive_allow_policy(): string {
    return `${this.resourceType}.${this.resourceName}.redrive_allow_policy`;
  }
}
