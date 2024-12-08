import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLakeformationDataLakeSettingsArgs {
  catalog_id?: string;
}

export class data_aws_lakeformation_data_lake_settings extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsLakeformationDataLakeSettingsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_lakeformation_data_lake_settings", resourceName);
  }

  get admins(): string {
    return `data.${this.resourceType}.${this.resourceName}.admins`;
  }

  get allow_external_data_filtering(): string {
    return `data.${this.resourceType}.${this.resourceName}.allow_external_data_filtering`;
  }

  get allow_full_table_external_data_access(): string {
    return `data.${this.resourceType}.${this.resourceName}.allow_full_table_external_data_access`;
  }

  get authorized_session_tag_value_list(): string {
    return `data.${this.resourceType}.${this.resourceName}.authorized_session_tag_value_list`;
  }

  get create_database_default_permissions(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_database_default_permissions`;
  }

  get create_table_default_permissions(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_table_default_permissions`;
  }

  get external_data_filtering_allow_list(): string {
    return `data.${this.resourceType}.${this.resourceName}.external_data_filtering_allow_list`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get parameters(): string {
    return `data.${this.resourceType}.${this.resourceName}.parameters`;
  }

  get read_only_admins(): string {
    return `data.${this.resourceType}.${this.resourceName}.read_only_admins`;
  }

  get trusted_resource_owners(): string {
    return `data.${this.resourceType}.${this.resourceName}.trusted_resource_owners`;
  }
}
