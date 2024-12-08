import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsGlueDataCatalogEncryptionSettingsArgs {
  catalog_id: string;
}

export class data_aws_glue_data_catalog_encryption_settings extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsGlueDataCatalogEncryptionSettingsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_glue_data_catalog_encryption_settings", resourceName);
  }

  get catalog_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.catalog_id`;
  }

  get data_catalog_encryption_settings(): string {
    return `data.${this.resourceType}.${this.resourceName}.data_catalog_encryption_settings`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
