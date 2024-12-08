import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpsworksUserProfileArgs {
  allow_self_management?: boolean;
  ssh_public_key?: string;
  ssh_username: string;
  user_arn: string;
}

export class aws_opsworks_user_profile extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsOpsworksUserProfileArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_opsworks_user_profile", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ssh_username(): string {
    return `${this.resourceType}.${this.resourceName}.ssh_username`;
  }

  get user_arn(): string {
    return `${this.resourceType}.${this.resourceName}.user_arn`;
  }
}
