import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamAccessKeyArgs {
  pgp_key?: string;
  status?: string;
  user: string;
}

export class aws_iam_access_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIamAccessKeyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_access_key", resourceName);
  }

  get create_date(): string {
    return `${this.resourceType}.${this.resourceName}.create_date`;
  }

  get encrypted_secret(): string {
    return `${this.resourceType}.${this.resourceName}.encrypted_secret`;
  }

  get encrypted_ses_smtp_password_v4(): string {
    return `${this.resourceType}.${this.resourceName}.encrypted_ses_smtp_password_v4`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.key_fingerprint`;
  }

  get secret(): string {
    return `${this.resourceType}.${this.resourceName}.secret`;
  }

  get ses_smtp_password_v4(): string {
    return `${this.resourceType}.${this.resourceName}.ses_smtp_password_v4`;
  }

  get user(): string {
    return `${this.resourceType}.${this.resourceName}.user`;
  }
}
