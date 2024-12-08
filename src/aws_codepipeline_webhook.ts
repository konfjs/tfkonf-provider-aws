import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodepipelineWebhookArgsAuthenticationConfiguration {
  allowed_ip_range?: string;
  secret_token?: string;
}

export interface AwsCodepipelineWebhookArgsFilter {
  json_path: string;
  match_equals: string;
}

export interface AwsCodepipelineWebhookArgs {
  authentication: string;
  name: string;
  tags?: { [key: string]: string };
  target_action: string;
  target_pipeline: string;
  authentication_configuration?: AwsCodepipelineWebhookArgsAuthenticationConfiguration;
  filter: AwsCodepipelineWebhookArgsFilter[];
}

export class aws_codepipeline_webhook extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCodepipelineWebhookArgs) {
    const meta = {authentication_configuration:{isBlock:true},filter:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_codepipeline_webhook", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get authentication(): string {
    return `${this.resourceType}.${this.resourceName}.authentication`;
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

  get target_action(): string {
    return `${this.resourceType}.${this.resourceName}.target_action`;
  }

  get target_pipeline(): string {
    return `${this.resourceType}.${this.resourceName}.target_pipeline`;
  }

  get url(): string {
    return `${this.resourceType}.${this.resourceName}.url`;
  }
}
