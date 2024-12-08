import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIdentitystoreGroupMembershipArgs {
  group_id: string;
  identity_store_id: string;
  member_id: string;
}

export class aws_identitystore_group_membership extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIdentitystoreGroupMembershipArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_identitystore_group_membership", resourceName);
  }

  get group_id(): string {
    return `${this.resourceType}.${this.resourceName}.group_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get identity_store_id(): string {
    return `${this.resourceType}.${this.resourceName}.identity_store_id`;
  }

  get member_id(): string {
    return `${this.resourceType}.${this.resourceName}.member_id`;
  }

  get membership_id(): string {
    return `${this.resourceType}.${this.resourceName}.membership_id`;
  }
}
