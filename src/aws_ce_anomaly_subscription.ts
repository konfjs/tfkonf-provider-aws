import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCeAnomalySubscriptionArgsSubscriber {
  address: string;
  type: string;
}

export interface AwsCeAnomalySubscriptionArgsThresholdExpressionAndCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeAnomalySubscriptionArgsThresholdExpressionAndDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeAnomalySubscriptionArgsThresholdExpressionAndTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeAnomalySubscriptionArgsThresholdExpressionAnd {
  cost_category?: AwsCeAnomalySubscriptionArgsThresholdExpressionAndCostCategory;
  dimension?: AwsCeAnomalySubscriptionArgsThresholdExpressionAndDimension;
  tags?: AwsCeAnomalySubscriptionArgsThresholdExpressionAndTags;
}

export interface AwsCeAnomalySubscriptionArgsThresholdExpressionCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeAnomalySubscriptionArgsThresholdExpressionDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeAnomalySubscriptionArgsThresholdExpressionNotCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeAnomalySubscriptionArgsThresholdExpressionNotDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeAnomalySubscriptionArgsThresholdExpressionNotTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeAnomalySubscriptionArgsThresholdExpressionNot {
  cost_category?: AwsCeAnomalySubscriptionArgsThresholdExpressionNotCostCategory;
  dimension?: AwsCeAnomalySubscriptionArgsThresholdExpressionNotDimension;
  tags?: AwsCeAnomalySubscriptionArgsThresholdExpressionNotTags;
}

export interface AwsCeAnomalySubscriptionArgsThresholdExpressionOrCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeAnomalySubscriptionArgsThresholdExpressionOrDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeAnomalySubscriptionArgsThresholdExpressionOrTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeAnomalySubscriptionArgsThresholdExpressionOr {
  cost_category?: AwsCeAnomalySubscriptionArgsThresholdExpressionOrCostCategory;
  dimension?: AwsCeAnomalySubscriptionArgsThresholdExpressionOrDimension;
  tags?: AwsCeAnomalySubscriptionArgsThresholdExpressionOrTags;
}

export interface AwsCeAnomalySubscriptionArgsThresholdExpressionTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}

export interface AwsCeAnomalySubscriptionArgsThresholdExpression {
  and?: AwsCeAnomalySubscriptionArgsThresholdExpressionAnd[];
  cost_category?: AwsCeAnomalySubscriptionArgsThresholdExpressionCostCategory;
  dimension?: AwsCeAnomalySubscriptionArgsThresholdExpressionDimension;
  not?: AwsCeAnomalySubscriptionArgsThresholdExpressionNot;
  or?: AwsCeAnomalySubscriptionArgsThresholdExpressionOr[];
  tags?: AwsCeAnomalySubscriptionArgsThresholdExpressionTags;
}

export interface AwsCeAnomalySubscriptionArgs {
  frequency: string;
  monitor_arn_list: string[];
  name: string;
  tags?: { [key: string]: string };
  subscriber: AwsCeAnomalySubscriptionArgsSubscriber[];
  threshold_expression?: AwsCeAnomalySubscriptionArgsThresholdExpression;
}

export class aws_ce_anomaly_subscription extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCeAnomalySubscriptionArgs) {
    const meta = {subscriber:{isBlock:true},threshold_expression:{isBlock:true,and:{isBlock:true,cost_category:{isBlock:true},dimension:{isBlock:true},tags:{isBlock:true}},cost_category:{isBlock:true},dimension:{isBlock:true},not:{isBlock:true,cost_category:{isBlock:true},dimension:{isBlock:true},tags:{isBlock:true}},or:{isBlock:true,cost_category:{isBlock:true},dimension:{isBlock:true},tags:{isBlock:true}},tags:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_ce_anomaly_subscription", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get frequency(): string {
    return `${this.resourceType}.${this.resourceName}.frequency`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get monitor_arn_list(): string {
    return `${this.resourceType}.${this.resourceName}.monitor_arn_list`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
