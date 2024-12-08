import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsQuicksightFolderMembershipArgs {
  folder_id: string;
  member_id: string;
  member_type: string;
}

export class aws_quicksight_folder_membership extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsQuicksightFolderMembershipArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_quicksight_folder_membership", resourceName);
  }

  get aws_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get folder_id(): string {
    return `${this.resourceType}.${this.resourceName}.folder_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get member_id(): string {
    return `${this.resourceType}.${this.resourceName}.member_id`;
  }

  get member_type(): string {
    return `${this.resourceType}.${this.resourceName}.member_type`;
  }
}
