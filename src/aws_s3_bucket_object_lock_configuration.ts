import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketObjectLockConfigurationArgsRuleDefaultRetention {
  days?: number;
  mode?: string;
  years?: number;
}

export interface AwsS3BucketObjectLockConfigurationArgsRule {
  default_retention: AwsS3BucketObjectLockConfigurationArgsRuleDefaultRetention;
}

export interface AwsS3BucketObjectLockConfigurationArgs {
  bucket: string;
  expected_bucket_owner?: string;
  object_lock_enabled?: string;
  token?: string;
  rule?: AwsS3BucketObjectLockConfigurationArgsRule;
}

export class aws_s3_bucket_object_lock_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsS3BucketObjectLockConfigurationArgs) {
    const meta = {rule:{isBlock:true,default_retention:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_s3_bucket_object_lock_configuration", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
