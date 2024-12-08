import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsBedrockCustomModelsArgs {
}

export class data_aws_bedrock_custom_models extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsBedrockCustomModelsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_bedrock_custom_models", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get model_summaries(): string {
    return `data.${this.resourceType}.${this.resourceName}.model_summaries`;
  }
}
