import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAmplifyAppArgsAutoBranchCreationConfig {
  basic_auth_credentials?: string;
  build_spec?: string;
  enable_auto_build?: boolean;
  enable_basic_auth?: boolean;
  enable_performance_mode?: boolean;
  enable_pull_request_preview?: boolean;
  environment_variables?: { [key: string]: string };
  framework?: string;
  pull_request_environment_name?: string;
  stage?: string;
}

export interface AwsAmplifyAppArgsCacheConfig {
  type: string;
}

export interface AwsAmplifyAppArgsCustomRule {
  condition?: string;
  source: string;
  status?: string;
  target: string;
}

export interface AwsAmplifyAppArgs {
  access_token?: string;
  auto_branch_creation_patterns?: string[];
  basic_auth_credentials?: string;
  description?: string;
  enable_auto_branch_creation?: boolean;
  enable_basic_auth?: boolean;
  enable_branch_auto_build?: boolean;
  enable_branch_auto_deletion?: boolean;
  environment_variables?: { [key: string]: string };
  iam_service_role_arn?: string;
  name: string;
  oauth_token?: string;
  platform?: string;
  repository?: string;
  tags?: { [key: string]: string };
  auto_branch_creation_config?: AwsAmplifyAppArgsAutoBranchCreationConfig;
  cache_config?: AwsAmplifyAppArgsCacheConfig;
  custom_rule?: AwsAmplifyAppArgsCustomRule[];
}

export class aws_amplify_app extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAmplifyAppArgs) {
    const meta = {auto_branch_creation_config:{isBlock:true},cache_config:{isBlock:true},custom_rule:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_amplify_app", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get build_spec(): string {
    return `${this.resourceType}.${this.resourceName}.build_spec`;
  }

  get custom_headers(): string {
    return `${this.resourceType}.${this.resourceName}.custom_headers`;
  }

  get default_domain(): string {
    return `${this.resourceType}.${this.resourceName}.default_domain`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get production_branch(): string {
    return `${this.resourceType}.${this.resourceName}.production_branch`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
