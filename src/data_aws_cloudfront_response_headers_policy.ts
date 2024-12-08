import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCloudfrontResponseHeadersPolicyArgs {
}

export class data_aws_cloudfront_response_headers_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsCloudfrontResponseHeadersPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cloudfront_response_headers_policy", resourceName);
  }

  get comment(): string {
    return `data.${this.resourceType}.${this.resourceName}.comment`;
  }

  get cors_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.cors_config`;
  }

  get custom_headers_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.custom_headers_config`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get remove_headers_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.remove_headers_config`;
  }

  get security_headers_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_headers_config`;
  }

  get server_timing_headers_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.server_timing_headers_config`;
  }
}
