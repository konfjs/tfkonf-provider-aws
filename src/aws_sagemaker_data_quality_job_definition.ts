import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityAppSpecification {
  environment?: { [key: string]: string };
  image_uri: string;
  post_analytics_processor_source_uri?: string;
  record_preprocessor_source_uri?: string;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityBaselineConfigConstraintsResource {
  s3_uri?: string;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityBaselineConfigStatisticsResource {
  s3_uri?: string;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityBaselineConfig {
  constraints_resource?: AwsSagemakerDataQualityJobDefinitionArgsDataQualityBaselineConfigConstraintsResource;
  statistics_resource?: AwsSagemakerDataQualityJobDefinitionArgsDataQualityBaselineConfigStatisticsResource;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInputBatchTransformInputDatasetFormatCsv {
  header?: boolean;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInputBatchTransformInputDatasetFormatJson {
  line?: boolean;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInputBatchTransformInputDatasetFormat {
  csv?: AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInputBatchTransformInputDatasetFormatCsv;
  json?: AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInputBatchTransformInputDatasetFormatJson;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInputBatchTransformInput {
  data_captured_destination_s3_uri: string;
  local_path?: string;
  dataset_format: AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInputBatchTransformInputDatasetFormat;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInputEndpointInput {
  endpoint_name: string;
  local_path?: string;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInput {
  batch_transform_input?: AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInputBatchTransformInput;
  endpoint_input?: AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInputEndpointInput;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobOutputConfigMonitoringOutputsS3Output {
  local_path?: string;
  s3_uri: string;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobOutputConfigMonitoringOutputs {
  s3_output: AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobOutputConfigMonitoringOutputsS3Output;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobOutputConfig {
  kms_key_id?: string;
  monitoring_outputs: AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobOutputConfigMonitoringOutputs;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsJobResourcesClusterConfig {
  instance_count: number;
  instance_type: string;
  volume_kms_key_id?: string;
  volume_size_in_gb: number;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsJobResources {
  cluster_config: AwsSagemakerDataQualityJobDefinitionArgsJobResourcesClusterConfig;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsNetworkConfigVpcConfig {
  security_group_ids: string[];
  subnets: string[];
}

export interface AwsSagemakerDataQualityJobDefinitionArgsNetworkConfig {
  enable_inter_container_traffic_encryption?: boolean;
  enable_network_isolation?: boolean;
  vpc_config?: AwsSagemakerDataQualityJobDefinitionArgsNetworkConfigVpcConfig;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsStoppingCondition {
}

export interface AwsSagemakerDataQualityJobDefinitionArgs {
  role_arn: string;
  tags?: { [key: string]: string };
  data_quality_app_specification: AwsSagemakerDataQualityJobDefinitionArgsDataQualityAppSpecification;
  data_quality_baseline_config?: AwsSagemakerDataQualityJobDefinitionArgsDataQualityBaselineConfig;
  data_quality_job_input: AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInput;
  data_quality_job_output_config: AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobOutputConfig;
  job_resources: AwsSagemakerDataQualityJobDefinitionArgsJobResources;
  network_config?: AwsSagemakerDataQualityJobDefinitionArgsNetworkConfig;
  stopping_condition?: AwsSagemakerDataQualityJobDefinitionArgsStoppingCondition;
}

export class aws_sagemaker_data_quality_job_definition extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSagemakerDataQualityJobDefinitionArgs) {
    const meta = {data_quality_app_specification:{isBlock:true},data_quality_baseline_config:{isBlock:true,constraints_resource:{isBlock:true},statistics_resource:{isBlock:true}},data_quality_job_input:{isBlock:true,batch_transform_input:{isBlock:true,dataset_format:{isBlock:true,csv:{isBlock:true},json:{isBlock:true}}},endpoint_input:{isBlock:true}},data_quality_job_output_config:{isBlock:true,monitoring_outputs:{isBlock:true,s3_output:{isBlock:true}}},job_resources:{isBlock:true,cluster_config:{isBlock:true}},network_config:{isBlock:true,vpc_config:{isBlock:true}},stopping_condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_data_quality_job_definition", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
