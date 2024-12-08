import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLicensemanagerGrantAccepterArgs {
  grant_arn: string;
}

export class aws_licensemanager_grant_accepter extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLicensemanagerGrantAccepterArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_licensemanager_grant_accepter", resourceName);
  }

  get allowed_operations(): string {
    return `${this.resourceType}.${this.resourceName}.allowed_operations`;
  }

  get grant_arn(): string {
    return `${this.resourceType}.${this.resourceName}.grant_arn`;
  }

  get home_region(): string {
    return `${this.resourceType}.${this.resourceName}.home_region`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get license_arn(): string {
    return `${this.resourceType}.${this.resourceName}.license_arn`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent_arn(): string {
    return `${this.resourceType}.${this.resourceName}.parent_arn`;
  }

  get principal(): string {
    return `${this.resourceType}.${this.resourceName}.principal`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
