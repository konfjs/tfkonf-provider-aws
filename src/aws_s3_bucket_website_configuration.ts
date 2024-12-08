import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketWebsiteConfigurationArgsErrorDocument {
  key: string;
}

export interface AwsS3BucketWebsiteConfigurationArgsIndexDocument {
  suffix: string;
}

export interface AwsS3BucketWebsiteConfigurationArgsRedirectAllRequestsTo {
  host_name: string;
  protocol?: string;
}

export interface AwsS3BucketWebsiteConfigurationArgsRoutingRuleCondition {
  http_error_code_returned_equals?: string;
  key_prefix_equals?: string;
}

export interface AwsS3BucketWebsiteConfigurationArgsRoutingRuleRedirect {
  host_name?: string;
  http_redirect_code?: string;
  protocol?: string;
  replace_key_prefix_with?: string;
  replace_key_with?: string;
}

export interface AwsS3BucketWebsiteConfigurationArgsRoutingRule {
  condition?: AwsS3BucketWebsiteConfigurationArgsRoutingRuleCondition;
  redirect: AwsS3BucketWebsiteConfigurationArgsRoutingRuleRedirect;
}

export interface AwsS3BucketWebsiteConfigurationArgs {
  bucket: string;
  expected_bucket_owner?: string;
  error_document?: AwsS3BucketWebsiteConfigurationArgsErrorDocument;
  index_document?: AwsS3BucketWebsiteConfigurationArgsIndexDocument;
  redirect_all_requests_to?: AwsS3BucketWebsiteConfigurationArgsRedirectAllRequestsTo;
  routing_rule?: AwsS3BucketWebsiteConfigurationArgsRoutingRule[];
}

export class aws_s3_bucket_website_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsS3BucketWebsiteConfigurationArgs) {
    const meta = {error_document:{isBlock:true},index_document:{isBlock:true},redirect_all_requests_to:{isBlock:true},routing_rule:{isBlock:true,condition:{isBlock:true},redirect:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_s3_bucket_website_configuration", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get routing_rules(): string {
    return `${this.resourceType}.${this.resourceName}.routing_rules`;
  }

  get website_domain(): string {
    return `${this.resourceType}.${this.resourceName}.website_domain`;
  }

  get website_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.website_endpoint`;
  }
}
