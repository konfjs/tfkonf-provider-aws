import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsBackupFrameworkArgs {
  name: string;
}

export class data_aws_backup_framework extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsBackupFrameworkArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_backup_framework", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get control(): string {
    return `data.${this.resourceType}.${this.resourceName}.control`;
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

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
