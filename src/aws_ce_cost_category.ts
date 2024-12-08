import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCeCostCategoryArgsRuleInheritedValue {
  dimension_key?: string;
  dimension_name?: string;
}

export interface AwsCeCostCategoryArgsRuleRuleAndAndCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleAndAndDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleAndAndTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleAndAnd {
  cost_category?: AwsCeCostCategoryArgsRuleRuleAndAndCostCategory;
  dimension?: AwsCeCostCategoryArgsRuleRuleAndAndDimension;
  tags?: AwsCeCostCategoryArgsRuleRuleAndAndTags;
}

export interface AwsCeCostCategoryArgsRuleRuleAndCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleAndDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleAndNotCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleAndNotDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleAndNotTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleAndNot {
  cost_category?: AwsCeCostCategoryArgsRuleRuleAndNotCostCategory;
  dimension?: AwsCeCostCategoryArgsRuleRuleAndNotDimension;
  tags?: AwsCeCostCategoryArgsRuleRuleAndNotTags;
}

export interface AwsCeCostCategoryArgsRuleRuleAndOrCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleAndOrDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleAndOrTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleAndOr {
  cost_category?: AwsCeCostCategoryArgsRuleRuleAndOrCostCategory;
  dimension?: AwsCeCostCategoryArgsRuleRuleAndOrDimension;
  tags?: AwsCeCostCategoryArgsRuleRuleAndOrTags;
}

export interface AwsCeCostCategoryArgsRuleRuleAndTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleAnd {
  and?: AwsCeCostCategoryArgsRuleRuleAndAnd[];
  cost_category?: AwsCeCostCategoryArgsRuleRuleAndCostCategory;
  dimension?: AwsCeCostCategoryArgsRuleRuleAndDimension;
  not?: AwsCeCostCategoryArgsRuleRuleAndNot;
  or?: AwsCeCostCategoryArgsRuleRuleAndOr[];
  tags?: AwsCeCostCategoryArgsRuleRuleAndTags;
}

export interface AwsCeCostCategoryArgsRuleRuleCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleNotAndCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleNotAndDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleNotAndTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleNotAnd {
  cost_category?: AwsCeCostCategoryArgsRuleRuleNotAndCostCategory;
  dimension?: AwsCeCostCategoryArgsRuleRuleNotAndDimension;
  tags?: AwsCeCostCategoryArgsRuleRuleNotAndTags;
}

export interface AwsCeCostCategoryArgsRuleRuleNotCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleNotDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleNotNotCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleNotNotDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleNotNotTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleNotNot {
  cost_category?: AwsCeCostCategoryArgsRuleRuleNotNotCostCategory;
  dimension?: AwsCeCostCategoryArgsRuleRuleNotNotDimension;
  tags?: AwsCeCostCategoryArgsRuleRuleNotNotTags;
}

export interface AwsCeCostCategoryArgsRuleRuleNotOrCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleNotOrDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleNotOrTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleNotOr {
  cost_category?: AwsCeCostCategoryArgsRuleRuleNotOrCostCategory;
  dimension?: AwsCeCostCategoryArgsRuleRuleNotOrDimension;
  tags?: AwsCeCostCategoryArgsRuleRuleNotOrTags;
}

export interface AwsCeCostCategoryArgsRuleRuleNotTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleNot {
  and?: AwsCeCostCategoryArgsRuleRuleNotAnd[];
  cost_category?: AwsCeCostCategoryArgsRuleRuleNotCostCategory;
  dimension?: AwsCeCostCategoryArgsRuleRuleNotDimension;
  not?: AwsCeCostCategoryArgsRuleRuleNotNot;
  or?: AwsCeCostCategoryArgsRuleRuleNotOr[];
  tags?: AwsCeCostCategoryArgsRuleRuleNotTags;
}

export interface AwsCeCostCategoryArgsRuleRuleOrAndCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleOrAndDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleOrAndTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleOrAnd {
  cost_category?: AwsCeCostCategoryArgsRuleRuleOrAndCostCategory;
  dimension?: AwsCeCostCategoryArgsRuleRuleOrAndDimension;
  tags?: AwsCeCostCategoryArgsRuleRuleOrAndTags;
}

export interface AwsCeCostCategoryArgsRuleRuleOrCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleOrDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleOrNotCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleOrNotDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleOrNotTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleOrNot {
  cost_category?: AwsCeCostCategoryArgsRuleRuleOrNotCostCategory;
  dimension?: AwsCeCostCategoryArgsRuleRuleOrNotDimension;
  tags?: AwsCeCostCategoryArgsRuleRuleOrNotTags;
}

