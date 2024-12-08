import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppconfigConfigurationProfileArgsValidator {
  content?: string;
  type: string;
}

export interface AwsAppconfigConfigurationProfileArgs {
  application_id: string;
  description?: string;
  kms_key_identifier?: string;
  location_uri: string;
  name: string;
  retrieval_role_arn?: string;
  tags?: { [key: string]: string };
  type?: string;
  validator?: AwsAppconfigConfigurationProfileArgsValidator[];
}

export class aws_appconfig_configuration_profile extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppconfigConfigurationProfileArgs) {
    const meta = {validator:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_appconfig_configuration_profile", resourceName);
  }

  get application_id(): string {
    return `${this.resourceType}.${this.resourceName}.application_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get configuration_profile_id(): string {
    return `${this.resourceType}.${this.resourceName}.configuration_profile_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location_uri(): string {
    return `${this.resourceType}.${this.resourceName}.location_uri`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
