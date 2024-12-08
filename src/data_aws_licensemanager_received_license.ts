import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLicensemanagerReceivedLicenseArgs {
  license_arn: string;
}

export class data_aws_licensemanager_received_license extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsLicensemanagerReceivedLicenseArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_licensemanager_received_license", resourceName);
  }

  get beneficiary(): string {
    return `data.${this.resourceType}.${this.resourceName}.beneficiary`;
  }

  get consumption_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.consumption_configuration`;
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get entitlements(): string {
    return `data.${this.resourceType}.${this.resourceName}.entitlements`;
  }

  get home_region(): string {
    return `data.${this.resourceType}.${this.resourceName}.home_region`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get issuer(): string {
    return `data.${this.resourceType}.${this.resourceName}.issuer`;
  }

  get license_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.license_arn`;
  }

  get license_metadata(): string {
    return `data.${this.resourceType}.${this.resourceName}.license_metadata`;
  }

  get license_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.license_name`;
  }

  get product_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.product_name`;
  }

  get product_sku(): string {
    return `data.${this.resourceType}.${this.resourceName}.product_sku`;
  }

  get received_metadata(): string {
    return `data.${this.resourceType}.${this.resourceName}.received_metadata`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get validity(): string {
    return `data.${this.resourceType}.${this.resourceName}.validity`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }
}
