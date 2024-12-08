import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLocationMapArgs {
  map_name: string;
}

export class data_aws_location_map extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsLocationMapArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_location_map", resourceName);
  }

  get configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.configuration`;
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get map_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.map_arn`;
  }

  get map_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.map_name`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get update_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_time`;
  }
}
