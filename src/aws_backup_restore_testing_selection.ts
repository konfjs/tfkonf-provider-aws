import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBackupRestoreTestingSelectionArgsProtectedResourceConditionsStringEquals {
  key: string;
  value: string;
}

export interface AwsBackupRestoreTestingSelectionArgsProtectedResourceConditionsStringNotEquals {
  key: string;
  value: string;
}

export interface AwsBackupRestoreTestingSelectionArgsProtectedResourceConditions {
  string_equals?: AwsBackupRestoreTestingSelectionArgsProtectedResourceConditionsStringEquals[];
  string_not_equals?: AwsBackupRestoreTestingSelectionArgsProtectedResourceConditionsStringNotEquals[];
}

export interface AwsBackupRestoreTestingSelectionArgs {
  iam_role_arn: string;
  name: string;
  protected_resource_type: string;
  restore_testing_plan_name: string;
  protected_resource_conditions?: AwsBackupRestoreTestingSelectionArgsProtectedResourceConditions[];
}

export class aws_backup_restore_testing_selection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsBackupRestoreTestingSelectionArgs) {
    const meta = {protected_resource_conditions:{isBlock:true,string_equals:{isBlock:true},string_not_equals:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_backup_restore_testing_selection", resourceName);
  }

  get iam_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.iam_role_arn`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get protected_resource_arns(): string {
    return `${this.resourceType}.${this.resourceName}.protected_resource_arns`;
  }

  get protected_resource_type(): string {
    return `${this.resourceType}.${this.resourceName}.protected_resource_type`;
  }

  get restore_metadata_overrides(): string {
    return `${this.resourceType}.${this.resourceName}.restore_metadata_overrides`;
  }

  get restore_testing_plan_name(): string {
    return `${this.resourceType}.${this.resourceName}.restore_testing_plan_name`;
  }

  get validation_window_hours(): string {
    return `${this.resourceType}.${this.resourceName}.validation_window_hours`;
  }
}
