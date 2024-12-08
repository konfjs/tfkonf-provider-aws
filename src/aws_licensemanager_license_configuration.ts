import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLicensemanagerLicenseConfigurationArgs {
  description?: string;
  license_count?: number;
  license_count_hard_limit?: boolean;
  license_counting_type: string;
  license_rules?: string[];
  name: string;
  tags?: { [key: string]: string };
}

export class aws_licensemanager_license_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLicensemanagerLicenseConfigurationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_licensemanager_license_configuration", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get license_counting_type(): string {
    return `${this.resourceType}.${this.resourceName}.license_counting_type`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get owner_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_account_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
