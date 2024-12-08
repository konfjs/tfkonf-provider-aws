import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsS3AccountPublicAccessBlockArgs {
  account_id?: string;
}

export class data_aws_s3_account_public_access_block extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsS3AccountPublicAccessBlockArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_s3_account_public_access_block", resourceName);
  }

  get block_public_acls(): string {
    return `data.${this.resourceType}.${this.resourceName}.block_public_acls`;
  }

  get block_public_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.block_public_policy`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ignore_public_acls(): string {
    return `data.${this.resourceType}.${this.resourceName}.ignore_public_acls`;
  }

  get restrict_public_buckets(): string {
    return `data.${this.resourceType}.${this.resourceName}.restrict_public_buckets`;
  }
}
