import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKendraDataSourceArgsConfigurationS3ConfigurationAccessControlListConfiguration {
  key_path?: string;
}

export interface AwsKendraDataSourceArgsConfigurationS3ConfigurationDocumentsMetadataConfiguration {
  s3_prefix?: string;
}

export interface AwsKendraDataSourceArgsConfigurationS3Configuration {
  bucket_name: string;
  exclusion_patterns?: string[];
  inclusion_patterns?: string[];
  inclusion_prefixes?: string[];
  access_control_list_configuration?: AwsKendraDataSourceArgsConfigurationS3ConfigurationAccessControlListConfiguration;
  documents_metadata_configuration?: AwsKendraDataSourceArgsConfigurationS3ConfigurationDocumentsMetadataConfiguration;
}

export interface AwsKendraDataSourceArgsConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication {
  credentials: string;
  host: string;
  port: number;
}

export interface AwsKendraDataSourceArgsConfigurationWebCrawlerConfigurationAuthenticationConfiguration {
  basic_authentication?: AwsKendraDataSourceArgsConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication[];
}

export interface AwsKendraDataSourceArgsConfigurationWebCrawlerConfigurationProxyConfiguration {
  credentials?: string;
  host: string;
  port: number;
}

export interface AwsKendraDataSourceArgsConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration {
  seed_urls: string[];
  web_crawler_mode?: string;
}

export interface AwsKendraDataSourceArgsConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration {
  site_maps: string[];
}

export interface AwsKendraDataSourceArgsConfigurationWebCrawlerConfigurationUrls {
  seed_url_configuration?: AwsKendraDataSourceArgsConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration;
  site_maps_configuration?: AwsKendraDataSourceArgsConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration;
}

export interface AwsKendraDataSourceArgsConfigurationWebCrawlerConfiguration {
  crawl_depth?: number;
  max_content_size_per_page_in_mega_bytes?: number;
  max_links_per_page?: number;
  max_urls_per_minute_crawl_rate?: number;
  url_exclusion_patterns?: string[];
  url_inclusion_patterns?: string[];
  authentication_configuration?: AwsKendraDataSourceArgsConfigurationWebCrawlerConfigurationAuthenticationConfiguration;
  proxy_configuration?: AwsKendraDataSourceArgsConfigurationWebCrawlerConfigurationProxyConfiguration;
  urls: AwsKendraDataSourceArgsConfigurationWebCrawlerConfigurationUrls;
}

export interface AwsKendraDataSourceArgsConfiguration {
  s3_configuration?: AwsKendraDataSourceArgsConfigurationS3Configuration;
  web_crawler_configuration?: AwsKendraDataSourceArgsConfigurationWebCrawlerConfiguration;
}

export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue {
  date_value?: string;
  long_value?: number;
  string_list_value?: string[];
  string_value?: string;
}

export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition {
  condition_document_attribute_key: string;
  operator: string;
  condition_on_value?: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue;
}

export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue {
  date_value?: string;
  long_value?: number;
  string_list_value?: string[];
  string_value?: string;
}

export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget {
  target_document_attribute_key?: string;
  target_document_attribute_value_deletion?: boolean;
  target_document_attribute_value?: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue;
}

export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationInlineConfigurations {
  document_content_deletion?: boolean;
  condition?: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition;
  target?: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget;
}

export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue {
  date_value?: string;
  long_value?: number;
  string_list_value?: string[];
  string_value?: string;
}

export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition {
  condition_document_attribute_key: string;
  operator: string;
  condition_on_value?: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue;
}

export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration {
  lambda_arn: string;
  s3_bucket: string;
  invocation_condition?: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition;
}

export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue {
  date_value?: string;
  long_value?: number;
  string_list_value?: string[];
  string_value?: string;
}

export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition {
  condition_document_attribute_key: string;
  operator: string;
  condition_on_value?: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue;
}

export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration {
  lambda_arn: string;
  s3_bucket: string;
  invocation_condition?: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition;
}

export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfiguration {
  role_arn?: string;
  inline_configurations?: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationInlineConfigurations[];
  post_extraction_hook_configuration?: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration;
  pre_extraction_hook_configuration?: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration;
}

export interface AwsKendraDataSourceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsKendraDataSourceArgs {
  description?: string;
  index_id: string;
  name: string;
  role_arn?: string;
  schedule?: string;
  tags?: { [key: string]: string };
  type: string;
  configuration?: AwsKendraDataSourceArgsConfiguration;
  custom_document_enrichment_configuration?: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfiguration;
  timeouts?: AwsKendraDataSourceArgsTimeouts;
}

export class aws_kendra_data_source extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsKendraDataSourceArgs) {
    const meta = {configuration:{isBlock:true,s3_configuration:{isBlock:true,access_control_list_configuration:{isBlock:true},documents_metadata_configuration:{isBlock:true}},web_crawler_configuration:{isBlock:true,authentication_configuration:{isBlock:true,basic_authentication:{isBlock:true}},proxy_configuration:{isBlock:true},urls:{isBlock:true,seed_url_configuration:{isBlock:true},site_maps_configuration:{isBlock:true}}}},custom_document_enrichment_configuration:{isBlock:true,inline_configurations:{isBlock:true,condition:{isBlock:true,condition_on_value:{isBlock:true}},target:{isBlock:true,target_document_attribute_value:{isBlock:true}}},post_extraction_hook_configuration:{isBlock:true,invocation_condition:{isBlock:true,condition_on_value:{isBlock:true}}},pre_extraction_hook_configuration:{isBlock:true,invocation_condition:{isBlock:true,condition_on_value:{isBlock:true}}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_kendra_data_source", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get data_source_id(): string {
    return `${this.resourceType}.${this.resourceName}.data_source_id`;
  }

  get error_message(): string {
    return `${this.resourceType}.${this.resourceName}.error_message`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get index_id(): string {
    return `${this.resourceType}.${this.resourceName}.index_id`;
  }

  get language_code(): string {
    return `${this.resourceType}.${this.resourceName}.language_code`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get updated_at(): string {
    return `${this.resourceType}.${this.resourceName}.updated_at`;
  }
}
