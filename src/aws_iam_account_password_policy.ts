import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamAccountPasswordPolicyArgs {
  allow_users_to_change_password?: boolean;
  minimum_password_length?: number;
}

export class aws_iam_account_password_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIamAccountPasswordPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_account_password_policy", resourceName);
  }

  get expire_passwords(): string {
    return `${this.resourceType}.${this.resourceName}.expire_passwords`;
  }

  get hard_expiry(): string {
    return `${this.resourceType}.${this.resourceName}.hard_expiry`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get max_password_age(): string {
    return `${this.resourceType}.${this.resourceName}.max_password_age`;
  }

  get password_reuse_prevention(): string {
    return `${this.resourceType}.${this.resourceName}.password_reuse_prevention`;
  }

  get require_lowercase_characters(): string {
    return `${this.resourceType}.${this.resourceName}.require_lowercase_characters`;
  }

  get require_numbers(): string {
    return `${this.resourceType}.${this.resourceName}.require_numbers`;
  }

  get require_symbols(): string {
    return `${this.resourceType}.${this.resourceName}.require_symbols`;
  }

  get require_uppercase_characters(): string {
    return `${this.resourceType}.${this.resourceName}.require_uppercase_characters`;
  }
}
