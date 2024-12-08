import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudfrontDistributionArgsCustomErrorResponse {
  error_caching_min_ttl?: number;
  error_code: number;
  response_code?: number;
  response_page_path?: string;
}

export interface AwsCloudfrontDistributionArgsDefaultCacheBehaviorForwardedValuesCookies {
  forward: string;
}

export interface AwsCloudfrontDistributionArgsDefaultCacheBehaviorForwardedValues {
  query_string: boolean;
  cookies: AwsCloudfrontDistributionArgsDefaultCacheBehaviorForwardedValuesCookies;
}

export interface AwsCloudfrontDistributionArgsDefaultCacheBehaviorFunctionAssociation {
  event_type: string;
  function_arn: string;
}

export interface AwsCloudfrontDistributionArgsDefaultCacheBehaviorLambdaFunctionAssociation {
  event_type: string;
  include_body?: boolean;
  lambda_arn: string;
}

export interface AwsCloudfrontDistributionArgsDefaultCacheBehavior {
  allowed_methods: string[];
  cache_policy_id?: string;
  cached_methods: string[];
  compress?: boolean;
  field_level_encryption_id?: string;
  min_ttl?: number;
  origin_request_policy_id?: string;
  realtime_log_config_arn?: string;
  response_headers_policy_id?: string;
  smooth_streaming?: boolean;
  target_origin_id: string;
  viewer_protocol_policy: string;
  forwarded_values?: AwsCloudfrontDistributionArgsDefaultCacheBehaviorForwardedValues;
  function_association?: AwsCloudfrontDistributionArgsDefaultCacheBehaviorFunctionAssociation[];
  lambda_function_association?: AwsCloudfrontDistributionArgsDefaultCacheBehaviorLambdaFunctionAssociation[];
}

export interface AwsCloudfrontDistributionArgsLoggingConfig {
  bucket: string;
  include_cookies?: boolean;
  prefix?: string;
}

export interface AwsCloudfrontDistributionArgsOrderedCacheBehaviorForwardedValuesCookies {
  forward: string;
  whitelisted_names?: string[];
}

export interface AwsCloudfrontDistributionArgsOrderedCacheBehaviorForwardedValues {
  query_string: boolean;
  cookies: AwsCloudfrontDistributionArgsOrderedCacheBehaviorForwardedValuesCookies;
}

export interface AwsCloudfrontDistributionArgsOrderedCacheBehaviorFunctionAssociation {
  event_type: string;
  function_arn: string;
}

export interface AwsCloudfrontDistributionArgsOrderedCacheBehaviorLambdaFunctionAssociation {
  event_type: string;
  include_body?: boolean;
  lambda_arn: string;
}

export interface AwsCloudfrontDistributionArgsOrderedCacheBehavior {
  allowed_methods: string[];
  cache_policy_id?: string;
  cached_methods: string[];
  compress?: boolean;
  field_level_encryption_id?: string;
  min_ttl?: number;
  origin_request_policy_id?: string;
  path_pattern: string;
  realtime_log_config_arn?: string;
  response_headers_policy_id?: string;
  smooth_streaming?: boolean;
  target_origin_id: string;
  trusted_key_groups?: string[];
  trusted_signers?: string[];
  viewer_protocol_policy: string;
  forwarded_values?: AwsCloudfrontDistributionArgsOrderedCacheBehaviorForwardedValues;
  function_association?: AwsCloudfrontDistributionArgsOrderedCacheBehaviorFunctionAssociation[];
  lambda_function_association?: AwsCloudfrontDistributionArgsOrderedCacheBehaviorLambdaFunctionAssociation[];
}

export interface AwsCloudfrontDistributionArgsOriginCustomHeader {
  name: string;
  value: string;
}

export interface AwsCloudfrontDistributionArgsOriginCustomOriginConfig {
  http_port: number;
  https_port: number;
  origin_keepalive_timeout?: number;
  origin_protocol_policy: string;
  origin_read_timeout?: number;
  origin_ssl_protocols: string[];
}

export interface AwsCloudfrontDistributionArgsOriginOriginShield {
  enabled: boolean;
  origin_shield_region?: string;
}

export interface AwsCloudfrontDistributionArgsOriginS3OriginConfig {
  origin_access_identity: string;
}

