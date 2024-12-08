import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation {
  bucket_arn: string;
  file_key: string;
  object_version?: string;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationApplicationCodeConfigurationCodeContent {
  text_content?: string;
  s3_content_location?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationApplicationCodeConfiguration {
  code_content_type: string;
  code_content?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationApplicationCodeConfigurationCodeContent;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationApplicationSnapshotConfiguration {
  snapshots_enabled: boolean;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationEnvironmentPropertiesPropertyGroup {
  property_group_id: string;
  property_map: { [key: string]: string };
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationEnvironmentProperties {
  property_group: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationEnvironmentPropertiesPropertyGroup[];
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration {
  configuration_type: string;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration {
  configuration_type: string;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration {
  configuration_type: string;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationFlinkApplicationConfiguration {
  checkpoint_configuration?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration;
  monitoring_configuration?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration;
  parallelism_configuration?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationRunConfigurationApplicationRestoreConfiguration {
  snapshot_name?: string;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationRunConfigurationFlinkRunConfiguration {
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationRunConfiguration {
  application_restore_configuration?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationRunConfigurationApplicationRestoreConfiguration;
  flink_run_configuration?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationRunConfigurationFlinkRunConfiguration;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputInputParallelism {
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor {
  resource_arn: string;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration {
  input_lambda_processor: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn {
  mapping?: string;
  name: string;
  sql_type: string;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters {
  record_column_delimiter: string;
  record_row_delimiter: string;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters {
  record_row_path: string;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters {
  csv_mapping_parameters?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters;
  json_mapping_parameters?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat {
  record_format_type: string;
  mapping_parameters: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputInputSchema {
  record_encoding?: string;
  record_column: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn[];
  record_format: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration {
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput {
  resource_arn: string;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput {
  resource_arn: string;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInput {
  name_prefix: string;
  input_parallelism?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputInputParallelism;
  input_processing_configuration?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration;
  input_schema: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputInputSchema;
  input_starting_position_configuration?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration[];
  kinesis_firehose_input?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput;
  kinesis_streams_input?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema {
  record_format_type: string;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput {
  resource_arn: string;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput {
  resource_arn: string;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput {
  resource_arn: string;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationOutput {
  name: string;
  destination_schema: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema;
  kinesis_firehose_output?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput;
  kinesis_streams_output?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput;
  lambda_output?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn {
  mapping?: string;
  name: string;
  sql_type: string;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters {
  record_column_delimiter: string;
  record_row_delimiter: string;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters {
  record_row_path: string;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters {
  csv_mapping_parameters?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters;
  json_mapping_parameters?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat {
  record_format_type: string;
  mapping_parameters: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema {
  record_encoding?: string;
  record_column: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn[];
  record_format: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource {
  bucket_arn: string;
  file_key: string;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationReferenceDataSource {
  table_name: string;
  reference_schema: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema;
  s3_reference_data_source: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfiguration {
  input?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationInput;
  output?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationOutput[];
  reference_data_source?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfigurationReferenceDataSource;
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationVpcConfiguration {
  security_group_ids: string[];
  subnet_ids: string[];
}

export interface AwsKinesisanalyticsv2ApplicationArgsApplicationConfiguration {
  application_code_configuration: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationApplicationCodeConfiguration;
  application_snapshot_configuration?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationApplicationSnapshotConfiguration;
  environment_properties?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationEnvironmentProperties;
  flink_application_configuration?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationFlinkApplicationConfiguration;
  run_configuration?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationRunConfiguration;
  sql_application_configuration?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationSqlApplicationConfiguration;
  vpc_configuration?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfigurationVpcConfiguration;
}

export interface AwsKinesisanalyticsv2ApplicationArgsCloudwatchLoggingOptions {
  log_stream_arn: string;
}

export interface AwsKinesisanalyticsv2ApplicationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsKinesisanalyticsv2ApplicationArgs {
  description?: string;
  force_stop?: boolean;
  name: string;
  runtime_environment: string;
  service_execution_role: string;
  start_application?: boolean;
  tags?: { [key: string]: string };
  application_configuration?: AwsKinesisanalyticsv2ApplicationArgsApplicationConfiguration;
  cloudwatch_logging_options?: AwsKinesisanalyticsv2ApplicationArgsCloudwatchLoggingOptions;
  timeouts?: AwsKinesisanalyticsv2ApplicationArgsTimeouts;
}

export class aws_kinesisanalyticsv2_application extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsKinesisanalyticsv2ApplicationArgs) {
    const meta = {application_configuration:{isBlock:true,application_code_configuration:{isBlock:true,code_content:{isBlock:true,s3_content_location:{isBlock:true}}},application_snapshot_configuration:{isBlock:true},environment_properties:{isBlock:true,property_group:{isBlock:true}},flink_application_configuration:{isBlock:true,checkpoint_configuration:{isBlock:true},monitoring_configuration:{isBlock:true},parallelism_configuration:{isBlock:true}},run_configuration:{isBlock:true,application_restore_configuration:{isBlock:true},flink_run_configuration:{isBlock:true}},sql_application_configuration:{isBlock:true,input:{isBlock:true,input_parallelism:{isBlock:true},input_processing_configuration:{isBlock:true,input_lambda_processor:{isBlock:true}},input_schema:{isBlock:true,record_column:{isBlock:true},record_format:{isBlock:true,mapping_parameters:{isBlock:true,csv_mapping_parameters:{isBlock:true},json_mapping_parameters:{isBlock:true}}}},input_starting_position_configuration:{isBlock:true},kinesis_firehose_input:{isBlock:true},kinesis_streams_input:{isBlock:true}},output:{isBlock:true,destination_schema:{isBlock:true},kinesis_firehose_output:{isBlock:true},kinesis_streams_output:{isBlock:true},lambda_output:{isBlock:true}},reference_data_source:{isBlock:true,reference_schema:{isBlock:true,record_column:{isBlock:true},record_format:{isBlock:true,mapping_parameters:{isBlock:true,csv_mapping_parameters:{isBlock:true},json_mapping_parameters:{isBlock:true}}}},s3_reference_data_source:{isBlock:true}}},vpc_configuration:{isBlock:true}},cloudwatch_logging_options:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_kinesisanalyticsv2_application", resourceName);
  }

  get application_mode(): string {
    return `${this.resourceType}.${this.resourceName}.application_mode`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get create_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.create_timestamp`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_update_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.last_update_timestamp`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get runtime_environment(): string {
    return `${this.resourceType}.${this.resourceName}.runtime_environment`;
  }

  get service_execution_role(): string {
    return `${this.resourceType}.${this.resourceName}.service_execution_role`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get version_id(): string {
    return `${this.resourceType}.${this.resourceName}.version_id`;
  }
}
