import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsBedrockInferenceProfileArgs {
  inference_profile_id: string;
}

export class data_aws_bedrock_inference_profile extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsBedrockInferenceProfileArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_bedrock_inference_profile", resourceName);
  }

  get created_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_at`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get inference_profile_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.inference_profile_arn`;
  }

  get inference_profile_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.inference_profile_id`;
  }

  get inference_profile_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.inference_profile_name`;
  }

  get models(): string {
    return `data.${this.resourceType}.${this.resourceName}.models`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }

  get updated_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.updated_at`;
  }
}
