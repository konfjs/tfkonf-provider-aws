import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIdentitystoreGroupsArgs {
  identity_store_id: string;
}

export class data_aws_identitystore_groups extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsIdentitystoreGroupsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_identitystore_groups", resourceName);
  }

  get groups(): string {
    return `data.${this.resourceType}.${this.resourceName}.groups`;
  }

  get identity_store_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.identity_store_id`;
  }
}
