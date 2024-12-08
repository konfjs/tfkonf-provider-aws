import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsQuicksightGroupMembershipArgs {
  group_name: string;
  member_name: string;
  namespace?: string;
}

export class aws_quicksight_group_membership extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsQuicksightGroupMembershipArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_quicksight_group_membership", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get group_name(): string {
    return `${this.resourceType}.${this.resourceName}.group_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get member_name(): string {
    return `${this.resourceType}.${this.resourceName}.member_name`;
  }
}
