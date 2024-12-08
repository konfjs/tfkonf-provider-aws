import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSqsQueueRedrivePolicyArgs {
  queue_url: string;
  redrive_policy: string;
}

export class aws_sqs_queue_redrive_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSqsQueueRedrivePolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sqs_queue_redrive_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get queue_url(): string {
    return `${this.resourceType}.${this.resourceName}.queue_url`;
  }

  get redrive_policy(): string {
    return `${this.resourceType}.${this.resourceName}.redrive_policy`;
  }
}
