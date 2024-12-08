import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketLoggingArgsTargetGrantGrantee {
  email_address?: string;
  id?: string;
  type: string;
  uri?: string;
}

export interface AwsS3BucketLoggingArgsTargetGrant {
  permission: string;
  grantee: AwsS3BucketLoggingArgsTargetGrantGrantee;
}

export interface AwsS3BucketLoggingArgsTargetObjectKeyFormatPartitionedPrefix {
  partition_date_source: string;
}

export interface AwsS3BucketLoggingArgsTargetObjectKeyFormatSimplePrefix {
}

export interface AwsS3BucketLoggingArgsTargetObjectKeyFormat {
  partitioned_prefix?: AwsS3BucketLoggingArgsTargetObjectKeyFormatPartitionedPrefix;
  simple_prefix?: AwsS3BucketLoggingArgsTargetObjectKeyFormatSimplePrefix;
}

export interface AwsS3BucketLoggingArgs {
  bucket: string;
  expected_bucket_owner?: string;
  target_bucket: string;
  target_prefix: string;
  target_grant?: AwsS3BucketLoggingArgsTargetGrant[];
  target_object_key_format?: AwsS3BucketLoggingArgsTargetObjectKeyFormat;
}

export class aws_s3_bucket_logging extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsS3BucketLoggingArgs) {
    const meta = {target_grant:{isBlock:true,grantee:{isBlock:true}},target_object_key_format:{isBlock:true,partitioned_prefix:{isBlock:true},simple_prefix:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_s3_bucket_logging", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get target_bucket(): string {
    return `${this.resourceType}.${this.resourceName}.target_bucket`;
  }

  get target_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.target_prefix`;
  }
}
