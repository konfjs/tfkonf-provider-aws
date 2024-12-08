import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCodecommitRepositoryArgs {
  repository_name: string;
}

export class data_aws_codecommit_repository extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsCodecommitRepositoryArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_codecommit_repository", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get clone_url_http(): string {
    return `data.${this.resourceType}.${this.resourceName}.clone_url_http`;
  }

  get clone_url_ssh(): string {
    return `data.${this.resourceType}.${this.resourceName}.clone_url_ssh`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get repository_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.repository_id`;
  }

  get repository_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.repository_name`;
  }
}
