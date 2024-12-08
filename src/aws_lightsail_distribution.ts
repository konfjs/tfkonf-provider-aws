import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailDistributionArgsCacheBehavior {
  behavior: string;
  path: string;
}

export interface AwsLightsailDistributionArgsCacheBehaviorSettingsForwardedCookies {
  cookies_allow_list?: string[];
  option?: string;
}

export interface AwsLightsailDistributionArgsCacheBehaviorSettingsForwardedHeaders {
  headers_allow_list?: string[];
  option?: string;
}

export interface AwsLightsailDistributionArgsCacheBehaviorSettingsForwardedQueryStrings {
  option?: boolean;
  query_strings_allowed_list?: string[];
}

export interface AwsLightsailDistributionArgsCacheBehaviorSettings {
  allowed_http_methods?: string;
  cached_http_methods?: string;
  default_ttl?: number;
  maximum_ttl?: number;
  minimum_ttl?: number;
  forwarded_cookies?: AwsLightsailDistributionArgsCacheBehaviorSettingsForwardedCookies;
  forwarded_headers?: AwsLightsailDistributionArgsCacheBehaviorSettingsForwardedHeaders;
  forwarded_query_strings?: AwsLightsailDistributionArgsCacheBehaviorSettingsForwardedQueryStrings;
}

export interface AwsLightsailDistributionArgsDefaultCacheBehavior {
  behavior: string;
}

export interface AwsLightsailDistributionArgsOrigin {
  name: string;
  protocol_policy?: string;
  region_name: string;
}

export interface AwsLightsailDistributionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsLightsailDistributionArgs {
  bundle_id: string;
  certificate_name?: string;
  ip_address_type?: string;
  is_enabled?: boolean;
  name: string;
  tags?: { [key: string]: string };
  cache_behavior?: AwsLightsailDistributionArgsCacheBehavior[];
  cache_behavior_settings?: AwsLightsailDistributionArgsCacheBehaviorSettings;
  default_cache_behavior: AwsLightsailDistributionArgsDefaultCacheBehavior;
  origin: AwsLightsailDistributionArgsOrigin;
  timeouts?: AwsLightsailDistributionArgsTimeouts;
}

export class aws_lightsail_distribution extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLightsailDistributionArgs) {
    const meta = {cache_behavior:{isBlock:true},cache_behavior_settings:{isBlock:true,forwarded_cookies:{isBlock:true},forwarded_headers:{isBlock:true},forwarded_query_strings:{isBlock:true}},default_cache_behavior:{isBlock:true},origin:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_distribution", resourceName);
  }

  get alternative_domain_names(): string {
    return `${this.resourceType}.${this.resourceName}.alternative_domain_names`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get bundle_id(): string {
    return `${this.resourceType}.${this.resourceName}.bundle_id`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get origin_public_dns(): string {
    return `${this.resourceType}.${this.resourceName}.origin_public_dns`;
  }

  get resource_type(): string {
    return `${this.resourceType}.${this.resourceName}.resource_type`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get support_code(): string {
    return `${this.resourceType}.${this.resourceName}.support_code`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
