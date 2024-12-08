import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIamUserSshKeyArgs {
  encoding: string;
  ssh_public_key_id: string;
  username: string;
}

export class data_aws_iam_user_ssh_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsIamUserSshKeyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_iam_user_ssh_key", resourceName);
  }

  get encoding(): string {
    return `data.${this.resourceType}.${this.resourceName}.encoding`;
  }

  get fingerprint(): string {
    return `data.${this.resourceType}.${this.resourceName}.fingerprint`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get public_key(): string {
    return `data.${this.resourceType}.${this.resourceName}.public_key`;
  }

  get ssh_public_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.ssh_public_key_id`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get username(): string {
    return `data.${this.resourceType}.${this.resourceName}.username`;
  }
}
