import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketRequestPaymentConfigurationArgs {
  bucket: string;
  expected_bucket_owner?: string;
  payer: string;
}

export class aws_s3_bucket_request_payment_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsS3BucketRequestPaymentConfigurationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_s3_bucket_request_payment_configuration", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get payer(): string {
    return `${this.resourceType}.${this.resourceName}.payer`;
  }
}
