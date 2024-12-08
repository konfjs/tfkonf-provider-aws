import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEfsBackupPolicyArgsBackupPolicy {
  status: string;
}

export interface AwsEfsBackupPolicyArgs {
  file_system_id: string;
  backup_policy: AwsEfsBackupPolicyArgsBackupPolicy;
}

export class aws_efs_backup_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEfsBackupPolicyArgs) {
    const meta = {backup_policy:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_efs_backup_policy", resourceName);
  }

  get file_system_id(): string {
    return `${this.resourceType}.${this.resourceName}.file_system_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
