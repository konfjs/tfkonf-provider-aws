import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBackupReportPlanArgsReportDeliveryChannel {
  formats?: string[];
  s3_bucket_name: string;
  s3_key_prefix?: string;
}

export interface AwsBackupReportPlanArgsReportSetting {
  accounts?: string[];
  framework_arns?: string[];
  number_of_frameworks?: number;
  organization_units?: string[];
  regions?: string[];
  report_template: string;
}

export interface AwsBackupReportPlanArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  report_delivery_channel: AwsBackupReportPlanArgsReportDeliveryChannel;
  report_setting: AwsBackupReportPlanArgsReportSetting;
}

export class aws_backup_report_plan extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsBackupReportPlanArgs) {
    const meta = {report_delivery_channel:{isBlock:true},report_setting:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_backup_report_plan", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get creation_time(): string {
    return `${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get deployment_status(): string {
    return `${this.resourceType}.${this.resourceName}.deployment_status`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
