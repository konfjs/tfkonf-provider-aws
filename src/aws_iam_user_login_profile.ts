import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamUserLoginProfileArgs {
  password_length?: number;
  pgp_key?: string;
  user: string;
}

export class aws_iam_user_login_profile extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIamUserLoginProfileArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_user_login_profile", resourceName);
  }

  get encrypted_password(): string {
    return `${this.resourceType}.${this.resourceName}.encrypted_password`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.key_fingerprint`;
  }

  get password(): string {
    return `${this.resourceType}.${this.resourceName}.password`;
  }

  get password_reset_required(): string {
    return `${this.resourceType}.${this.resourceName}.password_reset_required`;
  }

  get user(): string {
    return `${this.resourceType}.${this.resourceName}.user`;
  }
}
