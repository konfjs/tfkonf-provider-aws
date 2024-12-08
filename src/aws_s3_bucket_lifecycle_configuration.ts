import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketLifecycleConfigurationArgsRuleAbortIncompleteMultipartUpload {
  days_after_initiation?: number;
}

export interface AwsS3BucketLifecycleConfigurationArgsRuleExpiration {
  date?: string;
  days?: number;
}

export interface AwsS3BucketLifecycleConfigurationArgsRuleFilterAnd {
  object_size_greater_than?: number;
  object_size_less_than?: number;
  prefix?: string;
  tags?: { [key: string]: string };
}

export interface AwsS3BucketLifecycleConfigurationArgsRuleFilterTag {
  key: string;
  value: string;
}

export interface AwsS3BucketLifecycleConfigurationArgsRuleFilter {
  object_size_greater_than?: string;
  object_size_less_than?: string;
  prefix?: string;
  and?: AwsS3BucketLifecycleConfigurationArgsRuleFilterAnd;
  tag?: AwsS3BucketLifecycleConfigurationArgsRuleFilterTag;
}

export interface AwsS3BucketLifecycleConfigurationArgsRuleNoncurrentVersionExpiration {
  newer_noncurrent_versions?: string;
  noncurrent_days?: number;
}

export interface AwsS3BucketLifecycleConfigurationArgsRuleNoncurrentVersionTransition {
  newer_noncurrent_versions?: string;
  noncurrent_days?: number;
  storage_class: string;
}

export interface AwsS3BucketLifecycleConfigurationArgsRuleTransition {
  date?: string;
  days?: number;
  storage_class: string;
}

export interface AwsS3BucketLifecycleConfigurationArgsRule {
  id: string;
  prefix?: string;
  status: string;
  abort_incomplete_multipart_upload?: AwsS3BucketLifecycleConfigurationArgsRuleAbortIncompleteMultipartUpload;
  expiration?: AwsS3BucketLifecycleConfigurationArgsRuleExpiration;
  filter?: AwsS3BucketLifecycleConfigurationArgsRuleFilter;
  noncurrent_version_expiration?: AwsS3BucketLifecycleConfigurationArgsRuleNoncurrentVersionExpiration;
  noncurrent_version_transition?: AwsS3BucketLifecycleConfigurationArgsRuleNoncurrentVersionTransition[];
  transition?: AwsS3BucketLifecycleConfigurationArgsRuleTransition[];
}

export interface AwsS3BucketLifecycleConfigurationArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsS3BucketLifecycleConfigurationArgs {
  bucket: string;
  expected_bucket_owner?: string;
  rule: AwsS3BucketLifecycleConfigurationArgsRule[];
  timeouts?: AwsS3BucketLifecycleConfigurationArgsTimeouts;
}

export class aws_s3_bucket_lifecycle_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsS3BucketLifecycleConfigurationArgs) {
    const meta = {rule:{isBlock:true,abort_incomplete_multipart_upload:{isBlock:true},expiration:{isBlock:true},filter:{isBlock:true,and:{isBlock:true},tag:{isBlock:true}},noncurrent_version_expiration:{isBlock:true},noncurrent_version_transition:{isBlock:true},transition:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_s3_bucket_lifecycle_configuration", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get transition_default_minimum_object_size(): string {
    return `${this.resourceType}.${this.resourceName}.transition_default_minimum_object_size`;
  }
}
