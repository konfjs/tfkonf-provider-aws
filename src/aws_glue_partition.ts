import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGluePartitionArgsStorageDescriptorColumns {
  comment?: string;
  name: string;
  type?: string;
}

export interface AwsGluePartitionArgsStorageDescriptorSerDeInfo {
  name?: string;
  parameters?: { [key: string]: string };
  serialization_library?: string;
}

export interface AwsGluePartitionArgsStorageDescriptorSkewedInfo {
  skewed_column_names?: string[];
  skewed_column_value_location_maps?: { [key: string]: string };
  skewed_column_values?: string[];
}

export interface AwsGluePartitionArgsStorageDescriptorSortColumns {
  column: string;
  sort_order: number;
}

export interface AwsGluePartitionArgsStorageDescriptor {
  bucket_columns?: string[];
  compressed?: boolean;
  input_format?: string;
  location?: string;
  number_of_buckets?: number;
  output_format?: string;
  parameters?: { [key: string]: string };
  stored_as_sub_directories?: boolean;
  columns?: AwsGluePartitionArgsStorageDescriptorColumns[];
  ser_de_info?: AwsGluePartitionArgsStorageDescriptorSerDeInfo;
  skewed_info?: AwsGluePartitionArgsStorageDescriptorSkewedInfo;
  sort_columns?: AwsGluePartitionArgsStorageDescriptorSortColumns[];
}

export interface AwsGluePartitionArgs {
  database_name: string;
  parameters?: { [key: string]: string };
  partition_values: string[];
  table_name: string;
  storage_descriptor?: AwsGluePartitionArgsStorageDescriptor;
}

export class aws_glue_partition extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGluePartitionArgs) {
    const meta = {storage_descriptor:{isBlock:true,columns:{isBlock:true},ser_de_info:{isBlock:true},skewed_info:{isBlock:true},sort_columns:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_glue_partition", resourceName);
  }

  get catalog_id(): string {
    return `${this.resourceType}.${this.resourceName}.catalog_id`;
  }

  get creation_time(): string {
    return `${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get database_name(): string {
    return `${this.resourceType}.${this.resourceName}.database_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_accessed_time(): string {
    return `${this.resourceType}.${this.resourceName}.last_accessed_time`;
  }

  get last_analyzed_time(): string {
    return `${this.resourceType}.${this.resourceName}.last_analyzed_time`;
  }

  get partition_values(): string {
    return `${this.resourceType}.${this.resourceName}.partition_values`;
  }

  get table_name(): string {
    return `${this.resourceType}.${this.resourceName}.table_name`;
  }
}
