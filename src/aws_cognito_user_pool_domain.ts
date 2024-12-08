import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCognitoUserPoolDomainArgs {
  certificate_arn?: string;
  domain: string;
  user_pool_id: string;
}

export class aws_cognito_user_pool_domain extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCognitoUserPoolDomainArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cognito_user_pool_domain", resourceName);
  }

  get aws_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get cloudfront_distribution(): string {
    return `${this.resourceType}.${this.resourceName}.cloudfront_distribution`;
  }

  get cloudfront_distribution_arn(): string {
    return `${this.resourceType}.${this.resourceName}.cloudfront_distribution_arn`;
  }

  get cloudfront_distribution_zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.cloudfront_distribution_zone_id`;
  }

  get domain(): string {
    return `${this.resourceType}.${this.resourceName}.domain`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get s3_bucket(): string {
    return `${this.resourceType}.${this.resourceName}.s3_bucket`;
  }

  get user_pool_id(): string {
    return `${this.resourceType}.${this.resourceName}.user_pool_id`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
