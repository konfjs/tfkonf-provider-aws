import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDmsS3EndpointArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsDmsS3EndpointArgs {
  add_column_name?: boolean;
  add_trailing_padding_character?: boolean;
  bucket_folder?: string;
  bucket_name: string;
  canned_acl_for_objects?: string;
  cdc_inserts_and_updates?: boolean;
  cdc_inserts_only?: boolean;
  cdc_max_batch_interval?: number;
  cdc_min_file_size?: number;
  cdc_path?: string;
  compression_type?: string;
  csv_delimiter?: string;
  csv_no_sup_value?: string;
  csv_null_value?: string;
  csv_row_delimiter?: string;
  data_format?: string;
  data_page_size?: number;
  date_partition_delimiter?: string;
  date_partition_enabled?: boolean;
  date_partition_sequence?: string;
  date_partition_timezone?: string;
  detach_target_on_lob_lookup_failure_parquet?: boolean;
  dict_page_size_limit?: number;
  enable_statistics?: boolean;
  encoding_type?: string;
  encryption_mode?: string;
  endpoint_id: string;
  endpoint_type: string;
  expected_bucket_owner?: string;
  external_table_definition?: string;
  glue_catalog_generation?: boolean;
  ignore_header_rows?: number;
  include_op_for_full_load?: boolean;
  max_file_size?: number;
  parquet_timestamp_in_millisecond?: boolean;
  parquet_version?: string;
  preserve_transactions?: boolean;
  rfc_4180?: boolean;
  row_group_length?: number;
  server_side_encryption_kms_key_id?: string;
  service_access_role_arn: string;
  tags?: { [key: string]: string };
  timestamp_column_name?: string;
  use_csv_no_sup_value?: boolean;
  use_task_start_time_for_full_load_timestamp?: boolean;
  timeouts?: AwsDmsS3EndpointArgsTimeouts;
}

export class aws_dms_s3_endpoint extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDmsS3EndpointArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_dms_s3_endpoint", resourceName);
  }

  get bucket_name(): string {
    return `${this.resourceType}.${this.resourceName}.bucket_name`;
  }

  get certificate_arn(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_arn`;
  }

  get endpoint_arn(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_arn`;
  }

  get endpoint_id(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_id`;
  }

  get endpoint_type(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_type`;
  }

  get engine_display_name(): string {
    return `${this.resourceType}.${this.resourceName}.engine_display_name`;
  }

  get external_id(): string {
    return `${this.resourceType}.${this.resourceName}.external_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_arn(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_arn`;
  }

  get service_access_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.service_access_role_arn`;
  }

  get ssl_mode(): string {
    return `${this.resourceType}.${this.resourceName}.ssl_mode`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
