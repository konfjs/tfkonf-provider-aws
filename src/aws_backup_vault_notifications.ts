import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBackupVaultNotificationsArgs {
  backup_vault_events: string[];
  backup_vault_name: string;
  sns_topic_arn: string;
}

export class aws_backup_vault_notifications extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsBackupVaultNotificationsArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_backup_vault_notifications", resourceName);
  }

  get backup_vault_arn(): string {
    return `${this.resourceType}.${this.resourceName}.backup_vault_arn`;
  }

  get backup_vault_events(): string {
    return `${this.resourceType}.${this.resourceName}.backup_vault_events`;
  }

  get backup_vault_name(): string {
    return `${this.resourceType}.${this.resourceName}.backup_vault_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get sns_topic_arn(): string {
    return `${this.resourceType}.${this.resourceName}.sns_topic_arn`;
  }
}
