import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBackupGlobalSettingsArgs {
  global_settings: { [key: string]: string };
}

export class aws_backup_global_settings extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsBackupGlobalSettingsArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_backup_global_settings", resourceName);
  }

  get global_settings(): string {
    return `${this.resourceType}.${this.resourceName}.global_settings`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
