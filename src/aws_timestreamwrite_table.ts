import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsTimestreamwriteTableArgsMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration {
  bucket_name?: string;
  encryption_option?: string;
  kms_key_id?: string;
  object_key_prefix?: string;
}

export interface AwsTimestreamwriteTableArgsMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation {
  s3_configuration?: AwsTimestreamwriteTableArgsMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration;
}

export interface AwsTimestreamwriteTableArgsMagneticStoreWriteProperties {
  enable_magnetic_store_writes?: boolean;
  magnetic_store_rejected_data_location?: AwsTimestreamwriteTableArgsMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation;
}

export interface AwsTimestreamwriteTableArgsRetentionProperties {
  magnetic_store_retention_period_in_days: number;
  memory_store_retention_period_in_hours: number;
}

export interface AwsTimestreamwriteTableArgsSchemaCompositePartitionKey {
  enforcement_in_record?: string;
  name?: string;
  type: string;
}

export interface AwsTimestreamwriteTableArgsSchema {
  composite_partition_key?: AwsTimestreamwriteTableArgsSchemaCompositePartitionKey;
}

export interface AwsTimestreamwriteTableArgs {
  database_name: string;
  table_name: string;
  tags?: { [key: string]: string };
  magnetic_store_write_properties?: AwsTimestreamwriteTableArgsMagneticStoreWriteProperties;
  retention_properties?: AwsTimestreamwriteTableArgsRetentionProperties;
  schema?: AwsTimestreamwriteTableArgsSchema;
}

export class aws_timestreamwrite_table extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsTimestreamwriteTableArgs) {
    const meta = {magnetic_store_write_properties:{isBlock:true,magnetic_store_rejected_data_location:{isBlock:true,s3_configuration:{isBlock:true}}},retention_properties:{isBlock:true},schema:{isBlock:true,composite_partition_key:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_timestreamwrite_table", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get database_name(): string {
    return `${this.resourceType}.${this.resourceName}.database_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get table_name(): string {
    return `${this.resourceType}.${this.resourceName}.table_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
