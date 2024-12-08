import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueCatalogTableArgsOpenTableFormatInputIcebergInput {
  metadata_operation: string;
  version?: string;
}

export interface AwsGlueCatalogTableArgsOpenTableFormatInput {
  iceberg_input: AwsGlueCatalogTableArgsOpenTableFormatInputIcebergInput;
}

export interface AwsGlueCatalogTableArgsPartitionIndex {
  index_name: string;
  keys: string[];
}

export interface AwsGlueCatalogTableArgsPartitionKeys {
  comment?: string;
  name: string;
  type?: string;
}

export interface AwsGlueCatalogTableArgsStorageDescriptorColumns {
  comment?: string;
  name: string;
  parameters?: { [key: string]: string };
  type?: string;
}

export interface AwsGlueCatalogTableArgsStorageDescriptorSchemaReferenceSchemaId {
  registry_name?: string;
  schema_arn?: string;
  schema_name?: string;
}

export interface AwsGlueCatalogTableArgsStorageDescriptorSchemaReference {
  schema_version_id?: string;
  schema_version_number: number;
  schema_id?: AwsGlueCatalogTableArgsStorageDescriptorSchemaReferenceSchemaId;
}

export interface AwsGlueCatalogTableArgsStorageDescriptorSerDeInfo {
  name?: string;
  parameters?: { [key: string]: string };
  serialization_library?: string;
}

export interface AwsGlueCatalogTableArgsStorageDescriptorSkewedInfo {
  skewed_column_names?: string[];
  skewed_column_value_location_maps?: { [key: string]: string };
  skewed_column_values?: string[];
}

export interface AwsGlueCatalogTableArgsStorageDescriptorSortColumns {
  column: string;
  sort_order: number;
}

export interface AwsGlueCatalogTableArgsStorageDescriptor {
  additional_locations?: string[];
  bucket_columns?: string[];
  compressed?: boolean;
  input_format?: string;
  location?: string;
  number_of_buckets?: number;
  output_format?: string;
  parameters?: { [key: string]: string };
  stored_as_sub_directories?: boolean;
  columns?: AwsGlueCatalogTableArgsStorageDescriptorColumns[];
  schema_reference?: AwsGlueCatalogTableArgsStorageDescriptorSchemaReference;
  ser_de_info?: AwsGlueCatalogTableArgsStorageDescriptorSerDeInfo;
  skewed_info?: AwsGlueCatalogTableArgsStorageDescriptorSkewedInfo;
  sort_columns?: AwsGlueCatalogTableArgsStorageDescriptorSortColumns[];
}

export interface AwsGlueCatalogTableArgsTargetTable {
  catalog_id: string;
  database_name: string;
  name: string;
  region?: string;
}

export interface AwsGlueCatalogTableArgs {
  database_name: string;
  description?: string;
  name: string;
  owner?: string;
  parameters?: { [key: string]: string };
  retention?: number;
  table_type?: string;
  view_expanded_text?: string;
  view_original_text?: string;
  open_table_format_input?: AwsGlueCatalogTableArgsOpenTableFormatInput;
  partition_index?: AwsGlueCatalogTableArgsPartitionIndex[];
  partition_keys?: AwsGlueCatalogTableArgsPartitionKeys[];
  storage_descriptor?: AwsGlueCatalogTableArgsStorageDescriptor;
  target_table?: AwsGlueCatalogTableArgsTargetTable;
}

export class aws_glue_catalog_table extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsGlueCatalogTableArgs) {
    const meta = {open_table_format_input:{isBlock:true,iceberg_input:{isBlock:true}},partition_index:{isBlock:true},partition_keys:{isBlock:true},storage_descriptor:{isBlock:true,columns:{isBlock:true},schema_reference:{isBlock:true,schema_id:{isBlock:true}},ser_de_info:{isBlock:true},skewed_info:{isBlock:true},sort_columns:{isBlock:true}},target_table:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_glue_catalog_table", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get catalog_id(): string {
    return `${this.resourceType}.${this.resourceName}.catalog_id`;
  }

  get database_name(): string {
    return `${this.resourceType}.${this.resourceName}.database_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
