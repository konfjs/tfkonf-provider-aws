import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIdentitystoreUserArgsAlternateIdentifierExternalId {
  id: string;
  issuer: string;
}

export interface DataAwsIdentitystoreUserArgsAlternateIdentifierUniqueAttribute {
  attribute_path: string;
  attribute_value: string;
}

export interface DataAwsIdentitystoreUserArgsAlternateIdentifier {
  external_id?: DataAwsIdentitystoreUserArgsAlternateIdentifierExternalId;
  unique_attribute?: DataAwsIdentitystoreUserArgsAlternateIdentifierUniqueAttribute;
}

export interface DataAwsIdentitystoreUserArgsFilter {
  attribute_path: string;
  attribute_value: string;
}

export interface DataAwsIdentitystoreUserArgs {
  identity_store_id: string;
  alternate_identifier?: DataAwsIdentitystoreUserArgsAlternateIdentifier;
  filter?: DataAwsIdentitystoreUserArgsFilter;
}

export class data_aws_identitystore_user extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsIdentitystoreUserArgs) {
    const meta = {alternate_identifier:{isBlock:true,external_id:{isBlock:true},unique_attribute:{isBlock:true}},filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_identitystore_user", resourceName);
  }

  get addresses(): string {
    return `data.${this.resourceType}.${this.resourceName}.addresses`;
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get emails(): string {
    return `data.${this.resourceType}.${this.resourceName}.emails`;
  }

  get external_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.external_ids`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get identity_store_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.identity_store_id`;
  }

  get locale(): string {
    return `data.${this.resourceType}.${this.resourceName}.locale`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get nickname(): string {
    return `data.${this.resourceType}.${this.resourceName}.nickname`;
  }

  get phone_numbers(): string {
    return `data.${this.resourceType}.${this.resourceName}.phone_numbers`;
  }

  get preferred_language(): string {
    return `data.${this.resourceType}.${this.resourceName}.preferred_language`;
  }

  get profile_url(): string {
    return `data.${this.resourceType}.${this.resourceName}.profile_url`;
  }

  get timezone(): string {
    return `data.${this.resourceType}.${this.resourceName}.timezone`;
  }

  get title(): string {
    return `data.${this.resourceType}.${this.resourceName}.title`;
  }

  get user_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_id`;
  }

  get user_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_name`;
  }

  get user_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_type`;
  }
}
