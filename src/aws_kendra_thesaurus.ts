import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKendraThesaurusArgsSourceS3Path {
  bucket: string;
  key: string;
}

export interface AwsKendraThesaurusArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsKendraThesaurusArgs {
  description?: string;
  index_id: string;
  name: string;
  role_arn: string;
  tags?: { [key: string]: string };
  source_s3_path: AwsKendraThesaurusArgsSourceS3Path;
  timeouts?: AwsKendraThesaurusArgsTimeouts;
}

export class aws_kendra_thesaurus extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsKendraThesaurusArgs) {
    const meta = {source_s3_path:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_kendra_thesaurus", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get index_id(): string {
    return `${this.resourceType}.${this.resourceName}.index_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get thesaurus_id(): string {
    return `${this.resourceType}.${this.resourceName}.thesaurus_id`;
  }
}
