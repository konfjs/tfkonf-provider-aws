import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamUserGroupMembershipArgs {
  groups: string[];
  user: string;
}

export class aws_iam_user_group_membership extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIamUserGroupMembershipArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_user_group_membership", resourceName);
  }

  get groups(): string {
    return `${this.resourceType}.${this.resourceName}.groups`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get user(): string {
    return `${this.resourceType}.${this.resourceName}.user`;
  }
}
