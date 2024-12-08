import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsS3ObjectArgs {
  bucket: string;
  checksum_mode?: string;
  key: string;
  range?: string;
}

export class data_aws_s3_object extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsS3ObjectArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_s3_object", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get body(): string {
    return `data.${this.resourceType}.${this.resourceName}.body`;
  }

  get bucket(): string {
    return `data.${this.resourceType}.${this.resourceName}.bucket`;
  }

  get bucket_key_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.bucket_key_enabled`;
  }

  get cache_control(): string {
    return `data.${this.resourceType}.${this.resourceName}.cache_control`;
  }

  get checksum_crc32(): string {
    return `data.${this.resourceType}.${this.resourceName}.checksum_crc32`;
  }

  get checksum_crc32c(): string {
    return `data.${this.resourceType}.${this.resourceName}.checksum_crc32c`;
  }

  get checksum_sha1(): string {
    return `data.${this.resourceType}.${this.resourceName}.checksum_sha1`;
  }

  get checksum_sha256(): string {
    return `data.${this.resourceType}.${this.resourceName}.checksum_sha256`;
  }

  get content_disposition(): string {
    return `data.${this.resourceType}.${this.resourceName}.content_disposition`;
  }

  get content_encoding(): string {
    return `data.${this.resourceType}.${this.resourceName}.content_encoding`;
  }

  get content_language(): string {
    return `data.${this.resourceType}.${this.resourceName}.content_language`;
  }

  get content_length(): string {
    return `data.${this.resourceType}.${this.resourceName}.content_length`;
  }

  get content_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.content_type`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get expiration(): string {
    return `data.${this.resourceType}.${this.resourceName}.expiration`;
  }

  get expires(): string {
    return `data.${this.resourceType}.${this.resourceName}.expires`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get key(): string {
    return `data.${this.resourceType}.${this.resourceName}.key`;
  }

  get last_modified(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_modified`;
  }

  get metadata(): string {
    return `data.${this.resourceType}.${this.resourceName}.metadata`;
  }

  get object_lock_legal_hold_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.object_lock_legal_hold_status`;
  }

  get object_lock_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.object_lock_mode`;
  }

  get object_lock_retain_until_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.object_lock_retain_until_date`;
  }

  get server_side_encryption(): string {
    return `data.${this.resourceType}.${this.resourceName}.server_side_encryption`;
  }

  get sse_kms_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.sse_kms_key_id`;
  }

  get storage_class(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_class`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get version_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.version_id`;
  }

  get website_redirect_location(): string {
    return `data.${this.resourceType}.${this.resourceName}.website_redirect_location`;
  }
}
