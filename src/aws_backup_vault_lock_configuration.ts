import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBackupVaultLockConfigurationArgs {
  backup_vault_name: string;
  changeable_for_days?: number;
  max_retention_days?: number;
  min_retention_days?: number;
}

export class aws_backup_vault_lock_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsBackupVaultLockConfigurationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_backup_vault_lock_configuration", resourceName);
  }

  get backup_vault_arn(): string {
    return `${this.resourceType}.${this.resourceName}.backup_vault_arn`;
  }

  get backup_vault_name(): string {
    return `${this.resourceType}.${this.resourceName}.backup_vault_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
