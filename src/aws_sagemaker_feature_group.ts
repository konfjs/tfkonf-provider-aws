import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerFeatureGroupArgsFeatureDefinitionCollectionConfigVectorConfig {
  dimension?: number;
}

export interface AwsSagemakerFeatureGroupArgsFeatureDefinitionCollectionConfig {
  vector_config?: AwsSagemakerFeatureGroupArgsFeatureDefinitionCollectionConfigVectorConfig;
}

export interface AwsSagemakerFeatureGroupArgsFeatureDefinition {
  collection_type?: string;
  feature_name?: string;
  feature_type?: string;
  collection_config?: AwsSagemakerFeatureGroupArgsFeatureDefinitionCollectionConfig;
}

export interface AwsSagemakerFeatureGroupArgsOfflineStoreConfigDataCatalogConfig {
}

export interface AwsSagemakerFeatureGroupArgsOfflineStoreConfigS3StorageConfig {
  kms_key_id?: string;
  s3_uri: string;
}

export interface AwsSagemakerFeatureGroupArgsOfflineStoreConfig {
  disable_glue_table_creation?: boolean;
  table_format?: string;
  data_catalog_config?: AwsSagemakerFeatureGroupArgsOfflineStoreConfigDataCatalogConfig;
  s3_storage_config: AwsSagemakerFeatureGroupArgsOfflineStoreConfigS3StorageConfig;
}

export interface AwsSagemakerFeatureGroupArgsOnlineStoreConfigSecurityConfig {
  kms_key_id?: string;
}

export interface AwsSagemakerFeatureGroupArgsOnlineStoreConfigTtlDuration {
  unit?: string;
  value?: number;
}

export interface AwsSagemakerFeatureGroupArgsOnlineStoreConfig {
  enable_online_store?: boolean;
  storage_type?: string;
  security_config?: AwsSagemakerFeatureGroupArgsOnlineStoreConfigSecurityConfig;
  ttl_duration?: AwsSagemakerFeatureGroupArgsOnlineStoreConfigTtlDuration;
}

export interface AwsSagemakerFeatureGroupArgsThroughputConfig {
  provisioned_read_capacity_units?: number;
  provisioned_write_capacity_units?: number;
}

export interface AwsSagemakerFeatureGroupArgs {
  description?: string;
  event_time_feature_name: string;
  feature_group_name: string;
  record_identifier_feature_name: string;
  role_arn: string;
  tags?: { [key: string]: string };
  feature_definition: AwsSagemakerFeatureGroupArgsFeatureDefinition[];
  offline_store_config?: AwsSagemakerFeatureGroupArgsOfflineStoreConfig;
  online_store_config?: AwsSagemakerFeatureGroupArgsOnlineStoreConfig;
  throughput_config?: AwsSagemakerFeatureGroupArgsThroughputConfig;
}

export class aws_sagemaker_feature_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSagemakerFeatureGroupArgs) {
    const meta = {feature_definition:{isBlock:true,collection_config:{isBlock:true,vector_config:{isBlock:true}}},offline_store_config:{isBlock:true,data_catalog_config:{isBlock:true},s3_storage_config:{isBlock:true}},online_store_config:{isBlock:true,security_config:{isBlock:true},ttl_duration:{isBlock:true}},throughput_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_feature_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get event_time_feature_name(): string {
    return `${this.resourceType}.${this.resourceName}.event_time_feature_name`;
  }

  get feature_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.feature_group_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get record_identifier_feature_name(): string {
    return `${this.resourceType}.${this.resourceName}.record_identifier_feature_name`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
