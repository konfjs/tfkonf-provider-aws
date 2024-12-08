import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodecatalystDevEnvironmentArgsIdes {
  name?: string;
  runtime?: string;
}

export interface AwsCodecatalystDevEnvironmentArgsPersistentStorage {
  size: number;
}

export interface AwsCodecatalystDevEnvironmentArgsRepositories {
  branch_name?: string;
  repository_name: string;
}

export interface AwsCodecatalystDevEnvironmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsCodecatalystDevEnvironmentArgs {
  alias?: string;
  inactivity_timeout_minutes?: number;
  instance_type: string;
  project_name: string;
  space_name: string;
  ides: AwsCodecatalystDevEnvironmentArgsIdes;
  persistent_storage: AwsCodecatalystDevEnvironmentArgsPersistentStorage;
  repositories?: AwsCodecatalystDevEnvironmentArgsRepositories[];
  timeouts?: AwsCodecatalystDevEnvironmentArgsTimeouts;
}

export class aws_codecatalyst_dev_environment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCodecatalystDevEnvironmentArgs) {
    const meta = {ides:{isBlock:true},persistent_storage:{isBlock:true},repositories:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_codecatalyst_dev_environment", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_type(): string {
    return `${this.resourceType}.${this.resourceName}.instance_type`;
  }

  get project_name(): string {
    return `${this.resourceType}.${this.resourceName}.project_name`;
  }

  get space_name(): string {
    return `${this.resourceType}.${this.resourceName}.space_name`;
  }
}
