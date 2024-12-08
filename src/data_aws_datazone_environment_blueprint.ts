import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDatazoneEnvironmentBlueprintArgs {
  domain_id: string;
  managed: boolean;
  name: string;
}

export class data_aws_datazone_environment_blueprint extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsDatazoneEnvironmentBlueprintArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_datazone_environment_blueprint", resourceName);
  }

  get blueprint_provider(): string {
    return `data.${this.resourceType}.${this.resourceName}.blueprint_provider`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get domain_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.domain_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get managed(): string {
    return `data.${this.resourceType}.${this.resourceName}.managed`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
