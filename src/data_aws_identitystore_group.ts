import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIdentitystoreGroupArgsAlternateIdentifierExternalId {
  id: string;
  issuer: string;
}

export interface DataAwsIdentitystoreGroupArgsAlternateIdentifierUniqueAttribute {
  attribute_path: string;
  attribute_value: string;
}

export interface DataAwsIdentitystoreGroupArgsAlternateIdentifier {
  external_id?: DataAwsIdentitystoreGroupArgsAlternateIdentifierExternalId;
  unique_attribute?: DataAwsIdentitystoreGroupArgsAlternateIdentifierUniqueAttribute;
}

export interface DataAwsIdentitystoreGroupArgsFilter {
  attribute_path: string;
  attribute_value: string;
}

export interface DataAwsIdentitystoreGroupArgs {
  identity_store_id: string;
  alternate_identifier?: DataAwsIdentitystoreGroupArgsAlternateIdentifier;
  filter?: DataAwsIdentitystoreGroupArgsFilter;
}

export class data_aws_identitystore_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsIdentitystoreGroupArgs) {
    const meta = {alternate_identifier:{isBlock:true,external_id:{isBlock:true},unique_attribute:{isBlock:true}},filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_identitystore_group", resourceName);
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get external_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.external_ids`;
  }

  get group_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.group_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get identity_store_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.identity_store_id`;
  }
}
