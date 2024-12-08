import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIdentitystoreGroupArgs {
  description?: string;
  display_name: string;
  identity_store_id: string;
}

export class aws_identitystore_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIdentitystoreGroupArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_identitystore_group", resourceName);
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get external_ids(): string {
    return `${this.resourceType}.${this.resourceName}.external_ids`;
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
}
