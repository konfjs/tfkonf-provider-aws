import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEfsFileSystemPolicyArgs {
  bypass_policy_lockout_safety_check?: boolean;
  file_system_id: string;
  policy: string;
}

export class aws_efs_file_system_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEfsFileSystemPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_efs_file_system_policy", resourceName);
  }

  get file_system_id(): string {
    return `${this.resourceType}.${this.resourceName}.file_system_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }
}
