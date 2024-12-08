import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBackupRegionSettingsArgs {
  resource_type_opt_in_preference: { [key: string]: any };
}

export class aws_backup_region_settings extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsBackupRegionSettingsArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_backup_region_settings", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get resource_type_management_preference(): string {
    return `${this.resourceType}.${this.resourceName}.resource_type_management_preference`;
  }

  get resource_type_opt_in_preference(): string {
    return `${this.resourceType}.${this.resourceName}.resource_type_opt_in_preference`;
  }
}
