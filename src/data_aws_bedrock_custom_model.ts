import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsBedrockCustomModelArgs {
  model_id: string;
}

export class data_aws_bedrock_custom_model extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsBedrockCustomModelArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_bedrock_custom_model", resourceName);
  }

  get base_model_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.base_model_arn`;
  }

  get creation_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get hyperparameters(): string {
    return `data.${this.resourceType}.${this.resourceName}.hyperparameters`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get job_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.job_arn`;
  }

  get job_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.job_name`;
  }

  get job_tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.job_tags`;
  }

  get model_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.model_arn`;
  }

  get model_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.model_id`;
  }

  get model_kms_key_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.model_kms_key_arn`;
  }

  get model_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.model_name`;
  }

  get model_tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.model_tags`;
  }

  get output_data_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.output_data_config`;
  }

  get training_data_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.training_data_config`;
  }

  get training_metrics(): string {
    return `data.${this.resourceType}.${this.resourceName}.training_metrics`;
  }

  get validation_data_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.validation_data_config`;
  }

  get validation_metrics(): string {
    return `data.${this.resourceType}.${this.resourceName}.validation_metrics`;
  }
}
