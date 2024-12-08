import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatasyncTaskArgsExcludes {
  filter_type?: string;
  value?: string;
}

export interface AwsDatasyncTaskArgsIncludes {
  filter_type?: string;
  value?: string;
}

export interface AwsDatasyncTaskArgsOptions {
  atime?: string;
  bytes_per_second?: number;
  gid?: string;
  log_level?: string;
  mtime?: string;
  object_tags?: string;
  overwrite_mode?: string;
  posix_permissions?: string;
  preserve_deleted_files?: string;
  preserve_devices?: string;
  task_queueing?: string;
  transfer_mode?: string;
  uid?: string;
  verify_mode?: string;
}

export interface AwsDatasyncTaskArgsSchedule {
  schedule_expression: string;
}

export interface AwsDatasyncTaskArgsTaskReportConfigReportOverrides {
  deleted_override?: string;
  skipped_override?: string;
  transferred_override?: string;
  verified_override?: string;
}

export interface AwsDatasyncTaskArgsTaskReportConfigS3Destination {
  bucket_access_role_arn: string;
  s3_bucket_arn: string;
  subdirectory?: string;
}

export interface AwsDatasyncTaskArgsTaskReportConfig {
  output_type?: string;
  report_level?: string;
  s3_object_versioning?: string;
  report_overrides?: AwsDatasyncTaskArgsTaskReportConfigReportOverrides;
  s3_destination: AwsDatasyncTaskArgsTaskReportConfigS3Destination;
}

export interface AwsDatasyncTaskArgsTimeouts {
  create?: string;
}

export interface AwsDatasyncTaskArgs {
  cloudwatch_log_group_arn?: string;
  destination_location_arn: string;
  name?: string;
  source_location_arn: string;
  tags?: { [key: string]: string };
  excludes?: AwsDatasyncTaskArgsExcludes;
  includes?: AwsDatasyncTaskArgsIncludes;
  options?: AwsDatasyncTaskArgsOptions;
  schedule?: AwsDatasyncTaskArgsSchedule;
  task_report_config?: AwsDatasyncTaskArgsTaskReportConfig;
  timeouts?: AwsDatasyncTaskArgsTimeouts;
}

export class aws_datasync_task extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDatasyncTaskArgs) {
    const meta = {excludes:{isBlock:true},includes:{isBlock:true},options:{isBlock:true},schedule:{isBlock:true},task_report_config:{isBlock:true,report_overrides:{isBlock:true},s3_destination:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_datasync_task", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get destination_location_arn(): string {
    return `${this.resourceType}.${this.resourceName}.destination_location_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get source_location_arn(): string {
    return `${this.resourceType}.${this.resourceName}.source_location_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
