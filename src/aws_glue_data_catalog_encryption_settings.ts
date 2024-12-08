import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueDataCatalogEncryptionSettingsArgsDataCatalogEncryptionSettingsConnectionPasswordEncryption {
  aws_kms_key_id?: string;
  return_connection_password_encrypted: boolean;
}

export interface AwsGlueDataCatalogEncryptionSettingsArgsDataCatalogEncryptionSettingsEncryptionAtRest {
  catalog_encryption_mode: string;
  catalog_encryption_service_role?: string;
  sse_aws_kms_key_id?: string;
}

export interface AwsGlueDataCatalogEncryptionSettingsArgsDataCatalogEncryptionSettings {
  connection_password_encryption: AwsGlueDataCatalogEncryptionSettingsArgsDataCatalogEncryptionSettingsConnectionPasswordEncryption;
  encryption_at_rest: AwsGlueDataCatalogEncryptionSettingsArgsDataCatalogEncryptionSettingsEncryptionAtRest;
}

export interface AwsGlueDataCatalogEncryptionSettingsArgs {
  data_catalog_encryption_settings: AwsGlueDataCatalogEncryptionSettingsArgsDataCatalogEncryptionSettings;
}

export class aws_glue_data_catalog_encryption_settings extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsGlueDataCatalogEncryptionSettingsArgs) {
    const meta = {data_catalog_encryption_settings:{isBlock:true,connection_password_encryption:{isBlock:true},encryption_at_rest:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_glue_data_catalog_encryption_settings", resourceName);
  }

  get catalog_id(): string {
    return `${this.resourceType}.${this.resourceName}.catalog_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
