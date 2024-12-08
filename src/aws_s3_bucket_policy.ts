import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketPolicyArgs {
  bucket: string;
  policy: string;
}

export class aws_s3_bucket_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsS3BucketPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_s3_bucket_policy", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }
}
