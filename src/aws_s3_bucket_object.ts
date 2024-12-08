import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketObjectArgs {
  acl?: string;
  bucket: string;
  cache_control?: string;
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
}

export class aws_s3_bucket_object extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsS3BucketObjectArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_s3_bucket_object", resourceName);
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
