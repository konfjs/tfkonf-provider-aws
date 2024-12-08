import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSqsQueueArgs {
  content_based_deduplication?: boolean;
  delay_seconds?: number;
  fifo_queue?: boolean;
  kms_master_key_id?: string;
  max_message_size?: number;
  message_retention_seconds?: number;
  receive_wait_time_seconds?: number;
  tags?: { [key: string]: string };
  visibility_timeout_seconds?: number;
}

export class aws_sqs_queue extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSqsQueueArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sqs_queue", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get deduplication_scope(): string {
    return `${this.resourceType}.${this.resourceName}.deduplication_scope`;
  }

  get fifo_throughput_limit(): string {
    return `${this.resourceType}.${this.resourceName}.fifo_throughput_limit`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_data_key_reuse_period_seconds(): string {
    return `${this.resourceType}.${this.resourceName}.kms_data_key_reuse_period_seconds`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get redrive_allow_policy(): string {
    return `${this.resourceType}.${this.resourceName}.redrive_allow_policy`;
  }

  get redrive_policy(): string {
    return `${this.resourceType}.${this.resourceName}.redrive_policy`;
  }

  get sqs_managed_sse_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.sqs_managed_sse_enabled`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get url(): string {
    return `${this.resourceType}.${this.resourceName}.url`;
  }
}
