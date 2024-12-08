import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsBedrockInferenceProfilesArgs {
}

export class data_aws_bedrock_inference_profiles extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsBedrockInferenceProfilesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_bedrock_inference_profiles", resourceName);
  }

  get inference_profile_summaries(): string {
    return `data.${this.resourceType}.${this.resourceName}.inference_profile_summaries`;
  }
}
