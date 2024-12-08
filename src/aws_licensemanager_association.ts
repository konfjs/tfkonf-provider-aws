import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLicensemanagerAssociationArgs {
  license_configuration_arn: string;
  resource_arn: string;
}

export class aws_licensemanager_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLicensemanagerAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_licensemanager_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get license_configuration_arn(): string {
    return `${this.resourceType}.${this.resourceName}.license_configuration_arn`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }
}
