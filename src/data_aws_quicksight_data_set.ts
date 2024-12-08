import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsQuicksightDataSetArgs {
  data_set_id: string;
}

export class data_aws_quicksight_data_set extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsQuicksightDataSetArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_quicksight_data_set", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_account_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get column_groups(): string {
    return `data.${this.resourceType}.${this.resourceName}.column_groups`;
  }

  get column_level_permission_rules(): string {
    return `data.${this.resourceType}.${this.resourceName}.column_level_permission_rules`;
  }

  get data_set_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.data_set_id`;
  }

  get data_set_usage_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.data_set_usage_configuration`;
  }

  get field_folders(): string {
    return `data.${this.resourceType}.${this.resourceName}.field_folders`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get import_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.import_mode`;
  }

  get logical_table_map(): string {
    return `data.${this.resourceType}.${this.resourceName}.logical_table_map`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get permissions(): string {
    return `data.${this.resourceType}.${this.resourceName}.permissions`;
  }

  get physical_table_map(): string {
    return `data.${this.resourceType}.${this.resourceName}.physical_table_map`;
  }

  get row_level_permission_data_set(): string {
    return `data.${this.resourceType}.${this.resourceName}.row_level_permission_data_set`;
  }

  get row_level_permission_tag_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.row_level_permission_tag_configuration`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get tags_all(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
