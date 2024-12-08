import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLocationPlaceIndexArgs {
  index_name: string;
}

export class data_aws_location_place_index extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsLocationPlaceIndexArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_location_place_index", resourceName);
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get data_source(): string {
    return `data.${this.resourceType}.${this.resourceName}.data_source`;
  }

  get data_source_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.data_source_configuration`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get index_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.index_arn`;
  }

  get index_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.index_name`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get update_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_time`;
  }
}
