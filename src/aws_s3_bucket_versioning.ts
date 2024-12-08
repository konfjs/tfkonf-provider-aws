import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketVersioningArgsVersioningConfiguration {
  status: string;
}

export interface AwsS3BucketVersioningArgs {
  bucket: string;
  expected_bucket_owner?: string;
  mfa?: string;
  versioning_configuration: AwsS3BucketVersioningArgsVersioningConfiguration;
}

export class aws_s3_bucket_versioning extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsS3BucketVersioningArgs) {
    const meta = {versioning_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_s3_bucket_versioning", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
