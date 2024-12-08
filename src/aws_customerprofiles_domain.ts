import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCustomerprofilesDomainArgsMatchingAutoMergingConflictResolution {
  conflict_resolving_model: string;
  source_name?: string;
}

export interface AwsCustomerprofilesDomainArgsMatchingAutoMergingConsolidation {
  matching_attributes_list: any[];
}

export interface AwsCustomerprofilesDomainArgsMatchingAutoMerging {
  enabled: boolean;
  min_allowed_confidence_score_for_merging?: number;
  conflict_resolution?: AwsCustomerprofilesDomainArgsMatchingAutoMergingConflictResolution;
  consolidation?: AwsCustomerprofilesDomainArgsMatchingAutoMergingConsolidation;
}

export interface AwsCustomerprofilesDomainArgsMatchingExportingConfigS3Exporting {
  s3_bucket_name: string;
  s3_key_name?: string;
}

export interface AwsCustomerprofilesDomainArgsMatchingExportingConfig {
  s3_exporting?: AwsCustomerprofilesDomainArgsMatchingExportingConfigS3Exporting;
}

export interface AwsCustomerprofilesDomainArgsMatchingJobSchedule {
  day_of_the_week: string;
  time: string;
}

export interface AwsCustomerprofilesDomainArgsMatching {
  enabled: boolean;
  auto_merging?: AwsCustomerprofilesDomainArgsMatchingAutoMerging;
  exporting_config?: AwsCustomerprofilesDomainArgsMatchingExportingConfig;
  job_schedule?: AwsCustomerprofilesDomainArgsMatchingJobSchedule;
}

export interface AwsCustomerprofilesDomainArgsRuleBasedMatchingAttributeTypesSelector {
  address?: string[];
  attribute_matching_model: string;
  email_address?: string[];
  phone_number?: string[];
}

export interface AwsCustomerprofilesDomainArgsRuleBasedMatchingConflictResolution {
  conflict_resolving_model: string;
  source_name?: string;
}

export interface AwsCustomerprofilesDomainArgsRuleBasedMatchingExportingConfigS3Exporting {
  s3_bucket_name: string;
  s3_key_name?: string;
}

export interface AwsCustomerprofilesDomainArgsRuleBasedMatchingExportingConfig {
  s3_exporting?: AwsCustomerprofilesDomainArgsRuleBasedMatchingExportingConfigS3Exporting;
}

export interface AwsCustomerprofilesDomainArgsRuleBasedMatchingMatchingRules {
  rule: string[];
}

export interface AwsCustomerprofilesDomainArgsRuleBasedMatching {
  enabled: boolean;
  max_allowed_rule_level_for_matching?: number;
  max_allowed_rule_level_for_merging?: number;
  attribute_types_selector?: AwsCustomerprofilesDomainArgsRuleBasedMatchingAttributeTypesSelector;
  conflict_resolution?: AwsCustomerprofilesDomainArgsRuleBasedMatchingConflictResolution;
  exporting_config?: AwsCustomerprofilesDomainArgsRuleBasedMatchingExportingConfig;
  matching_rules?: AwsCustomerprofilesDomainArgsRuleBasedMatchingMatchingRules[];
}

export interface AwsCustomerprofilesDomainArgs {
  dead_letter_queue_url?: string;
  default_encryption_key?: string;
  default_expiration_days: number;
  domain_name: string;
  tags?: { [key: string]: string };
  matching?: AwsCustomerprofilesDomainArgsMatching;
  rule_based_matching?: AwsCustomerprofilesDomainArgsRuleBasedMatching;
}

export class aws_customerprofiles_domain extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCustomerprofilesDomainArgs) {
    const meta = {matching:{isBlock:true,auto_merging:{isBlock:true,conflict_resolution:{isBlock:true},consolidation:{isBlock:true}},exporting_config:{isBlock:true,s3_exporting:{isBlock:true}},job_schedule:{isBlock:true}},rule_based_matching:{isBlock:true,attribute_types_selector:{isBlock:true},conflict_resolution:{isBlock:true},exporting_config:{isBlock:true,s3_exporting:{isBlock:true}},matching_rules:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_customerprofiles_domain", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get default_expiration_days(): string {
    return `${this.resourceType}.${this.resourceName}.default_expiration_days`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
