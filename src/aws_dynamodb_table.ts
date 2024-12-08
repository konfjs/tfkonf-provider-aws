import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDynamodbTableArgsAttribute {
  name: string;
  type: string;
}

export interface AwsDynamodbTableArgsGlobalSecondaryIndexOnDemandThroughput {
}

export interface AwsDynamodbTableArgsGlobalSecondaryIndex {
  hash_key: string;
  name: string;
  non_key_attributes?: string[];
  projection_type: string;
  range_key?: string;
  on_demand_throughput?: AwsDynamodbTableArgsGlobalSecondaryIndexOnDemandThroughput;
}

export interface AwsDynamodbTableArgsImportTableInputFormatOptionsCsv {
  delimiter?: string;
  header_list?: string[];
}

export interface AwsDynamodbTableArgsImportTableInputFormatOptions {
  csv?: AwsDynamodbTableArgsImportTableInputFormatOptionsCsv;
}

export interface AwsDynamodbTableArgsImportTableS3BucketSource {
  bucket: string;
  bucket_owner?: string;
  key_prefix?: string;
}

export interface AwsDynamodbTableArgsImportTable {
  input_compression_type?: string;
  input_format: string;
  input_format_options?: AwsDynamodbTableArgsImportTableInputFormatOptions;
  s3_bucket_source: AwsDynamodbTableArgsImportTableS3BucketSource;
}

export interface AwsDynamodbTableArgsLocalSecondaryIndex {
  name: string;
  non_key_attributes?: string[];
  projection_type: string;
  range_key: string;
}

export interface AwsDynamodbTableArgsOnDemandThroughput {
}

export interface AwsDynamodbTableArgsPointInTimeRecovery {
  enabled: boolean;
}

export interface AwsDynamodbTableArgsReplica {
  point_in_time_recovery?: boolean;
  propagate_tags?: boolean;
  region_name: string;
}

export interface AwsDynamodbTableArgsServerSideEncryption {
  enabled: boolean;
}

export interface AwsDynamodbTableArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDynamodbTableArgsTtl {
  attribute_name?: string;
  enabled?: boolean;
}

export interface AwsDynamodbTableArgs {
  billing_mode?: string;
  deletion_protection_enabled?: boolean;
  name: string;
  range_key?: string;
  restore_date_time?: string;
  restore_source_name?: string;
  restore_source_table_arn?: string;
  restore_to_latest_time?: boolean;
  stream_enabled?: boolean;
  table_class?: string;
  tags?: { [key: string]: string };
  attribute?: AwsDynamodbTableArgsAttribute[];
  global_secondary_index?: AwsDynamodbTableArgsGlobalSecondaryIndex[];
  import_table?: AwsDynamodbTableArgsImportTable;
  local_secondary_index?: AwsDynamodbTableArgsLocalSecondaryIndex[];
  on_demand_throughput?: AwsDynamodbTableArgsOnDemandThroughput;
  point_in_time_recovery?: AwsDynamodbTableArgsPointInTimeRecovery;
  replica?: AwsDynamodbTableArgsReplica[];
  server_side_encryption?: AwsDynamodbTableArgsServerSideEncryption;
  timeouts?: AwsDynamodbTableArgsTimeouts;
  ttl?: AwsDynamodbTableArgsTtl;
}

export class aws_dynamodb_table extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDynamodbTableArgs) {
    const meta = {attribute:{isBlock:true},global_secondary_index:{isBlock:true,on_demand_throughput:{isBlock:true}},import_table:{isBlock:true,input_format_options:{isBlock:true,csv:{isBlock:true}},s3_bucket_source:{isBlock:true}},local_secondary_index:{isBlock:true},on_demand_throughput:{isBlock:true},point_in_time_recovery:{isBlock:true},replica:{isBlock:true},server_side_encryption:{isBlock:true},timeouts:{isBlock:true},ttl:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_dynamodb_table", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get hash_key(): string {
    return `${this.resourceType}.${this.resourceName}.hash_key`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get read_capacity(): string {
    return `${this.resourceType}.${this.resourceName}.read_capacity`;
  }

  get stream_arn(): string {
    return `${this.resourceType}.${this.resourceName}.stream_arn`;
  }

  get stream_label(): string {
    return `${this.resourceType}.${this.resourceName}.stream_label`;
  }

  get stream_view_type(): string {
    return `${this.resourceType}.${this.resourceName}.stream_view_type`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get write_capacity(): string {
    return `${this.resourceType}.${this.resourceName}.write_capacity`;
  }
}
