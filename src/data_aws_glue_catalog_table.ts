import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsGlueCatalogTableArgs {
  database_name: string;
  name: string;
  query_as_of_time?: string;
  transaction_id?: number;
}

export class data_aws_glue_catalog_table extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsGlueCatalogTableArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_glue_catalog_table", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get catalog_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.catalog_id`;
  }

  get database_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.database_name`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get owner(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner`;
  }

  get parameters(): string {
    return `data.${this.resourceType}.${this.resourceName}.parameters`;
  }

  get partition_index(): string {
    return `data.${this.resourceType}.${this.resourceName}.partition_index`;
  }

  get partition_keys(): string {
    return `data.${this.resourceType}.${this.resourceName}.partition_keys`;
  }

  get retention(): string {
    return `data.${this.resourceType}.${this.resourceName}.retention`;
  }

  get storage_descriptor(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_descriptor`;
  }

  get table_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.table_type`;
  }

  get target_table(): string {
    return `data.${this.resourceType}.${this.resourceName}.target_table`;
  }

  get view_expanded_text(): string {
    return `data.${this.resourceType}.${this.resourceName}.view_expanded_text`;
  }

  get view_original_text(): string {
    return `data.${this.resourceType}.${this.resourceName}.view_original_text`;
  }
}
