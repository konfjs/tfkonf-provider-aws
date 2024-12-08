import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsS3BucketPolicyArgs {
  bucket: string;
}

export class data_aws_s3_bucket_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsS3BucketPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_s3_bucket_policy", resourceName);
  }

  get bucket(): string {
    return `data.${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy`;
  }
}
