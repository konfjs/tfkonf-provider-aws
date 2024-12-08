import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3ObjectCopyArgsGrant {
  email?: string;
  id?: string;
  permissions: string[];
  type: string;
  uri?: string;
}

export interface AwsS3ObjectCopyArgs {
  bucket: string;
  checksum_algorithm?: string;
  copy_if_match?: string;
  copy_if_modified_since?: string;
  copy_if_none_match?: string;
  copy_if_unmodified_since?: string;
  customer_key?: string;
  expected_bucket_owner?: string;
  expected_source_bucket_owner?: string;
  expires?: string;
  force_destroy?: boolean;
  key: string;
  metadata_directive?: string;
  request_payer?: string;
  source: string;
  source_customer_algorithm?: string;
  source_customer_key?: string;
  source_customer_key_md5?: string;
  tagging_directive?: string;
  tags?: { [key: string]: string };
  grant?: AwsS3ObjectCopyArgsGrant[];
}

export class aws_s3_object_copy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsS3ObjectCopyArgs) {
    const meta = {grant:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_s3_object_copy", resourceName);
  }

  get acl(): string {
    return `${this.resourceType}.${this.resourceName}.acl`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get bucket_key_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.bucket_key_enabled`;
  }

  get cache_control(): string {
    return `${this.resourceType}.${this.resourceName}.cache_control`;
  }

  get checksum_crc32(): string {
    return `${this.resourceType}.${this.resourceName}.checksum_crc32`;
  }

  get checksum_crc32c(): string {
    return `${this.resourceType}.${this.resourceName}.checksum_crc32c`;
  }

  get checksum_sha1(): string {
    return `${this.resourceType}.${this.resourceName}.checksum_sha1`;
  }

  get checksum_sha256(): string {
    return `${this.resourceType}.${this.resourceName}.checksum_sha256`;
  }

  get content_disposition(): string {
    return `${this.resourceType}.${this.resourceName}.content_disposition`;
  }

  get content_encoding(): string {
    return `${this.resourceType}.${this.resourceName}.content_encoding`;
  }

  get content_language(): string {
    return `${this.resourceType}.${this.resourceName}.content_language`;
  }

  get content_type(): string {
    return `${this.resourceType}.${this.resourceName}.content_type`;
  }

  get customer_algorithm(): string {
    return `${this.resourceType}.${this.resourceName}.customer_algorithm`;
  }

  get customer_key_md5(): string {
    return `${this.resourceType}.${this.resourceName}.customer_key_md5`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get expiration(): string {
    return `${this.resourceType}.${this.resourceName}.expiration`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key(): string {
    return `${this.resourceType}.${this.resourceName}.key`;
  }

  get kms_encryption_context(): string {
    return `${this.resourceType}.${this.resourceName}.kms_encryption_context`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get last_modified(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified`;
  }

  get metadata(): string {
    return `${this.resourceType}.${this.resourceName}.metadata`;
  }

  get object_lock_legal_hold_status(): string {
    return `${this.resourceType}.${this.resourceName}.object_lock_legal_hold_status`;
  }

  get object_lock_mode(): string {
    return `${this.resourceType}.${this.resourceName}.object_lock_mode`;
  }

  get object_lock_retain_until_date(): string {
    return `${this.resourceType}.${this.resourceName}.object_lock_retain_until_date`;
  }

  get request_charged(): string {
    return `${this.resourceType}.${this.resourceName}.request_charged`;
  }

  get server_side_encryption(): string {
    return `${this.resourceType}.${this.resourceName}.server_side_encryption`;
  }

  get source(): string {
    return `${this.resourceType}.${this.resourceName}.source`;
  }

  get source_version_id(): string {
    return `${this.resourceType}.${this.resourceName}.source_version_id`;
  }

  get storage_class(): string {
    return `${this.resourceType}.${this.resourceName}.storage_class`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get version_id(): string {
    return `${this.resourceType}.${this.resourceName}.version_id`;
  }

  get website_redirect(): string {
    return `${this.resourceType}.${this.resourceName}.website_redirect`;
  }
}
