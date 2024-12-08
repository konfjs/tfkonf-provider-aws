import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3controlBucketLifecycleConfigurationArgsRuleAbortIncompleteMultipartUpload {
  days_after_initiation: number;
}

export interface AwsS3controlBucketLifecycleConfigurationArgsRuleExpiration {
  date?: string;
  days?: number;
  expired_object_delete_marker?: boolean;
}

export interface AwsS3controlBucketLifecycleConfigurationArgsRuleFilter {
  prefix?: string;
  tags?: { [key: string]: string };
}

export interface AwsS3controlBucketLifecycleConfigurationArgsRule {
  id: string;
  status?: string;
  abort_incomplete_multipart_upload?: AwsS3controlBucketLifecycleConfigurationArgsRuleAbortIncompleteMultipartUpload;
  expiration?: AwsS3controlBucketLifecycleConfigurationArgsRuleExpiration;
  filter?: AwsS3controlBucketLifecycleConfigurationArgsRuleFilter;
}

export interface AwsS3controlBucketLifecycleConfigurationArgs {
  bucket: string;
  rule: AwsS3controlBucketLifecycleConfigurationArgsRule[];
}

export class aws_s3control_bucket_lifecycle_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsS3controlBucketLifecycleConfigurationArgs) {
    const meta = {rule:{isBlock:true,abort_incomplete_multipart_upload:{isBlock:true},expiration:{isBlock:true},filter:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_s3control_bucket_lifecycle_configuration", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
