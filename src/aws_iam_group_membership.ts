import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamGroupMembershipArgs {
  group: string;
  name: string;
  users: string[];
}

export class aws_iam_group_membership extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIamGroupMembershipArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_group_membership", resourceName);
  }

  get group(): string {
    return `${this.resourceType}.${this.resourceName}.group`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get users(): string {
    return `${this.resourceType}.${this.resourceName}.users`;
  }
}
