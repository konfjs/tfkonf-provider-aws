import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCeTagsArgsFilterAndCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface DataAwsCeTagsArgsFilterAndDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface DataAwsCeTagsArgsFilterAndTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface DataAwsCeTagsArgsFilterAnd {
  cost_category?: DataAwsCeTagsArgsFilterAndCostCategory;
  dimension?: DataAwsCeTagsArgsFilterAndDimension;
  tags?: DataAwsCeTagsArgsFilterAndTags;
}

export interface DataAwsCeTagsArgsFilterCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface DataAwsCeTagsArgsFilterDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface DataAwsCeTagsArgsFilterNotCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface DataAwsCeTagsArgsFilterNotDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface DataAwsCeTagsArgsFilterNotTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface DataAwsCeTagsArgsFilterNot {
  cost_category?: DataAwsCeTagsArgsFilterNotCostCategory;
  dimension?: DataAwsCeTagsArgsFilterNotDimension;
  tags?: DataAwsCeTagsArgsFilterNotTags;
}

export interface DataAwsCeTagsArgsFilterOrCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface DataAwsCeTagsArgsFilterOrDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface DataAwsCeTagsArgsFilterOrTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface DataAwsCeTagsArgsFilterOr {
  cost_category?: DataAwsCeTagsArgsFilterOrCostCategory;
  dimension?: DataAwsCeTagsArgsFilterOrDimension;
  tags?: DataAwsCeTagsArgsFilterOrTags;
}

export interface DataAwsCeTagsArgsFilterTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface DataAwsCeTagsArgsFilter {
  and?: DataAwsCeTagsArgsFilterAnd[];
  cost_category?: DataAwsCeTagsArgsFilterCostCategory;
  dimension?: DataAwsCeTagsArgsFilterDimension;
  not?: DataAwsCeTagsArgsFilterNot;
  or?: DataAwsCeTagsArgsFilterOr[];
  tags?: DataAwsCeTagsArgsFilterTags;
}

export interface DataAwsCeTagsArgsSortBy {
  key?: string;
  sort_order?: string;
}

export interface DataAwsCeTagsArgsTimePeriod {
  end: string;
  start: string;
}

export interface DataAwsCeTagsArgs {
  search_string?: string;
  tag_key?: string;
  filter?: DataAwsCeTagsArgsFilter;
  sort_by?: DataAwsCeTagsArgsSortBy[];
  time_period: DataAwsCeTagsArgsTimePeriod;
}

export class data_aws_ce_tags extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsCeTagsArgs) {
    const meta = {filter:{isBlock:true,and:{isBlock:true,cost_category:{isBlock:true},dimension:{isBlock:true},tags:{isBlock:true}},cost_category:{isBlock:true},dimension:{isBlock:true},not:{isBlock:true,cost_category:{isBlock:true},dimension:{isBlock:true},tags:{isBlock:true}},or:{isBlock:true,cost_category:{isBlock:true},dimension:{isBlock:true},tags:{isBlock:true}},tags:{isBlock:true}},sort_by:{isBlock:true},time_period:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ce_tags", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
