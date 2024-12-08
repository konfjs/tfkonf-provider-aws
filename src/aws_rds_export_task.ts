import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRdsExportTaskArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsRdsExportTaskArgs {
  export_only?: string[];
  export_task_identifier: string;
  iam_role_arn: string;
  kms_key_id: string;
  s3_bucket_name: string;
  source_arn: string;
  timeouts?: AwsRdsExportTaskArgsTimeouts;
}

export class aws_rds_export_task extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRdsExportTaskArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_rds_export_task", resourceName);
  }

  get export_task_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.export_task_identifier`;
  }

  get failure_cause(): string {
    return `${this.resourceType}.${this.resourceName}.failure_cause`;
  }

  get iam_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.iam_role_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get percent_progress(): string {
    return `${this.resourceType}.${this.resourceName}.percent_progress`;
  }

  get s3_bucket_name(): string {
    return `${this.resourceType}.${this.resourceName}.s3_bucket_name`;
  }

  get s3_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.s3_prefix`;
  }

  get snapshot_time(): string {
    return `${this.resourceType}.${this.resourceName}.snapshot_time`;
  }

  get source_arn(): string {
    return `${this.resourceType}.${this.resourceName}.source_arn`;
  }

  get source_type(): string {
    return `${this.resourceType}.${this.resourceName}.source_type`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get task_end_time(): string {
    return `${this.resourceType}.${this.resourceName}.task_end_time`;
  }

  get task_start_time(): string {
    return `${this.resourceType}.${this.resourceName}.task_start_time`;
  }

  get warning_message(): string {
    return `${this.resourceType}.${this.resourceName}.warning_message`;
  }
}
