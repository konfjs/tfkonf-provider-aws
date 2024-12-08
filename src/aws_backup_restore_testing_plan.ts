import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBackupRestoreTestingPlanArgsRecoveryPointSelection {
  algorithm: string;
  include_vaults: string[];
  recovery_point_types: string[];
}

export interface AwsBackupRestoreTestingPlanArgs {
  name: string;
  schedule_expression: string;
  tags?: { [key: string]: string };
  recovery_point_selection?: AwsBackupRestoreTestingPlanArgsRecoveryPointSelection[];
}

export class aws_backup_restore_testing_plan extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsBackupRestoreTestingPlanArgs) {
    const meta = {recovery_point_selection:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_backup_restore_testing_plan", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get schedule_expression(): string {
    return `${this.resourceType}.${this.resourceName}.schedule_expression`;
  }

  get schedule_expression_timezone(): string {
    return `${this.resourceType}.${this.resourceName}.schedule_expression_timezone`;
  }

  get start_window_hours(): string {
    return `${this.resourceType}.${this.resourceName}.start_window_hours`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
