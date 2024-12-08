import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCloudfrontOriginAccessIdentitiesArgs {
  comments?: string[];
}

export class data_aws_cloudfront_origin_access_identities extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsCloudfrontOriginAccessIdentitiesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cloudfront_origin_access_identities", resourceName);
  }

  get iam_arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.iam_arns`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }

  get s3_canonical_user_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.s3_canonical_user_ids`;
  }
}
