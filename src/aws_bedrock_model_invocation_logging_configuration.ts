import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBedrockModelInvocationLoggingConfigurationArgsLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config {
  bucket_name?: string;
  key_prefix?: string;
}

export interface AwsBedrockModelInvocationLoggingConfigurationArgsLoggingConfigCloudwatchConfig {
  log_group_name?: string;
  role_arn?: string;
  large_data_delivery_s3_config?: AwsBedrockModelInvocationLoggingConfigurationArgsLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config;
}

export interface AwsBedrockModelInvocationLoggingConfigurationArgsLoggingConfigS3Config {
  bucket_name?: string;
  key_prefix?: string;
}

export interface AwsBedrockModelInvocationLoggingConfigurationArgsLoggingConfig {
  embedding_data_delivery_enabled: boolean;
  image_data_delivery_enabled: boolean;
  text_data_delivery_enabled: boolean;
  cloudwatch_config?: AwsBedrockModelInvocationLoggingConfigurationArgsLoggingConfigCloudwatchConfig;
  s3_config?: AwsBedrockModelInvocationLoggingConfigurationArgsLoggingConfigS3Config;
}

export interface AwsBedrockModelInvocationLoggingConfigurationArgs {
  logging_config?: AwsBedrockModelInvocationLoggingConfigurationArgsLoggingConfig;
}

export class aws_bedrock_model_invocation_logging_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsBedrockModelInvocationLoggingConfigurationArgs) {
    const meta = {logging_config:{isBlock:true,cloudwatch_config:{isBlock:true,large_data_delivery_s3_config:{isBlock:true}},s3_config:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_bedrock_model_invocation_logging_configuration", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