export interface AwsCeCostCategoryArgsRuleRuleOrOrCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleOrOrDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleOrOrTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleOrOr {
  cost_category?: AwsCeCostCategoryArgsRuleRuleOrOrCostCategory;
  dimension?: AwsCeCostCategoryArgsRuleRuleOrOrDimension;
  tags?: AwsCeCostCategoryArgsRuleRuleOrOrTags;
}

export interface AwsCeCostCategoryArgsRuleRuleOrTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRuleOr {
  and?: AwsCeCostCategoryArgsRuleRuleOrAnd[];
  cost_category?: AwsCeCostCategoryArgsRuleRuleOrCostCategory;
  dimension?: AwsCeCostCategoryArgsRuleRuleOrDimension;
  not?: AwsCeCostCategoryArgsRuleRuleOrNot;
  or?: AwsCeCostCategoryArgsRuleRuleOrOr[];
  tags?: AwsCeCostCategoryArgsRuleRuleOrTags;
}

export interface AwsCeCostCategoryArgsRuleRuleTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeCostCategoryArgsRuleRule {
  and?: AwsCeCostCategoryArgsRuleRuleAnd[];
  cost_category?: AwsCeCostCategoryArgsRuleRuleCostCategory;
  dimension?: AwsCeCostCategoryArgsRuleRuleDimension;
  not?: AwsCeCostCategoryArgsRuleRuleNot;
  or?: AwsCeCostCategoryArgsRuleRuleOr[];
  tags?: AwsCeCostCategoryArgsRuleRuleTags;
}

export interface AwsCeCostCategoryArgsRule {
  type?: string;
  value?: string;
  inherited_value?: AwsCeCostCategoryArgsRuleInheritedValue;
  rule?: AwsCeCostCategoryArgsRuleRule;
}

export interface AwsCeCostCategoryArgsSplitChargeRuleParameter {
  type?: string;
  values?: string[];
}

export interface AwsCeCostCategoryArgsSplitChargeRule {
  method: string;
  source: string;
  targets: string[];
  parameter?: AwsCeCostCategoryArgsSplitChargeRuleParameter[];
}

export interface AwsCeCostCategoryArgs {
  default_value?: string;
  name: string;
  rule_version: string;
  tags?: { [key: string]: string };
  rule: AwsCeCostCategoryArgsRule[];
  split_charge_rule?: AwsCeCostCategoryArgsSplitChargeRule[];
}

export class aws_ce_cost_category extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCeCostCategoryArgs) {
    const meta = {rule:{isBlock:true,inherited_value:{isBlock:true},rule:{isBlock:true,and:{isBlock:true,and:{isBlock:true,cost_category:{isBlock:true},dimension:{isBlock:true},tags:{isBlock:true}},cost_category:{isBlock:true},dimension:{isBlock:true},not:{isBlock:true,cost_category:{isBlock:true},dimension:{isBlock:true},tags:{isBlock:true}},or:{isBlock:true,cost_category:{isBlock:true},dimension:{isBlock:true},tags:{isBlock:true}},tags:{isBlock:true}},cost_category:{isBlock:true},dimension:{isBlock:true},not:{isBlock:true,and:{isBlock:true,cost_category:{isBlock:true},dimension:{isBlock:true},tags:{isBlock:true}},cost_category:{isBlock:true},dimension:{isBlock:true},not:{isBlock:true,cost_category:{isBlock:true},dimension:{isBlock:true},tags:{isBlock:true}},or:{isBlock:true,cost_category:{isBlock:true},dimension:{isBlock:true},tags:{isBlock:true}},tags:{isBlock:true}},or:{isBlock:true,and:{isBlock:true,cost_category:{isBlock:true},dimension:{isBlock:true},tags:{isBlock:true}},cost_category:{isBlock:true},dimension:{isBlock:true},not:{isBlock:true,cost_category:{isBlock:true},dimension:{isBlock:true},tags:{isBlock:true}},or:{isBlock:true,cost_category:{isBlock:true},dimension:{isBlock:true},tags:{isBlock:true}},tags:{isBlock:true}},tags:{isBlock:true}}},split_charge_rule:{isBlock:true,parameter:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_ce_cost_category", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get effective_end(): string {
    return `${this.resourceType}.${this.resourceName}.effective_end`;
  }

  get effective_start(): string {
    return `${this.resourceType}.${this.resourceName}.effective_start`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get rule_version(): string {
    return `${this.resourceType}.${this.resourceName}.rule_version`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
