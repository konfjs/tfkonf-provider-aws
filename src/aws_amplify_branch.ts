import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAmplifyBranchArgs {
  app_id: string;
  backend_environment_arn?: string;
  basic_auth_credentials?: string;
  branch_name: string;
  description?: string;
  enable_auto_build?: boolean;
  enable_basic_auth?: boolean;
  enable_notification?: boolean;
  enable_performance_mode?: boolean;
  enable_pull_request_preview?: boolean;
  environment_variables?: { [key: string]: string };
  framework?: string;
  pull_request_environment_name?: string;
  stage?: string;
  tags?: { [key: string]: string };
  ttl?: string;
}

export class aws_amplify_branch extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAmplifyBranchArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_amplify_branch", resourceName);
  }

  get app_id(): string {
    return `${this.resourceType}.${this.resourceName}.app_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get associated_resources(): string {
    return `${this.resourceType}.${this.resourceName}.associated_resources`;
  }

  get branch_name(): string {
    return `${this.resourceType}.${this.resourceName}.branch_name`;
  }

  get custom_domains(): string {
    return `${this.resourceType}.${this.resourceName}.custom_domains`;
  }

  get destination_branch(): string {
    return `${this.resourceType}.${this.resourceName}.destination_branch`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get source_branch(): string {
    return `${this.resourceType}.${this.resourceName}.source_branch`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
