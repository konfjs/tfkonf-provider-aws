import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudfrontOriginAccessIdentityArgs {
  comment?: string;
}

export class aws_cloudfront_origin_access_identity extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudfrontOriginAccessIdentityArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloudfront_origin_access_identity", resourceName);
  }

  get caller_reference(): string {
    return `${this.resourceType}.${this.resourceName}.caller_reference`;
  }

  get cloudfront_access_identity_path(): string {
    return `${this.resourceType}.${this.resourceName}.cloudfront_access_identity_path`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get iam_arn(): string {
    return `${this.resourceType}.${this.resourceName}.iam_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get s3_canonical_user_id(): string {
    return `${this.resourceType}.${this.resourceName}.s3_canonical_user_id`;
  }
}
