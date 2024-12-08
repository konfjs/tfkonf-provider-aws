import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsBedrockFoundationModelArgs {
  model_id: string;
}

export class data_aws_bedrock_foundation_model extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsBedrockFoundationModelArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_bedrock_foundation_model", resourceName);
  }

  get customizations_supported(): string {
    return `data.${this.resourceType}.${this.resourceName}.customizations_supported`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get inference_types_supported(): string {
    return `data.${this.resourceType}.${this.resourceName}.inference_types_supported`;
  }

  get input_modalities(): string {
    return `data.${this.resourceType}.${this.resourceName}.input_modalities`;
  }

  get model_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.model_arn`;
  }

  get model_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.model_id`;
  }

  get model_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.model_name`;
  }

  get output_modalities(): string {
    return `data.${this.resourceType}.${this.resourceName}.output_modalities`;
  }

  get provider_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.provider_name`;
  }

  get response_streaming_supported(): string {
    return `data.${this.resourceType}.${this.resourceName}.response_streaming_supported`;
  }
}
