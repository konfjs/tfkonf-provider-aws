import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3ObjectArgsOverrideProviderDefaultTags {
  tags?: { [key: string]: string };
}

export interface AwsS3ObjectArgsOverrideProvider {
  default_tags?: AwsS3ObjectArgsOverrideProviderDefaultTags;
}

export interface AwsS3ObjectArgs {
  bucket: string;
  cache_control?: string;
  checksum_algorithm?: string;
  content?: string;
  content_base64?: string;
  content_disposition?: string;
  content_encoding?: string;
  content_language?: string;
  force_destroy?: boolean;
  key: string;
  metadata?: { [key: string]: string };
  object_lock_legal_hold_status?: string;
  object_lock_mode?: string;
  object_lock_retain_until_date?: string;
  source?: string;
  source_hash?: string;
  tags?: { [key: string]: string };
  website_redirect?: string;
  override_provider?: AwsS3ObjectArgsOverrideProvider;
}

export class aws_s3_object extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsS3ObjectArgs) {
    const meta = {override_provider:{isBlock:true,default_tags:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_s3_object", resourceName);
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

  get content_type(): string {
    return `${this.resourceType}.${this.resourceName}.content_type`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key(): string {
    return `${this.resourceType}.${this.resourceName}.key`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get server_side_encryption(): string {
    return `${this.resourceType}.${this.resourceName}.server_side_encryption`;
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
}
