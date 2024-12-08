import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKendraFaqArgsS3Path {
  bucket: string;
  key: string;
}

export interface AwsKendraFaqArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsKendraFaqArgs {
  description?: string;
  file_format?: string;
  index_id: string;
  name: string;
  role_arn: string;
  tags?: { [key: string]: string };
  s3_path: AwsKendraFaqArgsS3Path;
  timeouts?: AwsKendraFaqArgsTimeouts;
}

export class aws_kendra_faq extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsKendraFaqArgs) {
    const meta = {s3_path:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_kendra_faq", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get error_message(): string {
    return `${this.resourceType}.${this.resourceName}.error_message`;
  }

  get faq_id(): string {
    return `${this.resourceType}.${this.resourceName}.faq_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get index_id(): string {
    return `${this.resourceType}.${this.resourceName}.index_id`;
  }

  get language_code(): string {
    return `${this.resourceType}.${this.resourceName}.language_code`;
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

  get updated_at(): string {
    return `${this.resourceType}.${this.resourceName}.updated_at`;
  }
}
