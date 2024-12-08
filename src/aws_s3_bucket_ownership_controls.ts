import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketOwnershipControlsArgsRule {
  object_ownership: string;
}

export interface AwsS3BucketOwnershipControlsArgs {
  bucket: string;
  rule: AwsS3BucketOwnershipControlsArgsRule;
}

export class aws_s3_bucket_ownership_controls extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsS3BucketOwnershipControlsArgs) {
    const meta = {rule:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_s3_bucket_ownership_controls", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
