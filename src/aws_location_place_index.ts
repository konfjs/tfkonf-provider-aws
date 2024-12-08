import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLocationPlaceIndexArgsDataSourceConfiguration {
  intended_use?: string;
}

export interface AwsLocationPlaceIndexArgs {
  data_source: string;
  description?: string;
  index_name: string;
  tags?: { [key: string]: string };
  data_source_configuration?: AwsLocationPlaceIndexArgsDataSourceConfiguration;
}

export class aws_location_place_index extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLocationPlaceIndexArgs) {
    const meta = {data_source_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_location_place_index", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get data_source(): string {
    return `${this.resourceType}.${this.resourceName}.data_source`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get index_arn(): string {
    return `${this.resourceType}.${this.resourceName}.index_arn`;
  }

  get index_name(): string {
    return `${this.resourceType}.${this.resourceName}.index_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
