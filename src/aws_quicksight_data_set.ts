import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsQuicksightDataSetArgsColumnGroupsGeoSpatialColumnGroup {
  columns: string[];
  country_code: string;
  name: string;
}

export interface AwsQuicksightDataSetArgsColumnGroups {
  geo_spatial_column_group?: AwsQuicksightDataSetArgsColumnGroupsGeoSpatialColumnGroup;
}

export interface AwsQuicksightDataSetArgsColumnLevelPermissionRules {
  column_names?: string[];
  principals?: string[];
}

export interface AwsQuicksightDataSetArgsDataSetUsageConfiguration {
}

export interface AwsQuicksightDataSetArgsFieldFolders {
  columns?: string[];
  description?: string;
  field_folders_id: string;
}

export interface AwsQuicksightDataSetArgsLogicalTableMapDataTransformsCastColumnTypeOperation {
  column_name: string;
  new_column_type: string;
}

export interface AwsQuicksightDataSetArgsLogicalTableMapDataTransformsCreateColumnsOperationColumns {
  column_id: string;
  column_name: string;
  expression: string;
}

export interface AwsQuicksightDataSetArgsLogicalTableMapDataTransformsCreateColumnsOperation {
  columns: AwsQuicksightDataSetArgsLogicalTableMapDataTransformsCreateColumnsOperationColumns[];
}

export interface AwsQuicksightDataSetArgsLogicalTableMapDataTransformsFilterOperation {
  condition_expression: string;
}

export interface AwsQuicksightDataSetArgsLogicalTableMapDataTransformsProjectOperation {
  projected_columns: string[];
}

export interface AwsQuicksightDataSetArgsLogicalTableMapDataTransformsRenameColumnOperation {
  column_name: string;
  new_column_name: string;
}

export interface AwsQuicksightDataSetArgsLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription {
}

export interface AwsQuicksightDataSetArgsLogicalTableMapDataTransformsTagColumnOperationTags {
  column_description?: AwsQuicksightDataSetArgsLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription;
}

export interface AwsQuicksightDataSetArgsLogicalTableMapDataTransformsTagColumnOperation {
  column_name: string;
  tags: AwsQuicksightDataSetArgsLogicalTableMapDataTransformsTagColumnOperationTags[];
}

export interface AwsQuicksightDataSetArgsLogicalTableMapDataTransformsUntagColumnOperation {
  column_name: string;
  tag_names: string[];
}

export interface AwsQuicksightDataSetArgsLogicalTableMapDataTransforms {
  cast_column_type_operation?: AwsQuicksightDataSetArgsLogicalTableMapDataTransformsCastColumnTypeOperation;
  create_columns_operation?: AwsQuicksightDataSetArgsLogicalTableMapDataTransformsCreateColumnsOperation;
  filter_operation?: AwsQuicksightDataSetArgsLogicalTableMapDataTransformsFilterOperation;
  project_operation?: AwsQuicksightDataSetArgsLogicalTableMapDataTransformsProjectOperation;
  rename_column_operation?: AwsQuicksightDataSetArgsLogicalTableMapDataTransformsRenameColumnOperation;
  tag_column_operation?: AwsQuicksightDataSetArgsLogicalTableMapDataTransformsTagColumnOperation;
  untag_column_operation?: AwsQuicksightDataSetArgsLogicalTableMapDataTransformsUntagColumnOperation;
}

export interface AwsQuicksightDataSetArgsLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties {
}

export interface AwsQuicksightDataSetArgsLogicalTableMapSourceJoinInstructionRightJoinKeyProperties {
}

export interface AwsQuicksightDataSetArgsLogicalTableMapSourceJoinInstruction {
  left_operand: string;
  on_clause: string;
  right_operand: string;
  type: string;
  left_join_key_properties?: AwsQuicksightDataSetArgsLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties;
  right_join_key_properties?: AwsQuicksightDataSetArgsLogicalTableMapSourceJoinInstructionRightJoinKeyProperties;
}

export interface AwsQuicksightDataSetArgsLogicalTableMapSource {
  join_instruction?: AwsQuicksightDataSetArgsLogicalTableMapSourceJoinInstruction;
}

export interface AwsQuicksightDataSetArgsLogicalTableMap {
  alias: string;
  logical_table_map_id: string;
  data_transforms?: AwsQuicksightDataSetArgsLogicalTableMapDataTransforms[];
  source: AwsQuicksightDataSetArgsLogicalTableMapSource;
}

export interface AwsQuicksightDataSetArgsPermissions {
  actions: string[];
  principal: string;
}

export interface AwsQuicksightDataSetArgsPhysicalTableMapCustomSqlColumns {
  name: string;
  type: string;
}

export interface AwsQuicksightDataSetArgsPhysicalTableMapCustomSql {
  data_source_arn: string;
  name: string;
  sql_query: string;
  columns?: AwsQuicksightDataSetArgsPhysicalTableMapCustomSqlColumns[];
}

export interface AwsQuicksightDataSetArgsPhysicalTableMapRelationalTableInputColumns {
  name: string;
  type: string;
}

export interface AwsQuicksightDataSetArgsPhysicalTableMapRelationalTable {
  catalog?: string;
  data_source_arn: string;
  name: string;
  schema?: string;
  input_columns: AwsQuicksightDataSetArgsPhysicalTableMapRelationalTableInputColumns[];
}

