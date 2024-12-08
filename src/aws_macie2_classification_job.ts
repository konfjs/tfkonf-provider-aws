import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion {
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues {
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaExcludesAndTagCriterion {
  tag_values?: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues[];
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaExcludesAnd {
  simple_criterion?: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion;
  tag_criterion?: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaExcludesAndTagCriterion;
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaExcludes {
  and?: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaExcludesAnd[];
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion {
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues {
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaIncludesAndTagCriterion {
  tag_values?: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues[];
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaIncludesAnd {
  simple_criterion?: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion;
  tag_criterion?: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaIncludesAndTagCriterion;
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaIncludes {
  and?: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaIncludesAnd[];
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteria {
  excludes?: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaExcludes;
  includes?: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaIncludes;
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketDefinitions {
  account_id: string;
  buckets: string[];
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionScopingExcludesAndSimpleScopeTerm {
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionScopingExcludesAndTagScopeTermTagValues {
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionScopingExcludesAndTagScopeTerm {
  tag_values?: AwsMacie2ClassificationJobArgsS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[];
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionScopingExcludesAnd {
  simple_scope_term?: AwsMacie2ClassificationJobArgsS3JobDefinitionScopingExcludesAndSimpleScopeTerm;
  tag_scope_term?: AwsMacie2ClassificationJobArgsS3JobDefinitionScopingExcludesAndTagScopeTerm;
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionScopingExcludes {
  and?: AwsMacie2ClassificationJobArgsS3JobDefinitionScopingExcludesAnd[];
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionScopingIncludesAndSimpleScopeTerm {
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionScopingIncludesAndTagScopeTermTagValues {
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionScopingIncludesAndTagScopeTerm {
  tag_values?: AwsMacie2ClassificationJobArgsS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[];
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionScopingIncludesAnd {
  simple_scope_term?: AwsMacie2ClassificationJobArgsS3JobDefinitionScopingIncludesAndSimpleScopeTerm;
  tag_scope_term?: AwsMacie2ClassificationJobArgsS3JobDefinitionScopingIncludesAndTagScopeTerm;
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionScopingIncludes {
  and?: AwsMacie2ClassificationJobArgsS3JobDefinitionScopingIncludesAnd[];
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinitionScoping {
  excludes?: AwsMacie2ClassificationJobArgsS3JobDefinitionScopingExcludes;
  includes?: AwsMacie2ClassificationJobArgsS3JobDefinitionScopingIncludes;
}

export interface AwsMacie2ClassificationJobArgsS3JobDefinition {
  bucket_criteria?: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteria;
  bucket_definitions?: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketDefinitions[];
  scoping?: AwsMacie2ClassificationJobArgsS3JobDefinitionScoping;
}

export interface AwsMacie2ClassificationJobArgsScheduleFrequency {
  daily_schedule?: boolean;
}

export interface AwsMacie2ClassificationJobArgs {
  initial_run?: boolean;
  job_type: string;
  tags?: { [key: string]: string };
  s3_job_definition: AwsMacie2ClassificationJobArgsS3JobDefinition;
  schedule_frequency?: AwsMacie2ClassificationJobArgsScheduleFrequency;
}

export class aws_macie2_classification_job extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsMacie2ClassificationJobArgs) {
    const meta = {s3_job_definition:{isBlock:true,bucket_criteria:{isBlock:true,excludes:{isBlock:true,and:{isBlock:true,simple_criterion:{isBlock:true},tag_criterion:{isBlock:true,tag_values:{isBlock:true}}}},includes:{isBlock:true,and:{isBlock:true,simple_criterion:{isBlock:true},tag_criterion:{isBlock:true,tag_values:{isBlock:true}}}}},bucket_definitions:{isBlock:true},scoping:{isBlock:true,excludes:{isBlock:true,and:{isBlock:true,simple_scope_term:{isBlock:true},tag_scope_term:{isBlock:true,tag_values:{isBlock:true}}}},includes:{isBlock:true,and:{isBlock:true,simple_scope_term:{isBlock:true},tag_scope_term:{isBlock:true,tag_values:{isBlock:true}}}}}},schedule_frequency:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_macie2_classification_job", resourceName);
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get custom_data_identifier_ids(): string {
    return `${this.resourceType}.${this.resourceName}.custom_data_identifier_ids`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get job_arn(): string {
    return `${this.resourceType}.${this.resourceName}.job_arn`;
  }

  get job_id(): string {
    return `${this.resourceType}.${this.resourceName}.job_id`;
  }

  get job_status(): string {
    return `${this.resourceType}.${this.resourceName}.job_status`;
  }

  get job_type(): string {
    return `${this.resourceType}.${this.resourceName}.job_type`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get sampling_percentage(): string {
    return `${this.resourceType}.${this.resourceName}.sampling_percentage`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get user_paused_details(): string {
    return `${this.resourceType}.${this.resourceName}.user_paused_details`;
  }
}
