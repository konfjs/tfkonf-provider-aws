import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies {
  items?: string[];
}

export interface AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginCookiesConfig {
  cookie_behavior: string;
  cookies?: AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies;
}

export interface AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders {
  items?: string[];
}

export interface AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginHeadersConfig {
  header_behavior?: string;
  headers?: AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders;
}

export interface AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings {
  items?: string[];
}

export interface AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginQueryStringsConfig {
  query_string_behavior: string;
  query_strings?: AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings;
}

export interface AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOrigin {
  enable_accept_encoding_brotli?: boolean;
  enable_accept_encoding_gzip?: boolean;
  cookies_config: AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginCookiesConfig;
  headers_config: AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginHeadersConfig;
  query_strings_config: AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginQueryStringsConfig;
}

export interface AwsCloudfrontCachePolicyArgs {
  comment?: string;
  default_ttl?: number;
  max_ttl?: number;
  min_ttl?: number;
  name: string;
  parameters_in_cache_key_and_forwarded_to_origin: AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOrigin;
}

export class aws_cloudfront_cache_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudfrontCachePolicyArgs) {
    const meta = {parameters_in_cache_key_and_forwarded_to_origin:{isBlock:true,cookies_config:{isBlock:true,cookies:{isBlock:true}},headers_config:{isBlock:true,headers:{isBlock:true}},query_strings_config:{isBlock:true,query_strings:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_cloudfront_cache_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
