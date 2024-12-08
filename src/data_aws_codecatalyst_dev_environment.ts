import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCodecatalystDevEnvironmentArgsRepositories {
}

export interface DataAwsCodecatalystDevEnvironmentArgs {
  alias?: string;
  creator_id?: string;
  env_id: string;
  project_name: string;
  space_name: string;
  repositories?: DataAwsCodecatalystDevEnvironmentArgsRepositories[];
}

export class data_aws_codecatalyst_dev_environment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsCodecatalystDevEnvironmentArgs) {
    const meta = {repositories:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_codecatalyst_dev_environment", resourceName);
  }

  get env_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.env_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ides(): string {
    return `data.${this.resourceType}.${this.resourceName}.ides`;
  }

  get inactivity_timeout_minutes(): string {
    return `data.${this.resourceType}.${this.resourceName}.inactivity_timeout_minutes`;
  }

  get instance_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_type`;
  }

  get last_updated_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_updated_time`;
  }

  get persistent_storage(): string {
    return `data.${this.resourceType}.${this.resourceName}.persistent_storage`;
  }

  get project_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.project_name`;
  }

  get space_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.space_name`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get status_reason(): string {
    return `data.${this.resourceType}.${this.resourceName}.status_reason`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
