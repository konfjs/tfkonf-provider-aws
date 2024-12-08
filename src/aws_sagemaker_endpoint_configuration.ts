import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerEndpointConfigurationArgsAsyncInferenceConfigClientConfig {
  max_concurrent_invocations_per_instance?: number;
}

export interface AwsSagemakerEndpointConfigurationArgsAsyncInferenceConfigOutputConfigNotificationConfig {
  error_topic?: string;
  include_inference_response_in?: string[];
  success_topic?: string;
}

export interface AwsSagemakerEndpointConfigurationArgsAsyncInferenceConfigOutputConfig {
  kms_key_id?: string;
  s3_failure_path?: string;
  s3_output_path: string;
  notification_config?: AwsSagemakerEndpointConfigurationArgsAsyncInferenceConfigOutputConfigNotificationConfig;
}

export interface AwsSagemakerEndpointConfigurationArgsAsyncInferenceConfig {
  client_config?: AwsSagemakerEndpointConfigurationArgsAsyncInferenceConfigClientConfig;
  output_config: AwsSagemakerEndpointConfigurationArgsAsyncInferenceConfigOutputConfig;
}

export interface AwsSagemakerEndpointConfigurationArgsDataCaptureConfigCaptureContentTypeHeader {
  csv_content_types?: string[];
  json_content_types?: string[];
}

export interface AwsSagemakerEndpointConfigurationArgsDataCaptureConfigCaptureOptions {
  capture_mode: string;
}

export interface AwsSagemakerEndpointConfigurationArgsDataCaptureConfig {
  destination_s3_uri: string;
  enable_capture?: boolean;
  initial_sampling_percentage: number;
  kms_key_id?: string;
  capture_content_type_header?: AwsSagemakerEndpointConfigurationArgsDataCaptureConfigCaptureContentTypeHeader;
  capture_options: AwsSagemakerEndpointConfigurationArgsDataCaptureConfigCaptureOptions[];
}

export interface AwsSagemakerEndpointConfigurationArgsProductionVariantsCoreDumpConfig {
  destination_s3_uri: string;
  kms_key_id?: string;
}

export interface AwsSagemakerEndpointConfigurationArgsProductionVariantsManagedInstanceScaling {
  max_instance_count?: number;
  min_instance_count?: number;
  status?: string;
}

export interface AwsSagemakerEndpointConfigurationArgsProductionVariantsRoutingConfig {
  routing_strategy: string;
}

export interface AwsSagemakerEndpointConfigurationArgsProductionVariantsServerlessConfig {
  max_concurrency: number;
  memory_size_in_mb: number;
  provisioned_concurrency?: number;
}

export interface AwsSagemakerEndpointConfigurationArgsProductionVariants {
  accelerator_type?: string;
  container_startup_health_check_timeout_in_seconds?: number;
  enable_ssm_access?: boolean;
  inference_ami_version?: string;
  initial_instance_count?: number;
  initial_variant_weight?: number;
  instance_type?: string;
  model_data_download_timeout_in_seconds?: number;
  model_name: string;
  core_dump_config?: AwsSagemakerEndpointConfigurationArgsProductionVariantsCoreDumpConfig;
  managed_instance_scaling?: AwsSagemakerEndpointConfigurationArgsProductionVariantsManagedInstanceScaling;
  routing_config?: AwsSagemakerEndpointConfigurationArgsProductionVariantsRoutingConfig[];
  serverless_config?: AwsSagemakerEndpointConfigurationArgsProductionVariantsServerlessConfig;
}

export interface AwsSagemakerEndpointConfigurationArgsShadowProductionVariantsCoreDumpConfig {
  destination_s3_uri: string;
  kms_key_id: string;
}

export interface AwsSagemakerEndpointConfigurationArgsShadowProductionVariantsManagedInstanceScaling {
  max_instance_count?: number;
  min_instance_count?: number;
  status?: string;
}

export interface AwsSagemakerEndpointConfigurationArgsShadowProductionVariantsRoutingConfig {
  routing_strategy: string;
}

export interface AwsSagemakerEndpointConfigurationArgsShadowProductionVariantsServerlessConfig {
  max_concurrency: number;
  memory_size_in_mb: number;
  provisioned_concurrency?: number;
}

export interface AwsSagemakerEndpointConfigurationArgsShadowProductionVariants {
  accelerator_type?: string;
  container_startup_health_check_timeout_in_seconds?: number;
  enable_ssm_access?: boolean;
  inference_ami_version?: string;
  initial_instance_count?: number;
  initial_variant_weight?: number;
  instance_type?: string;
  model_data_download_timeout_in_seconds?: number;
  model_name: string;
  volume_size_in_gb?: number;
  core_dump_config?: AwsSagemakerEndpointConfigurationArgsShadowProductionVariantsCoreDumpConfig;
  managed_instance_scaling?: AwsSagemakerEndpointConfigurationArgsShadowProductionVariantsManagedInstanceScaling;
  routing_config?: AwsSagemakerEndpointConfigurationArgsShadowProductionVariantsRoutingConfig[];
  serverless_config?: AwsSagemakerEndpointConfigurationArgsShadowProductionVariantsServerlessConfig;
}

export interface AwsSagemakerEndpointConfigurationArgs {
  kms_key_arn?: string;
  tags?: { [key: string]: string };
  async_inference_config?: AwsSagemakerEndpointConfigurationArgsAsyncInferenceConfig;
  data_capture_config?: AwsSagemakerEndpointConfigurationArgsDataCaptureConfig;
  production_variants: AwsSagemakerEndpointConfigurationArgsProductionVariants[];
  shadow_production_variants?: AwsSagemakerEndpointConfigurationArgsShadowProductionVariants[];
}

export class aws_sagemaker_endpoint_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSagemakerEndpointConfigurationArgs) {
    const meta = {async_inference_config:{isBlock:true,client_config:{isBlock:true},output_config:{isBlock:true,notification_config:{isBlock:true}}},data_capture_config:{isBlock:true,capture_content_type_header:{isBlock:true},capture_options:{isBlock:true}},production_variants:{isBlock:true,core_dump_config:{isBlock:true},managed_instance_scaling:{isBlock:true},routing_config:{isBlock:true},serverless_config:{isBlock:true}},shadow_production_variants:{isBlock:true,core_dump_config:{isBlock:true},managed_instance_scaling:{isBlock:true},routing_config:{isBlock:true},serverless_config:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_endpoint_configuration", resourceName);
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

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