export interface AwsQuicksightDataSetArgsPhysicalTableMapS3SourceInputColumns {
  name: string;
  type: string;
}

export interface AwsQuicksightDataSetArgsPhysicalTableMapS3SourceUploadSettings {
}

export interface AwsQuicksightDataSetArgsPhysicalTableMapS3Source {
  data_source_arn: string;
  input_columns: AwsQuicksightDataSetArgsPhysicalTableMapS3SourceInputColumns[];
  upload_settings: AwsQuicksightDataSetArgsPhysicalTableMapS3SourceUploadSettings;
}

export interface AwsQuicksightDataSetArgsPhysicalTableMap {
  physical_table_map_id: string;
  custom_sql?: AwsQuicksightDataSetArgsPhysicalTableMapCustomSql;
  relational_table?: AwsQuicksightDataSetArgsPhysicalTableMapRelationalTable;
  s3_source?: AwsQuicksightDataSetArgsPhysicalTableMapS3Source;
}

export interface AwsQuicksightDataSetArgsRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow {
  column_name: string;
  size: number;
  size_unit: string;
}

export interface AwsQuicksightDataSetArgsRefreshPropertiesRefreshConfigurationIncrementalRefresh {
  lookback_window: AwsQuicksightDataSetArgsRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow;
}

export interface AwsQuicksightDataSetArgsRefreshPropertiesRefreshConfiguration {
  incremental_refresh: AwsQuicksightDataSetArgsRefreshPropertiesRefreshConfigurationIncrementalRefresh;
}

export interface AwsQuicksightDataSetArgsRefreshProperties {
  refresh_configuration: AwsQuicksightDataSetArgsRefreshPropertiesRefreshConfiguration;
}

export interface AwsQuicksightDataSetArgsRowLevelPermissionDataSet {
  arn: string;
  format_version?: string;
  namespace?: string;
  permission_policy: string;
  status?: string;
}

export interface AwsQuicksightDataSetArgsRowLevelPermissionTagConfigurationTagRules {
  column_name: string;
  match_all_value?: string;
  tag_key: string;
  tag_multi_value_delimiter?: string;
}

export interface AwsQuicksightDataSetArgsRowLevelPermissionTagConfiguration {
  status?: string;
  tag_rules: AwsQuicksightDataSetArgsRowLevelPermissionTagConfigurationTagRules[];
}

export interface AwsQuicksightDataSetArgs {
  data_set_id: string;
  import_mode: string;
  name: string;
  tags?: { [key: string]: string };
  column_groups?: AwsQuicksightDataSetArgsColumnGroups[];
  column_level_permission_rules?: AwsQuicksightDataSetArgsColumnLevelPermissionRules[];
  data_set_usage_configuration?: AwsQuicksightDataSetArgsDataSetUsageConfiguration;
  field_folders?: AwsQuicksightDataSetArgsFieldFolders[];
  logical_table_map?: AwsQuicksightDataSetArgsLogicalTableMap[];
  permissions?: AwsQuicksightDataSetArgsPermissions[];
  physical_table_map?: AwsQuicksightDataSetArgsPhysicalTableMap[];
  refresh_properties?: AwsQuicksightDataSetArgsRefreshProperties;
  row_level_permission_data_set?: AwsQuicksightDataSetArgsRowLevelPermissionDataSet;
  row_level_permission_tag_configuration?: AwsQuicksightDataSetArgsRowLevelPermissionTagConfiguration;
}

export class aws_quicksight_data_set extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsQuicksightDataSetArgs) {
    const meta = {column_groups:{isBlock:true,geo_spatial_column_group:{isBlock:true}},column_level_permission_rules:{isBlock:true},data_set_usage_configuration:{isBlock:true},field_folders:{isBlock:true},logical_table_map:{isBlock:true,data_transforms:{isBlock:true,cast_column_type_operation:{isBlock:true},create_columns_operation:{isBlock:true,columns:{isBlock:true}},filter_operation:{isBlock:true},project_operation:{isBlock:true},rename_column_operation:{isBlock:true},tag_column_operation:{isBlock:true,tags:{isBlock:true,column_description:{isBlock:true}}},untag_column_operation:{isBlock:true}},source:{isBlock:true,join_instruction:{isBlock:true,left_join_key_properties:{isBlock:true},right_join_key_properties:{isBlock:true}}}},permissions:{isBlock:true},physical_table_map:{isBlock:true,custom_sql:{isBlock:true,columns:{isBlock:true}},relational_table:{isBlock:true,input_columns:{isBlock:true}},s3_source:{isBlock:true,input_columns:{isBlock:true},upload_settings:{isBlock:true}}},refresh_properties:{isBlock:true,refresh_configuration:{isBlock:true,incremental_refresh:{isBlock:true,lookback_window:{isBlock:true}}}},row_level_permission_data_set:{isBlock:true},row_level_permission_tag_configuration:{isBlock:true,tag_rules:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_quicksight_data_set", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get data_set_id(): string {
    return `${this.resourceType}.${this.resourceName}.data_set_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get import_mode(): string {
    return `${this.resourceType}.${this.resourceName}.import_mode`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get output_columns(): string {
    return `${this.resourceType}.${this.resourceName}.output_columns`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
