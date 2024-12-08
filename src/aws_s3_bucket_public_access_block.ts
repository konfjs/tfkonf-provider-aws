import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketPublicAccessBlockArgs {
  block_public_acls?: boolean;
  block_public_policy?: boolean;
  bucket: string;
  ignore_public_acls?: boolean;
  restrict_public_buckets?: boolean;
}

export class aws_s3_bucket_public_access_block extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsS3BucketPublicAccessBlockArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_s3_bucket_public_access_block", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
