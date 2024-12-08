import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatazoneEnvironmentProfileArgsUserParameters {
  name?: string;
  value?: string;
}

export interface AwsDatazoneEnvironmentProfileArgs {
  aws_account_region: string;
  domain_identifier: string;
  environment_blueprint_identifier: string;
  name: string;
  project_identifier: string;
  user_parameters?: AwsDatazoneEnvironmentProfileArgsUserParameters[];
}

export class aws_datazone_environment_profile extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDatazoneEnvironmentProfileArgs) {
    const meta = {user_parameters:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_datazone_environment_profile", resourceName);
  }

  get aws_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get aws_account_region(): string {
    return `${this.resourceType}.${this.resourceName}.aws_account_region`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get created_by(): string {
    return `${this.resourceType}.${this.resourceName}.created_by`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get domain_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.domain_identifier`;
  }

  get environment_blueprint_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.environment_blueprint_identifier`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.project_identifier`;
  }

  get updated_at(): string {
    return `${this.resourceType}.${this.resourceName}.updated_at`;
  }
}
