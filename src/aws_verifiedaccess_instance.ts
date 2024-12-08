import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVerifiedaccessInstanceArgs {
  description?: string;
  fips_enabled?: boolean;
  tags?: { [key: string]: string };
}

export class aws_verifiedaccess_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVerifiedaccessInstanceArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_verifiedaccess_instance", resourceName);
  }

  get creation_time(): string {
    return `${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_time(): string {
    return `${this.resourceType}.${this.resourceName}.last_updated_time`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get verified_access_trust_providers(): string {
    return `${this.resourceType}.${this.resourceName}.verified_access_trust_providers`;
  }
}
