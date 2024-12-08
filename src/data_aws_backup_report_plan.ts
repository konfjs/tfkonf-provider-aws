import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsBackupReportPlanArgs {
  name: string;
}

export class data_aws_backup_report_plan extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsBackupReportPlanArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_backup_report_plan", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get creation_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get deployment_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.deployment_status`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get report_delivery_channel(): string {
    return `data.${this.resourceType}.${this.resourceName}.report_delivery_channel`;
  }

  get report_setting(): string {
    return `data.${this.resourceType}.${this.resourceName}.report_setting`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
