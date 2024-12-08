import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsTranscribeLanguageModelArgsInputDataConfig {
  data_access_role_arn: string;
  s3_uri: string;
}

export interface AwsTranscribeLanguageModelArgsTimeouts {
  create?: string;
}

export interface AwsTranscribeLanguageModelArgs {
  base_model_name: string;
  language_code: string;
  model_name: string;
  tags?: { [key: string]: string };
  input_data_config: AwsTranscribeLanguageModelArgsInputDataConfig;
  timeouts?: AwsTranscribeLanguageModelArgsTimeouts;
}

export class aws_transcribe_language_model extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsTranscribeLanguageModelArgs) {
    const meta = {input_data_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_transcribe_language_model", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get base_model_name(): string {
    return `${this.resourceType}.${this.resourceName}.base_model_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get language_code(): string {
    return `${this.resourceType}.${this.resourceName}.language_code`;
  }

  get model_name(): string {
    return `${this.resourceType}.${this.resourceName}.model_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
