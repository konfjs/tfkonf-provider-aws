import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSqsQueuePolicyArgs {
  policy: string;
  queue_url: string;
}

export class aws_sqs_queue_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSqsQueuePolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sqs_queue_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get queue_url(): string {
    return `${this.resourceType}.${this.resourceName}.queue_url`;
  }
}
