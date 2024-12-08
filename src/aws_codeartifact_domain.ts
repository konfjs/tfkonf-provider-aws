import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodeartifactDomainArgs {
  domain: string;
  tags?: { [key: string]: string };
}

export class aws_codeartifact_domain extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCodeartifactDomainArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_codeartifact_domain", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get asset_size_bytes(): string {
    return `${this.resourceType}.${this.resourceName}.asset_size_bytes`;
  }

  get created_time(): string {
    return `${this.resourceType}.${this.resourceName}.created_time`;
  }

  get domain(): string {
    return `${this.resourceType}.${this.resourceName}.domain`;
  }

  get encryption_key(): string {
    return `${this.resourceType}.${this.resourceName}.encryption_key`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owner(): string {
    return `${this.resourceType}.${this.resourceName}.owner`;
  }

  get repository_count(): string {
    return `${this.resourceType}.${this.resourceName}.repository_count`;
  }

  get s3_bucket_arn(): string {
    return `${this.resourceType}.${this.resourceName}.s3_bucket_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
