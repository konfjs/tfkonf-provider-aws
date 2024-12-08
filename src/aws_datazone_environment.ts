import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatazoneEnvironmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDatazoneEnvironmentArgsUserParameters {
  name?: string;
  value?: string;
}

export interface AwsDatazoneEnvironmentArgs {
  description?: string;
  domain_identifier: string;
  glossary_terms?: string[];
  name: string;
  profile_identifier: string;
  project_identifier: string;
  timeouts?: AwsDatazoneEnvironmentArgsTimeouts;
  user_parameters?: AwsDatazoneEnvironmentArgsUserParameters[];
}

export class aws_datazone_environment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDatazoneEnvironmentArgs) {
    const meta = {timeouts:{isBlock:true},user_parameters:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_datazone_environment", resourceName);
  }

  get account_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.account_identifier`;
  }

  get account_region(): string {
    return `${this.resourceType}.${this.resourceName}.account_region`;
  }

  get blueprint_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.blueprint_identifier`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get created_by(): string {
    return `${this.resourceType}.${this.resourceName}.created_by`;
  }

  get domain_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.domain_identifier`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_deployment(): string {
    return `${this.resourceType}.${this.resourceName}.last_deployment`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get profile_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.profile_identifier`;
  }

  get project_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.project_identifier`;
  }

  get provider_environment(): string {
    return `${this.resourceType}.${this.resourceName}.provider_environment`;
  }

  get provisioned_resources(): string {
    return `${this.resourceType}.${this.resourceName}.provisioned_resources`;
  }
}
