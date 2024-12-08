import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecurityhubProductSubscriptionArgs {
  product_arn: string;
}

export class aws_securityhub_product_subscription extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSecurityhubProductSubscriptionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_securityhub_product_subscription", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get product_arn(): string {
    return `${this.resourceType}.${this.resourceName}.product_arn`;
  }
}
