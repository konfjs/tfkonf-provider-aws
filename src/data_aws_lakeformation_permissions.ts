import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLakeformationPermissionsArgsDataCellsFilter {
  database_name: string;
  name: string;
  table_catalog_id: string;
  table_name: string;
}

export interface DataAwsLakeformationPermissionsArgsDataLocation {
  arn: string;
}

export interface DataAwsLakeformationPermissionsArgsDatabase {
  name: string;
}

export interface DataAwsLakeformationPermissionsArgsLfTag {
  key: string;
  values: string[];
}

export interface DataAwsLakeformationPermissionsArgsLfTagPolicyExpression {
  key: string;
  values: string[];
}

export interface DataAwsLakeformationPermissionsArgsLfTagPolicy {
  resource_type: string;
  expression: DataAwsLakeformationPermissionsArgsLfTagPolicyExpression[];
}

export interface DataAwsLakeformationPermissionsArgsTable {
  database_name: string;
  wildcard?: boolean;
}

export interface DataAwsLakeformationPermissionsArgsTableWithColumns {
  column_names?: string[];
  database_name: string;
  excluded_column_names?: string[];
  name: string;
  wildcard?: boolean;
}

export interface DataAwsLakeformationPermissionsArgs {
  catalog_id?: string;
  catalog_resource?: boolean;
  principal: string;
  data_cells_filter?: DataAwsLakeformationPermissionsArgsDataCellsFilter;
  data_location?: DataAwsLakeformationPermissionsArgsDataLocation;
  database?: DataAwsLakeformationPermissionsArgsDatabase;
  lf_tag?: DataAwsLakeformationPermissionsArgsLfTag;
  lf_tag_policy?: DataAwsLakeformationPermissionsArgsLfTagPolicy;
  table?: DataAwsLakeformationPermissionsArgsTable;
  table_with_columns?: DataAwsLakeformationPermissionsArgsTableWithColumns;
}

export class data_aws_lakeformation_permissions extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsLakeformationPermissionsArgs) {
    const meta = {data_cells_filter:{isBlock:true},data_location:{isBlock:true},database:{isBlock:true},lf_tag:{isBlock:true},lf_tag_policy:{isBlock:true,expression:{isBlock:true}},table:{isBlock:true},table_with_columns:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_lakeformation_permissions", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get permissions(): string {
    return `data.${this.resourceType}.${this.resourceName}.permissions`;
  }

  get permissions_with_grant_option(): string {
    return `data.${this.resourceType}.${this.resourceName}.permissions_with_grant_option`;
  }

  get principal(): string {
    return `data.${this.resourceType}.${this.resourceName}.principal`;
  }
}
