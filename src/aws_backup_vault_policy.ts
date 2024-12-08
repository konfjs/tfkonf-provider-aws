import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBackupVaultPolicyArgs {
  backup_vault_name: string;
  policy: string;
}

export class aws_backup_vault_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsBackupVaultPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_backup_vault_policy", resourceName);
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

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }
}
