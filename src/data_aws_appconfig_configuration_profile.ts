import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsAppconfigConfigurationProfileArgs {
  application_id: string;
  configuration_profile_id: string;
}

export class data_aws_appconfig_configuration_profile extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsAppconfigConfigurationProfileArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_appconfig_configuration_profile", resourceName);
  }

  get application_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.application_id`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get configuration_profile_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.configuration_profile_id`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_identifier`;
  }

  get location_uri(): string {
    return `data.${this.resourceType}.${this.resourceName}.location_uri`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get retrieval_role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.retrieval_role_arn`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }

  get validator(): string {
    return `data.${this.resourceType}.${this.resourceName}.validator`;
  }
}
