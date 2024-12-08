import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsAppconfigConfigurationProfilesArgs {
  application_id: string;
}

export class data_aws_appconfig_configuration_profiles extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsAppconfigConfigurationProfilesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_appconfig_configuration_profiles", resourceName);
  }

  get application_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.application_id`;
  }

  get configuration_profile_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.configuration_profile_ids`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
