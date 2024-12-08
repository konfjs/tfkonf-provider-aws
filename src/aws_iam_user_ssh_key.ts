import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamUserSshKeyArgs {
  encoding: string;
  public_key: string;
  username: string;
}

export class aws_iam_user_ssh_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIamUserSshKeyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_user_ssh_key", resourceName);
  }

  get encoding(): string {
    return `${this.resourceType}.${this.resourceName}.encoding`;
  }

  get fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.fingerprint`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get public_key(): string {
    return `${this.resourceType}.${this.resourceName}.public_key`;
  }

  get ssh_public_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.ssh_public_key_id`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get username(): string {
    return `${this.resourceType}.${this.resourceName}.username`;
  }
}
