import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudfrontOriginRequestPolicyArgsCookiesConfigCookies {
  items?: string[];
}

export interface AwsCloudfrontOriginRequestPolicyArgsCookiesConfig {
  cookie_behavior: string;
  cookies?: AwsCloudfrontOriginRequestPolicyArgsCookiesConfigCookies;
}

export interface AwsCloudfrontOriginRequestPolicyArgsHeadersConfigHeaders {
  items?: string[];
}

export interface AwsCloudfrontOriginRequestPolicyArgsHeadersConfig {
  header_behavior?: string;
  headers?: AwsCloudfrontOriginRequestPolicyArgsHeadersConfigHeaders;
}

export interface AwsCloudfrontOriginRequestPolicyArgsQueryStringsConfigQueryStrings {
  items?: string[];
}

export interface AwsCloudfrontOriginRequestPolicyArgsQueryStringsConfig {
  query_string_behavior: string;
  query_strings?: AwsCloudfrontOriginRequestPolicyArgsQueryStringsConfigQueryStrings;
}

export interface AwsCloudfrontOriginRequestPolicyArgs {
  comment?: string;
  name: string;
  cookies_config: AwsCloudfrontOriginRequestPolicyArgsCookiesConfig;
  headers_config: AwsCloudfrontOriginRequestPolicyArgsHeadersConfig;
  query_strings_config: AwsCloudfrontOriginRequestPolicyArgsQueryStringsConfig;
}

export class aws_cloudfront_origin_request_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudfrontOriginRequestPolicyArgs) {
    const meta = {cookies_config:{isBlock:true,cookies:{isBlock:true}},headers_config:{isBlock:true,headers:{isBlock:true}},query_strings_config:{isBlock:true,query_strings:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_cloudfront_origin_request_policy", resourceName);
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
