import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCloudfrontOriginRequestPolicyArgs {
  id?: string;
  name?: string;
}

export class data_aws_cloudfront_origin_request_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsCloudfrontOriginRequestPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cloudfront_origin_request_policy", resourceName);
  }

  get comment(): string {
    return `data.${this.resourceType}.${this.resourceName}.comment`;
  }

  get cookies_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.cookies_config`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get headers_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.headers_config`;
  }

  get query_strings_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.query_strings_config`;
  }
}
