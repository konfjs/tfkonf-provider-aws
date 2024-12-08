import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerCodeRepositoryArgsGitConfig {
  branch?: string;
  repository_url: string;
  secret_arn?: string;
}

export interface AwsSagemakerCodeRepositoryArgs {
  code_repository_name: string;
  tags?: { [key: string]: string };
  git_config: AwsSagemakerCodeRepositoryArgsGitConfig;
}

export class aws_sagemaker_code_repository extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSagemakerCodeRepositoryArgs) {
    const meta = {git_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_code_repository", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get code_repository_name(): string {
    return `${this.resourceType}.${this.resourceName}.code_repository_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
