import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3AccountPublicAccessBlockArgs {
  block_public_acls?: boolean;
  block_public_policy?: boolean;
  ignore_public_acls?: boolean;
  restrict_public_buckets?: boolean;
}

export class aws_s3_account_public_access_block extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsS3AccountPublicAccessBlockArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_s3_account_public_access_block", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
