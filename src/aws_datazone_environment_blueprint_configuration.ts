import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatazoneEnvironmentBlueprintConfigurationArgs {
  domain_id: string;
  enabled_regions: string[];
  environment_blueprint_id: string;
  manage_access_role_arn?: string;
  provisioning_role_arn?: string;
  regional_parameters?: { [key: string]: any };
}

export class aws_datazone_environment_blueprint_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDatazoneEnvironmentBlueprintConfigurationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_datazone_environment_blueprint_configuration", resourceName);
  }

  get domain_id(): string {
    return `${this.resourceType}.${this.resourceName}.domain_id`;
  }

  get enabled_regions(): string {
    return `${this.resourceType}.${this.resourceName}.enabled_regions`;
  }

  get environment_blueprint_id(): string {
    return `${this.resourceType}.${this.resourceName}.environment_blueprint_id`;
  }
}
