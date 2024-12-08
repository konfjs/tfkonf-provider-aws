import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCloudfrontLogDeliveryCanonicalUserIdArgs {
  region?: string;
}

export class data_aws_cloudfront_log_delivery_canonical_user_id extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsCloudfrontLogDeliveryCanonicalUserIdArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cloudfront_log_delivery_canonical_user_id", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
