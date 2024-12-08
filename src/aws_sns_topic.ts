import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSnsTopicArgs {
  application_failure_feedback_role_arn?: string;
  application_success_feedback_role_arn?: string;
  application_success_feedback_sample_rate?: number;
  archive_policy?: string;
  content_based_deduplication?: boolean;
  delivery_policy?: string;
  display_name?: string;
  fifo_topic?: boolean;
  firehose_failure_feedback_role_arn?: string;
  firehose_success_feedback_role_arn?: string;
  firehose_success_feedback_sample_rate?: number;
  http_failure_feedback_role_arn?: string;
  http_success_feedback_role_arn?: string;
  http_success_feedback_sample_rate?: number;
  kms_master_key_id?: string;
  lambda_failure_feedback_role_arn?: string;
  lambda_success_feedback_role_arn?: string;
  lambda_success_feedback_sample_rate?: number;
  sqs_failure_feedback_role_arn?: string;
  sqs_success_feedback_role_arn?: string;
  sqs_success_feedback_sample_rate?: number;
  tags?: { [key: string]: string };
}

export class aws_sns_topic extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSnsTopicArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sns_topic", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get beginning_archive_time(): string {
    return `${this.resourceType}.${this.resourceName}.beginning_archive_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get owner(): string {
    return `${this.resourceType}.${this.resourceName}.owner`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get signature_version(): string {
    return `${this.resourceType}.${this.resourceName}.signature_version`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get tracing_config(): string {
    return `${this.resourceType}.${this.resourceName}.tracing_config`;
  }
}
