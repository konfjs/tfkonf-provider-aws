import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketCorsConfigurationArgsCorsRule {
  allowed_headers?: string[];
  allowed_methods: string[];
  allowed_origins: string[];
  expose_headers?: string[];
  id?: string;
  max_age_seconds?: number;
}

export interface AwsS3BucketCorsConfigurationArgs {
  bucket: string;
  expected_bucket_owner?: string;
  cors_rule: AwsS3BucketCorsConfigurationArgsCorsRule[];
}

export class aws_s3_bucket_cors_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsS3BucketCorsConfigurationArgs) {
    const meta = {cors_rule:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_s3_bucket_cors_configuration", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
