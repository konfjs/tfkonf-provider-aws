import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLakeformationResourceLfTagsArgsDatabase {
  name: string;
}

export interface AwsLakeformationResourceLfTagsArgsLfTag {
  key: string;
  value: string;
}

export interface AwsLakeformationResourceLfTagsArgsTable {
  database_name: string;
  wildcard?: boolean;
}

export interface AwsLakeformationResourceLfTagsArgsTableWithColumns {
  column_names?: string[];
  database_name: string;
  excluded_column_names?: string[];
  name: string;
  wildcard?: boolean;
}

export interface AwsLakeformationResourceLfTagsArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsLakeformationResourceLfTagsArgs {
  database?: AwsLakeformationResourceLfTagsArgsDatabase;
  lf_tag: AwsLakeformationResourceLfTagsArgsLfTag[];
  table?: AwsLakeformationResourceLfTagsArgsTable;
  table_with_columns?: AwsLakeformationResourceLfTagsArgsTableWithColumns;
  timeouts?: AwsLakeformationResourceLfTagsArgsTimeouts;
}

export class aws_lakeformation_resource_lf_tags extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLakeformationResourceLfTagsArgs) {
    const meta = {database:{isBlock:true},lf_tag:{isBlock:true},table:{isBlock:true},table_with_columns:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lakeformation_resource_lf_tags", resourceName);
  }

  get catalog_id(): string {
    return `${this.resourceType}.${this.resourceName}.catalog_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
