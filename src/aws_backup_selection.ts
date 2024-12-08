import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBackupSelectionArgsConditionStringEquals {
  key: string;
  value: string;
}

export interface AwsBackupSelectionArgsConditionStringLike {
  key: string;
  value: string;
}

export interface AwsBackupSelectionArgsConditionStringNotEquals {
  key: string;
  value: string;
}

export interface AwsBackupSelectionArgsConditionStringNotLike {
  key: string;
  value: string;
}

export interface AwsBackupSelectionArgsCondition {
  string_equals?: AwsBackupSelectionArgsConditionStringEquals[];
  string_like?: AwsBackupSelectionArgsConditionStringLike[];
  string_not_equals?: AwsBackupSelectionArgsConditionStringNotEquals[];
  string_not_like?: AwsBackupSelectionArgsConditionStringNotLike[];
}

export interface AwsBackupSelectionArgsSelectionTag {
  key: string;
  type: string;
  value: string;
}

export interface AwsBackupSelectionArgs {
  iam_role_arn: string;
  name: string;
  plan_id: string;
  resources?: string[];
  condition?: AwsBackupSelectionArgsCondition[];
  selection_tag?: AwsBackupSelectionArgsSelectionTag[];
}

export class aws_backup_selection extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsBackupSelectionArgs) {
    const meta = {condition:{isBlock:true,string_equals:{isBlock:true},string_like:{isBlock:true},string_not_equals:{isBlock:true},string_not_like:{isBlock:true}},selection_tag:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_backup_selection", resourceName);
  }

  get iam_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.iam_role_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get not_resources(): string {
    return `${this.resourceType}.${this.resourceName}.not_resources`;
  }

  get plan_id(): string {
    return `${this.resourceType}.${this.resourceName}.plan_id`;
  }
}
