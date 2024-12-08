import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCloudfrontOriginAccessIdentityArgs {
  id: string;
}

export class data_aws_cloudfront_origin_access_identity extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsCloudfrontOriginAccessIdentityArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cloudfront_origin_access_identity", resourceName);
  }

  get caller_reference(): string {
    return `data.${this.resourceType}.${this.resourceName}.caller_reference`;
  }

  get cloudfront_access_identity_path(): string {
    return `data.${this.resourceType}.${this.resourceName}.cloudfront_access_identity_path`;
  }

  get comment(): string {
    return `data.${this.resourceType}.${this.resourceName}.comment`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get iam_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.iam_arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get s3_canonical_user_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.s3_canonical_user_id`;
  }
}
