import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDynamodbTableExportArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsDynamodbTableExportArgs {
  export_format?: string;
  s3_bucket: string;
  s3_sse_kms_key_id?: string;
  table_arn: string;
  timeouts?: AwsDynamodbTableExportArgsTimeouts;
}

export class aws_dynamodb_table_export extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDynamodbTableExportArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_dynamodb_table_export", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get billed_size_in_bytes(): string {
    return `${this.resourceType}.${this.resourceName}.billed_size_in_bytes`;
  }

  get end_time(): string {
    return `${this.resourceType}.${this.resourceName}.end_time`;
  }

  get export_status(): string {
    return `${this.resourceType}.${this.resourceName}.export_status`;
  }

  get export_time(): string {
    return `${this.resourceType}.${this.resourceName}.export_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get item_count(): string {
    return `${this.resourceType}.${this.resourceName}.item_count`;
  }

  get manifest_files_s3_key(): string {
    return `${this.resourceType}.${this.resourceName}.manifest_files_s3_key`;
  }

  get s3_bucket(): string {
    return `${this.resourceType}.${this.resourceName}.s3_bucket`;
  }

  get s3_bucket_owner(): string {
    return `${this.resourceType}.${this.resourceName}.s3_bucket_owner`;
  }

  get s3_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.s3_prefix`;
  }

  get s3_sse_algorithm(): string {
    return `${this.resourceType}.${this.resourceName}.s3_sse_algorithm`;
  }

  get start_time(): string {
    return `${this.resourceType}.${this.resourceName}.start_time`;
  }

  get table_arn(): string {
    return `${this.resourceType}.${this.resourceName}.table_arn`;
  }
}
