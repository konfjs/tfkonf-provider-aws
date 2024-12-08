import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKmsKeyPolicyArgs {
  bypass_policy_lockout_safety_check?: boolean;
  key_id: string;
  policy: string;
}

export class aws_kms_key_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsKmsKeyPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_kms_key_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_id(): string {
    return `${this.resourceType}.${this.resourceName}.key_id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }
}
