import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLakeformationDataLakeSettingsArgsCreateDatabaseDefaultPermissions {
}

export interface AwsLakeformationDataLakeSettingsArgsCreateTableDefaultPermissions {
}

export interface AwsLakeformationDataLakeSettingsArgs {
  allow_external_data_filtering?: boolean;
  allow_full_table_external_data_access?: boolean;
  catalog_id?: string;
  create_database_default_permissions?: AwsLakeformationDataLakeSettingsArgsCreateDatabaseDefaultPermissions[];
  create_table_default_permissions?: AwsLakeformationDataLakeSettingsArgsCreateTableDefaultPermissions[];
}

export class aws_lakeformation_data_lake_settings extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLakeformationDataLakeSettingsArgs) {
    const meta = {create_database_default_permissions:{isBlock:true},create_table_default_permissions:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lakeformation_data_lake_settings", resourceName);
  }

  get admins(): string {
    return `${this.resourceType}.${this.resourceName}.admins`;
  }

  get authorized_session_tag_value_list(): string {
    return `${this.resourceType}.${this.resourceName}.authorized_session_tag_value_list`;
  }

  get external_data_filtering_allow_list(): string {
    return `${this.resourceType}.${this.resourceName}.external_data_filtering_allow_list`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get parameters(): string {
    return `${this.resourceType}.${this.resourceName}.parameters`;
  }

  get read_only_admins(): string {
    return `${this.resourceType}.${this.resourceName}.read_only_admins`;
  }

  get trusted_resource_owners(): string {
    return `${this.resourceType}.${this.resourceName}.trusted_resource_owners`;
  }
}
