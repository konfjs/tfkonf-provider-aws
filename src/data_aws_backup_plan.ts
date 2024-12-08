import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsBackupPlanArgs {
  plan_id: string;
}

export class data_aws_backup_plan extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsBackupPlanArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_backup_plan", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get plan_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.plan_id`;
  }

  get rule(): string {
    return `data.${this.resourceType}.${this.resourceName}.rule`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }
}