export interface AwsCloudfrontDistributionArgsOrigin {
  connection_attempts?: number;
  connection_timeout?: number;
  domain_name: string;
  origin_access_control_id?: string;
  origin_id: string;
  origin_path?: string;
  custom_header?: AwsCloudfrontDistributionArgsOriginCustomHeader[];
  custom_origin_config?: AwsCloudfrontDistributionArgsOriginCustomOriginConfig;
  origin_shield?: AwsCloudfrontDistributionArgsOriginOriginShield;
  s3_origin_config?: AwsCloudfrontDistributionArgsOriginS3OriginConfig;
}

export interface AwsCloudfrontDistributionArgsOriginGroupFailoverCriteria {
  status_codes: number[];
}

export interface AwsCloudfrontDistributionArgsOriginGroupMember {
  origin_id: string;
}

export interface AwsCloudfrontDistributionArgsOriginGroup {
  origin_id: string;
  failover_criteria: AwsCloudfrontDistributionArgsOriginGroupFailoverCriteria;
  member: AwsCloudfrontDistributionArgsOriginGroupMember[];
}

export interface AwsCloudfrontDistributionArgsRestrictionsGeoRestriction {
  restriction_type: string;
}

export interface AwsCloudfrontDistributionArgsRestrictions {
  geo_restriction: AwsCloudfrontDistributionArgsRestrictionsGeoRestriction;
}

export interface AwsCloudfrontDistributionArgsViewerCertificate {
  acm_certificate_arn?: string;
  cloudfront_default_certificate?: boolean;
  iam_certificate_id?: string;
  minimum_protocol_version?: string;
  ssl_support_method?: string;
}

export interface AwsCloudfrontDistributionArgs {
  aliases?: string[];
  comment?: string;
  default_root_object?: string;
  enabled: boolean;
  http_version?: string;
  is_ipv6_enabled?: boolean;
  price_class?: string;
  retain_on_delete?: boolean;
  staging?: boolean;
  tags?: { [key: string]: string };
  wait_for_deployment?: boolean;
  web_acl_id?: string;
  custom_error_response?: AwsCloudfrontDistributionArgsCustomErrorResponse[];
  default_cache_behavior: AwsCloudfrontDistributionArgsDefaultCacheBehavior;
  logging_config?: AwsCloudfrontDistributionArgsLoggingConfig;
  ordered_cache_behavior?: AwsCloudfrontDistributionArgsOrderedCacheBehavior[];
  origin: AwsCloudfrontDistributionArgsOrigin[];
  origin_group?: AwsCloudfrontDistributionArgsOriginGroup[];
  restrictions: AwsCloudfrontDistributionArgsRestrictions;
  viewer_certificate: AwsCloudfrontDistributionArgsViewerCertificate;
}

export class aws_cloudfront_distribution extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudfrontDistributionArgs) {
    const meta = {custom_error_response:{isBlock:true},default_cache_behavior:{isBlock:true,forwarded_values:{isBlock:true,cookies:{isBlock:true}},function_association:{isBlock:true},lambda_function_association:{isBlock:true}},logging_config:{isBlock:true},ordered_cache_behavior:{isBlock:true,forwarded_values:{isBlock:true,cookies:{isBlock:true}},function_association:{isBlock:true},lambda_function_association:{isBlock:true}},origin:{isBlock:true,custom_header:{isBlock:true},custom_origin_config:{isBlock:true},origin_shield:{isBlock:true},s3_origin_config:{isBlock:true}},origin_group:{isBlock:true,failover_criteria:{isBlock:true},member:{isBlock:true}},restrictions:{isBlock:true,geo_restriction:{isBlock:true}},viewer_certificate:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cloudfront_distribution", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get caller_reference(): string {
    return `${this.resourceType}.${this.resourceName}.caller_reference`;
  }

  get continuous_deployment_policy_id(): string {
    return `${this.resourceType}.${this.resourceName}.continuous_deployment_policy_id`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get enabled(): string {
    return `${this.resourceType}.${this.resourceName}.enabled`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get hosted_zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.hosted_zone_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get in_progress_validation_batches(): string {
    return `${this.resourceType}.${this.resourceName}.in_progress_validation_batches`;
  }

  get last_modified_time(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified_time`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get trusted_key_groups(): string {
    return `${this.resourceType}.${this.resourceName}.trusted_key_groups`;
  }

  get trusted_signers(): string {
    return `${this.resourceType}.${this.resourceName}.trusted_signers`;
  }
}
