import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodebuildWebhookArgsFilterGroupFilter {
  exclude_matched_pattern?: boolean;
  pattern: string;
  type: string;
}

export interface AwsCodebuildWebhookArgsFilterGroup {
  filter?: AwsCodebuildWebhookArgsFilterGroupFilter[];
}

export interface AwsCodebuildWebhookArgsScopeConfiguration {
  domain?: string;
  name: string;
  scope: string;
}

export interface AwsCodebuildWebhookArgs {
  branch_filter?: string;
  build_type?: string;
  project_name: string;
  filter_group?: AwsCodebuildWebhookArgsFilterGroup[];
  scope_configuration?: AwsCodebuildWebhookArgsScopeConfiguration;
}

export class aws_codebuild_webhook extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCodebuildWebhookArgs) {
    const meta = {filter_group:{isBlock:true,filter:{isBlock:true}},scope_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_codebuild_webhook", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get payload_url(): string {
    return `${this.resourceType}.${this.resourceName}.payload_url`;
  }

  get project_name(): string {
    return `${this.resourceType}.${this.resourceName}.project_name`;
  }

  get secret(): string {
    return `${this.resourceType}.${this.resourceName}.secret`;
  }

  get url(): string {
    return `${this.resourceType}.${this.resourceName}.url`;
  }
}
