import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLocationMapArgsConfiguration {
  style: string;
}

export interface AwsLocationMapArgs {
  description?: string;
  map_name: string;
  tags?: { [key: string]: string };
  configuration: AwsLocationMapArgsConfiguration;
}

export class aws_location_map extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLocationMapArgs) {
    const meta = {configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_location_map", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get map_arn(): string {
    return `${this.resourceType}.${this.resourceName}.map_arn`;
  }

  get map_name(): string {
    return `${this.resourceType}.${this.resourceName}.map_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
