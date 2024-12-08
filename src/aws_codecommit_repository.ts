import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodecommitRepositoryArgs {
  default_branch?: string;
  description?: string;
  repository_name: string;
  tags?: { [key: string]: string };
}

export class aws_codecommit_repository extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCodecommitRepositoryArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_codecommit_repository", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get clone_url_http(): string {
    return `${this.resourceType}.${this.resourceName}.clone_url_http`;
  }

  get clone_url_ssh(): string {
    return `${this.resourceType}.${this.resourceName}.clone_url_ssh`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get repository_id(): string {
    return `${this.resourceType}.${this.resourceName}.repository_id`;
  }

  get repository_name(): string {
    return `${this.resourceType}.${this.resourceName}.repository_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
