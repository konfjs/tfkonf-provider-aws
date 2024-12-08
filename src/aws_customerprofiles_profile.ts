import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCustomerprofilesProfileArgsAddress {
  address_1?: string;
  address_2?: string;
  address_3?: string;
  address_4?: string;
  city?: string;
  country?: string;
  county?: string;
  postal_code?: string;
  province?: string;
  state?: string;
}

export interface AwsCustomerprofilesProfileArgsBillingAddress {
  address_1?: string;
  address_2?: string;
  address_3?: string;
  address_4?: string;
  city?: string;
  country?: string;
  county?: string;
  postal_code?: string;
  province?: string;
  state?: string;
}

export interface AwsCustomerprofilesProfileArgsMailingAddress {
  address_1?: string;
  address_2?: string;
  address_3?: string;
  address_4?: string;
  city?: string;
  country?: string;
  county?: string;
  postal_code?: string;
  province?: string;
  state?: string;
}

export interface AwsCustomerprofilesProfileArgsShippingAddress {
  address_1?: string;
  address_2?: string;
  address_3?: string;
  address_4?: string;
  city?: string;
  country?: string;
  county?: string;
  postal_code?: string;
  province?: string;
  state?: string;
}

export interface AwsCustomerprofilesProfileArgs {
  account_number?: string;
  additional_information?: string;
  attributes?: { [key: string]: string };
  birth_date?: string;
  business_email_address?: string;
  business_name?: string;
  business_phone_number?: string;
  domain_name: string;
  email_address?: string;
  first_name?: string;
  gender_string?: string;
  home_phone_number?: string;
  last_name?: string;
  middle_name?: string;
  mobile_phone_number?: string;
  party_type_string?: string;
  personal_email_address?: string;
  phone_number?: string;
  address?: AwsCustomerprofilesProfileArgsAddress;
  billing_address?: AwsCustomerprofilesProfileArgsBillingAddress;
  mailing_address?: AwsCustomerprofilesProfileArgsMailingAddress;
  shipping_address?: AwsCustomerprofilesProfileArgsShippingAddress;
}

export class aws_customerprofiles_profile extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCustomerprofilesProfileArgs) {
    const meta = {address:{isBlock:true},billing_address:{isBlock:true},mailing_address:{isBlock:true},shipping_address:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_customerprofiles_profile", resourceName);
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
