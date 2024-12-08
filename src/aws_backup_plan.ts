import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBackupPlanArgsAdvancedBackupSetting {
  backup_options: { [key: string]: string };
  resource_type: string;
}

export interface AwsBackupPlanArgsRuleCopyActionLifecycle {
  cold_storage_after?: number;
  delete_after?: number;
}

export interface AwsBackupPlanArgsRuleCopyAction {
  destination_vault_arn: string;
  lifecycle?: AwsBackupPlanArgsRuleCopyActionLifecycle;
}

export interface AwsBackupPlanArgsRuleLifecycle {
  cold_storage_after?: number;
  delete_after?: number;
}

export interface AwsBackupPlanArgsRule {
  completion_window?: number;
  enable_continuous_backup?: boolean;
  recovery_point_tags?: { [key: string]: string };
  rule_name: string;
  schedule?: string;
  schedule_expression_timezone?: string;
  start_window?: number;
  target_vault_name: string;
  copy_action?: AwsBackupPlanArgsRuleCopyAction[];
  lifecycle?: AwsBackupPlanArgsRuleLifecycle;
}

export interface AwsBackupPlanArgs {
  name: string;
  tags?: { [key: string]: string };
  advanced_backup_setting?: AwsBackupPlanArgsAdvancedBackupSetting[];
  rule: AwsBackupPlanArgsRule[];
}

export class aws_backup_plan extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsBackupPlanArgs) {
    const meta = {advanced_backup_setting:{isBlock:true},rule:{isBlock:true,copy_action:{isBlock:true,lifecycle:{isBlock:true}},lifecycle:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_backup_plan", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
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

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
