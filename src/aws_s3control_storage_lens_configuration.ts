import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelActivityMetrics {
  enabled?: boolean;
}

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics {
  enabled?: boolean;
}

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics {
  enabled?: boolean;
}

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelBucketLevelActivityMetrics {
  enabled?: boolean;
}

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics {
  enabled?: boolean;
}

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics {
  enabled?: boolean;
}

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics {
  enabled?: boolean;
}

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria {
  delimiter?: string;
  max_depth?: number;
  min_storage_bytes_percentage?: number;
}

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics {
  enabled?: boolean;
  selection_criteria?: AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria;
}

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelBucketLevelPrefixLevel {
  storage_metrics: AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics;
}

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelBucketLevel {
  activity_metrics?: AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelBucketLevelActivityMetrics;
  advanced_cost_optimization_metrics?: AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics;
  advanced_data_protection_metrics?: AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics;
  detailed_status_code_metrics?: AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics;
  prefix_level?: AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelBucketLevelPrefixLevel;
}

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics {
  enabled?: boolean;
}

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevel {
  activity_metrics?: AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelActivityMetrics;
  advanced_cost_optimization_metrics?: AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics;
  advanced_data_protection_metrics?: AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics;
  bucket_level: AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelBucketLevel;
  detailed_status_code_metrics?: AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics;
}

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAwsOrg {
  arn: string;
}

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationDataExportCloudWatchMetrics {
  enabled: boolean;
}

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms {
  key_id: string;
}

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3 {
}

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationDataExportS3BucketDestinationEncryption {
  sse_kms?: AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms;
  sse_s3?: AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3[];
}

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationDataExportS3BucketDestination {
  account_id: string;
  arn: string;
  format: string;
  output_schema_version: string;
  prefix?: string;
  encryption?: AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationDataExportS3BucketDestinationEncryption;
}

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationDataExport {
  cloud_watch_metrics?: AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationDataExportCloudWatchMetrics;
  s3_bucket_destination?: AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationDataExportS3BucketDestination;
}

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationExclude {
  buckets?: string[];
  regions?: string[];
}

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationInclude {
  buckets?: string[];
  regions?: string[];
}

export interface AwsS3controlStorageLensConfigurationArgsStorageLensConfiguration {
  enabled: boolean;
  account_level: AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAccountLevel;
  aws_org?: AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationAwsOrg;
  data_export?: AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationDataExport;
  exclude?: AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationExclude;
  include?: AwsS3controlStorageLensConfigurationArgsStorageLensConfigurationInclude;
}

export interface AwsS3controlStorageLensConfigurationArgs {
  config_id: string;
  tags?: { [key: string]: string };
  storage_lens_configuration: AwsS3controlStorageLensConfigurationArgsStorageLensConfiguration;
}

export class aws_s3control_storage_lens_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsS3controlStorageLensConfigurationArgs) {
    const meta = {storage_lens_configuration:{isBlock:true,account_level:{isBlock:true,activity_metrics:{isBlock:true},advanced_cost_optimization_metrics:{isBlock:true},advanced_data_protection_metrics:{isBlock:true},bucket_level:{isBlock:true,activity_metrics:{isBlock:true},advanced_cost_optimization_metrics:{isBlock:true},advanced_data_protection_metrics:{isBlock:true},detailed_status_code_metrics:{isBlock:true},prefix_level:{isBlock:true,storage_metrics:{isBlock:true,selection_criteria:{isBlock:true}}}},detailed_status_code_metrics:{isBlock:true}},aws_org:{isBlock:true},data_export:{isBlock:true,cloud_watch_metrics:{isBlock:true},s3_bucket_destination:{isBlock:true,encryption:{isBlock:true,sse_kms:{isBlock:true},sse_s3:{isBlock:true}}}},exclude:{isBlock:true},include:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_s3control_storage_lens_configuration", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get config_id(): string {
    return `${this.resourceType}.${this.resourceName}.config_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
