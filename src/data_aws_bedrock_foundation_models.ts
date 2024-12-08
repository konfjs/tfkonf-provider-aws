import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsBedrockFoundationModelsArgs {
  by_customization_type?: string;
  by_inference_type?: string;
  by_output_modality?: string;
  by_provider?: string;
}

export class data_aws_bedrock_foundation_models extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsBedrockFoundationModelsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_bedrock_foundation_models", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get model_summaries(): string {
    return `data.${this.resourceType}.${this.resourceName}.model_summaries`;
  }
}
