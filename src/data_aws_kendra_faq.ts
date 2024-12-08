import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsKendraFaqArgs {
  faq_id: string;
  index_id: string;
}

export class data_aws_kendra_faq extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsKendraFaqArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_kendra_faq", resourceName);
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

  get faq_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.faq_id`;
  }

  get file_format(): string {
    return `data.${this.resourceType}.${this.resourceName}.file_format`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get index_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.index_id`;
  }

  get language_code(): string {
    return `data.${this.resourceType}.${this.resourceName}.language_code`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get s3_path(): string {
    return `data.${this.resourceType}.${this.resourceName}.s3_path`;
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
