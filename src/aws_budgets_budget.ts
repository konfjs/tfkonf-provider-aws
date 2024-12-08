import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBudgetsBudgetArgsAutoAdjustDataHistoricalOptions {
  budget_adjustment_period: number;
}

export interface AwsBudgetsBudgetArgsAutoAdjustData {
  auto_adjust_type: string;
  historical_options?: AwsBudgetsBudgetArgsAutoAdjustDataHistoricalOptions;
}

export interface AwsBudgetsBudgetArgsCostFilter {
  name: string;
  values: string[];
}

export interface AwsBudgetsBudgetArgsCostTypes {
  include_credit?: boolean;
  include_discount?: boolean;
  include_other_subscription?: boolean;
  include_recurring?: boolean;
  include_refund?: boolean;
  include_subscription?: boolean;
  include_support?: boolean;
  include_tax?: boolean;
  include_upfront?: boolean;
  use_amortized?: boolean;
  use_blended?: boolean;
}

export interface AwsBudgetsBudgetArgsNotification {
  comparison_operator: string;
  notification_type: string;
  subscriber_email_addresses?: string[];
  subscriber_sns_topic_arns?: string[];
  threshold: number;
  threshold_type: string;
}

export interface AwsBudgetsBudgetArgsPlannedLimit {
  amount: string;
  start_time: string;
  unit: string;
}

export interface AwsBudgetsBudgetArgs {
  budget_type: string;
  tags?: { [key: string]: string };
  time_period_end?: string;
  time_unit: string;
  auto_adjust_data?: AwsBudgetsBudgetArgsAutoAdjustData;
  cost_filter?: AwsBudgetsBudgetArgsCostFilter[];
  cost_types?: AwsBudgetsBudgetArgsCostTypes;
  notification?: AwsBudgetsBudgetArgsNotification[];
  planned_limit?: AwsBudgetsBudgetArgsPlannedLimit[];
}

export class aws_budgets_budget extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsBudgetsBudgetArgs) {
    const meta = {auto_adjust_data:{isBlock:true,historical_options:{isBlock:true}},cost_filter:{isBlock:true},cost_types:{isBlock:true},notification:{isBlock:true},planned_limit:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_budgets_budget", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get budget_type(): string {
    return `${this.resourceType}.${this.resourceName}.budget_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get limit_amount(): string {
    return `${this.resourceType}.${this.resourceName}.limit_amount`;
  }

  get limit_unit(): string {
    return `${this.resourceType}.${this.resourceName}.limit_unit`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get time_period_start(): string {
    return `${this.resourceType}.${this.resourceName}.time_period_start`;
  }

  get time_unit(): string {
    return `${this.resourceType}.${this.resourceName}.time_unit`;
  }
}
