import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKendraQuerySuggestionsBlockListArgsSourceS3Path {
  bucket: string;
  key: string;
}

export interface AwsKendraQuerySuggestionsBlockListArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsKendraQuerySuggestionsBlockListArgs {
  description?: string;
  index_id: string;
  name: string;
  role_arn: string;
  tags?: { [key: string]: string };
  source_s3_path: AwsKendraQuerySuggestionsBlockListArgsSourceS3Path;
  timeouts?: AwsKendraQuerySuggestionsBlockListArgsTimeouts;
}

export class aws_kendra_query_suggestions_block_list extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsKendraQuerySuggestionsBlockListArgs) {
    const meta = {source_s3_path:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_kendra_query_suggestions_block_list", resourceName);
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

  get query_suggestions_block_list_id(): string {
    return `${this.resourceType}.${this.resourceName}.query_suggestions_block_list_id`;
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
}
