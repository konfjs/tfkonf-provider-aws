import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsKendraThesaurusArgs {
  index_id: string;
  thesaurus_id: string;
}

export class data_aws_kendra_thesaurus extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsKendraThesaurusArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_kendra_thesaurus", resourceName);
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

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
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

  get synonym_rule_count(): string {
    return `data.${this.resourceType}.${this.resourceName}.synonym_rule_count`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get term_count(): string {
    return `data.${this.resourceType}.${this.resourceName}.term_count`;
  }

  get thesaurus_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.thesaurus_id`;
  }

  get updated_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.updated_at`;
  }
}
