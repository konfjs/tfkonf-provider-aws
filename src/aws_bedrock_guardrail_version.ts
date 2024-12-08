import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBedrockGuardrailVersionArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsBedrockGuardrailVersionArgs {
  description?: string;
  guardrail_arn: string;
  skip_destroy?: boolean;
  timeouts?: AwsBedrockGuardrailVersionArgsTimeouts;
}

export class aws_bedrock_guardrail_version extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsBedrockGuardrailVersionArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_bedrock_guardrail_version", resourceName);
  }

  get guardrail_arn(): string {
    return `${this.resourceType}.${this.resourceName}.guardrail_arn`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
