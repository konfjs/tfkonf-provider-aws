import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLakeformationDataCellsFilterArgsTableDataColumnWildcard {
  excluded_column_names?: string[];
}

export interface AwsLakeformationDataCellsFilterArgsTableDataRowFilterAllRowsWildcard {
}

export interface AwsLakeformationDataCellsFilterArgsTableDataRowFilter {
  all_rows_wildcard?: AwsLakeformationDataCellsFilterArgsTableDataRowFilterAllRowsWildcard[];
}

export interface AwsLakeformationDataCellsFilterArgsTableData {
  database_name: string;
  name: string;
  table_catalog_id: string;
  table_name: string;
  column_wildcard?: AwsLakeformationDataCellsFilterArgsTableDataColumnWildcard[];
  row_filter?: AwsLakeformationDataCellsFilterArgsTableDataRowFilter[];
}

export interface AwsLakeformationDataCellsFilterArgsTimeouts {
  create?: string;
}

export interface AwsLakeformationDataCellsFilterArgs {
  table_data?: AwsLakeformationDataCellsFilterArgsTableData[];
  timeouts?: AwsLakeformationDataCellsFilterArgsTimeouts;
}

export class aws_lakeformation_data_cells_filter extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLakeformationDataCellsFilterArgs) {
    const meta = {table_data:{isBlock:true,column_wildcard:{isBlock:true},row_filter:{isBlock:true,all_rows_wildcard:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lakeformation_data_cells_filter", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
