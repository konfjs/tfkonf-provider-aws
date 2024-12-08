import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIdentitystoreUserArgsAddresses {
  country?: string;
  formatted?: string;
  locality?: string;
  postal_code?: string;
  primary?: boolean;
  region?: string;
  street_address?: string;
  type?: string;
}

export interface AwsIdentitystoreUserArgsEmails {
  primary?: boolean;
  type?: string;
  value?: string;
}

export interface AwsIdentitystoreUserArgsName {
  family_name: string;
  formatted?: string;
  given_name: string;
  honorific_prefix?: string;
  honorific_suffix?: string;
  middle_name?: string;
}

export interface AwsIdentitystoreUserArgsPhoneNumbers {
  primary?: boolean;
  type?: string;
  value?: string;
}

export interface AwsIdentitystoreUserArgs {
  display_name: string;
  identity_store_id: string;
  locale?: string;
  nickname?: string;
  preferred_language?: string;
  profile_url?: string;
  timezone?: string;
  title?: string;
  user_name: string;
  user_type?: string;
  addresses?: AwsIdentitystoreUserArgsAddresses;
  emails?: AwsIdentitystoreUserArgsEmails;
  name: AwsIdentitystoreUserArgsName;
  phone_numbers?: AwsIdentitystoreUserArgsPhoneNumbers;
}

export class aws_identitystore_user extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIdentitystoreUserArgs) {
    const meta = {addresses:{isBlock:true},emails:{isBlock:true},name:{isBlock:true},phone_numbers:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_identitystore_user", resourceName);
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get external_ids(): string {
    return `${this.resourceType}.${this.resourceName}.external_ids`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get identity_store_id(): string {
    return `${this.resourceType}.${this.resourceName}.identity_store_id`;
  }

  get user_id(): string {
    return `${this.resourceType}.${this.resourceName}.user_id`;
  }

  get user_name(): string {
    return `${this.resourceType}.${this.resourceName}.user_name`;
  }
}
