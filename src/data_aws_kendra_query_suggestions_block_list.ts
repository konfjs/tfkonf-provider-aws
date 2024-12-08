import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsKendraQuerySuggestionsBlockListArgs {
  index_id: string;
  query_suggestions_block_list_id: string;
}

export class data_aws_kendra_query_suggestions_block_list extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsKendraQuerySuggestionsBlockListArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_kendra_query_suggestions_block_list", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_at`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get error_message(): string {
    return `data.${this.resourceType}.${this.resourceName}.error_message`;
  }

  get file_size_bytes(): string {
    return `data.${this.resourceType}.${this.resourceName}.file_size_bytes`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get index_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.index_id`;
  }

  get item_count(): string {
    return `data.${this.resourceType}.${this.resourceName}.item_count`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get query_suggestions_block_list_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.query_suggestions_block_list_id`;
  }

  get role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get source_s3_path(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_s3_path`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get updated_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.updated_at`;
  }
}
