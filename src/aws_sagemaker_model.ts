import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerModelArgsContainerImageConfigRepositoryAuthConfig {
  repository_credentials_provider_arn: string;
}

export interface AwsSagemakerModelArgsContainerImageConfig {
  repository_access_mode: string;
  repository_auth_config?: AwsSagemakerModelArgsContainerImageConfigRepositoryAuthConfig;
}

export interface AwsSagemakerModelArgsContainerModelDataSourceS3DataSourceModelAccessConfig {
  accept_eula: boolean;
}

export interface AwsSagemakerModelArgsContainerModelDataSourceS3DataSource {
  compression_type: string;
  s3_data_type: string;
  s3_uri: string;
  model_access_config?: AwsSagemakerModelArgsContainerModelDataSourceS3DataSourceModelAccessConfig;
}

export interface AwsSagemakerModelArgsContainerModelDataSource {
  s3_data_source: AwsSagemakerModelArgsContainerModelDataSourceS3DataSource[];
}

export interface AwsSagemakerModelArgsContainerMultiModelConfig {
  model_cache_setting?: string;
}

export interface AwsSagemakerModelArgsContainer {
  container_hostname?: string;
  environment?: { [key: string]: string };
  image?: string;
  inference_specification_name?: string;
  mode?: string;
  model_data_url?: string;
  model_package_name?: string;
  image_config?: AwsSagemakerModelArgsContainerImageConfig;
  model_data_source?: AwsSagemakerModelArgsContainerModelDataSource;
  multi_model_config?: AwsSagemakerModelArgsContainerMultiModelConfig;
}

export interface AwsSagemakerModelArgsInferenceExecutionConfig {
  mode: string;
}

export interface AwsSagemakerModelArgsPrimaryContainerImageConfigRepositoryAuthConfig {
  repository_credentials_provider_arn: string;
}

export interface AwsSagemakerModelArgsPrimaryContainerImageConfig {
  repository_access_mode: string;
  repository_auth_config?: AwsSagemakerModelArgsPrimaryContainerImageConfigRepositoryAuthConfig;
}

export interface AwsSagemakerModelArgsPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig {
  accept_eula: boolean;
}

export interface AwsSagemakerModelArgsPrimaryContainerModelDataSourceS3DataSource {
  compression_type: string;
  s3_data_type: string;
  s3_uri: string;
  model_access_config?: AwsSagemakerModelArgsPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig;
}

export interface AwsSagemakerModelArgsPrimaryContainerModelDataSource {
  s3_data_source: AwsSagemakerModelArgsPrimaryContainerModelDataSourceS3DataSource[];
}

export interface AwsSagemakerModelArgsPrimaryContainerMultiModelConfig {
  model_cache_setting?: string;
}

export interface AwsSagemakerModelArgsPrimaryContainer {
  container_hostname?: string;
  environment?: { [key: string]: string };
  image?: string;
  inference_specification_name?: string;
  mode?: string;
  model_data_url?: string;
  model_package_name?: string;
  image_config?: AwsSagemakerModelArgsPrimaryContainerImageConfig;
  model_data_source?: AwsSagemakerModelArgsPrimaryContainerModelDataSource;
  multi_model_config?: AwsSagemakerModelArgsPrimaryContainerMultiModelConfig;
}

export interface AwsSagemakerModelArgsVpcConfig {
  security_group_ids: string[];
  subnets: string[];
}

export interface AwsSagemakerModelArgs {
  enable_network_isolation?: boolean;
  execution_role_arn: string;
  tags?: { [key: string]: string };
  container?: AwsSagemakerModelArgsContainer[];
  inference_execution_config?: AwsSagemakerModelArgsInferenceExecutionConfig;
  primary_container?: AwsSagemakerModelArgsPrimaryContainer;
  vpc_config?: AwsSagemakerModelArgsVpcConfig;
}

export class aws_sagemaker_model extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSagemakerModelArgs) {
    const meta = {container:{isBlock:true,image_config:{isBlock:true,repository_auth_config:{isBlock:true}},model_data_source:{isBlock:true,s3_data_source:{isBlock:true,model_access_config:{isBlock:true}}},multi_model_config:{isBlock:true}},inference_execution_config:{isBlock:true},primary_container:{isBlock:true,image_config:{isBlock:true,repository_auth_config:{isBlock:true}},model_data_source:{isBlock:true,s3_data_source:{isBlock:true,model_access_config:{isBlock:true}}},multi_model_config:{isBlock:true}},vpc_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_model", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get execution_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.execution_role_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
