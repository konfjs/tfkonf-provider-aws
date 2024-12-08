import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueCatalogDatabaseArgsCreateTableDefaultPermissionPrincipal {
  data_lake_principal_identifier?: string;
}

export interface AwsGlueCatalogDatabaseArgsCreateTableDefaultPermission {
  permissions?: string[];
  principal?: AwsGlueCatalogDatabaseArgsCreateTableDefaultPermissionPrincipal;
}

export interface AwsGlueCatalogDatabaseArgsFederatedDatabase {
  connection_name?: string;
  identifier?: string;
}

export interface AwsGlueCatalogDatabaseArgsTargetDatabase {
  catalog_id: string;
  database_name: string;
  region?: string;
}

export interface AwsGlueCatalogDatabaseArgs {
  description?: string;
  name: string;
  parameters?: { [key: string]: string };
  tags?: { [key: string]: string };
  create_table_default_permission?: AwsGlueCatalogDatabaseArgsCreateTableDefaultPermission[];
  federated_database?: AwsGlueCatalogDatabaseArgsFederatedDatabase;
  target_database?: AwsGlueCatalogDatabaseArgsTargetDatabase;
}

export class aws_glue_catalog_database extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGlueCatalogDatabaseArgs) {
    const meta = {create_table_default_permission:{isBlock:true,principal:{isBlock:true}},federated_database:{isBlock:true},target_database:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_glue_catalog_database", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get catalog_id(): string {
    return `${this.resourceType}.${this.resourceName}.catalog_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location_uri(): string {
    return `${this.resourceType}.${this.resourceName}.location_uri`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
