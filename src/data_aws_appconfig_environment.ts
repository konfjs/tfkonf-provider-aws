import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsAppconfigEnvironmentArgs {
  application_id: string;
  environment_id: string;
}

export class data_aws_appconfig_environment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsAppconfigEnvironmentArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_appconfig_environment", resourceName);
  }

  get application_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.application_id`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get environment_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.environment_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get monitor(): string {
    return `data.${this.resourceType}.${this.resourceName}.monitor`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
