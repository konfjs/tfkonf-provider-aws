import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLambdaCodeSigningConfigArgsAllowedPublishers {
  signing_profile_version_arns: string[];
}

export interface AwsLambdaCodeSigningConfigArgsPolicies {
  untrusted_artifact_on_deployment: string;
}

export interface AwsLambdaCodeSigningConfigArgs {
  description?: string;
  tags?: { [key: string]: string };
  allowed_publishers: AwsLambdaCodeSigningConfigArgsAllowedPublishers;
  policies?: AwsLambdaCodeSigningConfigArgsPolicies;
}

export class aws_lambda_code_signing_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLambdaCodeSigningConfigArgs) {
    const meta = {allowed_publishers:{isBlock:true},policies:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lambda_code_signing_config", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get config_id(): string {
    return `${this.resourceType}.${this.resourceName}.config_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
