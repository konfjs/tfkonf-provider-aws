import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCloudfrontCachePolicyArgs {
  id?: string;
  name?: string;
}

export class data_aws_cloudfront_cache_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsCloudfrontCachePolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cloudfront_cache_policy", resourceName);
  }

  get comment(): string {
    return `data.${this.resourceType}.${this.resourceName}.comment`;
  }

  get default_ttl(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_ttl`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get max_ttl(): string {
    return `data.${this.resourceType}.${this.resourceName}.max_ttl`;
  }

  get min_ttl(): string {
    return `data.${this.resourceType}.${this.resourceName}.min_ttl`;
  }

  get parameters_in_cache_key_and_forwarded_to_origin(): string {
    return `data.${this.resourceType}.${this.resourceName}.parameters_in_cache_key_and_forwarded_to_origin`;
  }
}
