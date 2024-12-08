import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBedrockCustomModelArgsOutputDataConfig {
  s3_uri: string;
}

export interface AwsBedrockCustomModelArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsBedrockCustomModelArgsTrainingDataConfig {
  s3_uri: string;
}

export interface AwsBedrockCustomModelArgsValidationDataConfigValidator {
  s3_uri: string;
}

export interface AwsBedrockCustomModelArgsValidationDataConfig {
  validator?: AwsBedrockCustomModelArgsValidationDataConfigValidator[];
}

export interface AwsBedrockCustomModelArgsVpcConfig {
  security_group_ids: string[];
  subnet_ids: string[];
}

export interface AwsBedrockCustomModelArgs {
  base_model_identifier: string;
  custom_model_kms_key_id?: string;
  custom_model_name: string;
  hyperparameters: { [key: string]: string };
  job_name: string;
  role_arn: string;
  tags?: { [key: string]: string };
  output_data_config?: AwsBedrockCustomModelArgsOutputDataConfig[];
  timeouts?: AwsBedrockCustomModelArgsTimeouts;
  training_data_config?: AwsBedrockCustomModelArgsTrainingDataConfig[];
  validation_data_config?: AwsBedrockCustomModelArgsValidationDataConfig[];
  vpc_config?: AwsBedrockCustomModelArgsVpcConfig[];
}

export class aws_bedrock_custom_model extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsBedrockCustomModelArgs) {
    const meta = {output_data_config:{isBlock:true},timeouts:{isBlock:true},training_data_config:{isBlock:true},validation_data_config:{isBlock:true,validator:{isBlock:true}},vpc_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_bedrock_custom_model", resourceName);
  }

  get base_model_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.base_model_identifier`;
  }

  get custom_model_arn(): string {
    return `${this.resourceType}.${this.resourceName}.custom_model_arn`;
  }

  get custom_model_name(): string {
    return `${this.resourceType}.${this.resourceName}.custom_model_name`;
  }

  get customization_type(): string {
    return `${this.resourceType}.${this.resourceName}.customization_type`;
  }

  get hyperparameters(): string {
    return `${this.resourceType}.${this.resourceName}.hyperparameters`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get job_arn(): string {
    return `${this.resourceType}.${this.resourceName}.job_arn`;
  }

  get job_name(): string {
    return `${this.resourceType}.${this.resourceName}.job_name`;
  }

  get job_status(): string {
    return `${this.resourceType}.${this.resourceName}.job_status`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get training_metrics(): string {
    return `${this.resourceType}.${this.resourceName}.training_metrics`;
  }

  get validation_metrics(): string {
    return `${this.resourceType}.${this.resourceName}.validation_metrics`;
  }
}
