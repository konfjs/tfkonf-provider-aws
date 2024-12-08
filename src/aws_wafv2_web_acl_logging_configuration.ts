import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterFilterConditionActionCondition {
  action: string;
}

export interface AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterFilterConditionLabelNameCondition {
  label_name: string;
}

export interface AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterFilterCondition {
  action_condition?: AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterFilterConditionActionCondition;
  label_name_condition?: AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterFilterConditionLabelNameCondition;
}

export interface AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterFilter {
  behavior: string;
  requirement: string;
  condition: AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterFilterCondition[];
}

export interface AwsWafv2WebAclLoggingConfigurationArgsLoggingFilter {
  default_behavior: string;
  filter: AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterFilter[];
}

export interface AwsWafv2WebAclLoggingConfigurationArgsRedactedFieldsMethod {
}

export interface AwsWafv2WebAclLoggingConfigurationArgsRedactedFieldsQueryString {
}

export interface AwsWafv2WebAclLoggingConfigurationArgsRedactedFieldsSingleHeader {
  name: string;
}

export interface AwsWafv2WebAclLoggingConfigurationArgsRedactedFieldsUriPath {
}

export interface AwsWafv2WebAclLoggingConfigurationArgsRedactedFields {
  method?: AwsWafv2WebAclLoggingConfigurationArgsRedactedFieldsMethod;
  query_string?: AwsWafv2WebAclLoggingConfigurationArgsRedactedFieldsQueryString;
  single_header?: AwsWafv2WebAclLoggingConfigurationArgsRedactedFieldsSingleHeader;
  uri_path?: AwsWafv2WebAclLoggingConfigurationArgsRedactedFieldsUriPath;
}

export interface AwsWafv2WebAclLoggingConfigurationArgs {
  log_destination_configs: string[];
  resource_arn: string;
  logging_filter?: AwsWafv2WebAclLoggingConfigurationArgsLoggingFilter;
  redacted_fields?: AwsWafv2WebAclLoggingConfigurationArgsRedactedFields[];
}

export class aws_wafv2_web_acl_logging_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsWafv2WebAclLoggingConfigurationArgs) {
    const meta = {logging_filter:{isBlock:true,filter:{isBlock:true,condition:{isBlock:true,action_condition:{isBlock:true},label_name_condition:{isBlock:true}}}},redacted_fields:{isBlock:true,method:{isBlock:true},query_string:{isBlock:true},single_header:{isBlock:true},uri_path:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_wafv2_web_acl_logging_configuration", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get log_destination_configs(): string {
    return `${this.resourceType}.${this.resourceName}.log_destination_configs`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }
}
