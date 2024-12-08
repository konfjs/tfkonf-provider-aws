import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAccountPrimaryContactArgs {
  account_id?: string;
  address_line_1: string;
  address_line_2?: string;
  address_line_3?: string;
  city: string;
  company_name?: string;
  country_code: string;
  district_or_county?: string;
  full_name: string;
  phone_number: string;
  postal_code: string;
  state_or_region?: string;
  website_url?: string;
}

export class aws_account_primary_contact extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAccountPrimaryContactArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_account_primary_contact", resourceName);
  }

  get address_line_1(): string {
    return `${this.resourceType}.${this.resourceName}.address_line_1`;
  }

  get city(): string {
    return `${this.resourceType}.${this.resourceName}.city`;
  }

  get country_code(): string {
    return `${this.resourceType}.${this.resourceName}.country_code`;
  }

  get full_name(): string {
    return `${this.resourceType}.${this.resourceName}.full_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get phone_number(): string {
    return `${this.resourceType}.${this.resourceName}.phone_number`;
  }

  get postal_code(): string {
    return `${this.resourceType}.${this.resourceName}.postal_code`;
  }
}
