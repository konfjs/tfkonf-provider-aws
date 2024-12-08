import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketAccelerateConfigurationArgs {
  bucket: string;
  expected_bucket_owner?: string;
  status: string;
}

export class aws_s3_bucket_accelerate_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsS3BucketAccelerateConfigurationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_s3_bucket_accelerate_configuration", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
