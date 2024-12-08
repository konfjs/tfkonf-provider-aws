import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsBudgetsBudgetArgs {
  name: string;
  name_prefix?: string;
}

export class data_aws_budgets_budget extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsBudgetsBudgetArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_budgets_budget", resourceName);
  }

  get account_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.account_id`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get auto_adjust_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.auto_adjust_data`;
  }

  get budget_exceeded(): string {
    return `data.${this.resourceType}.${this.resourceName}.budget_exceeded`;
  }

  get budget_limit(): string {
    return `data.${this.resourceType}.${this.resourceName}.budget_limit`;
  }

  get budget_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.budget_type`;
  }

  get calculated_spend(): string {
    return `data.${this.resourceType}.${this.resourceName}.calculated_spend`;
  }

  get cost_filter(): string {
    return `data.${this.resourceType}.${this.resourceName}.cost_filter`;
  }

  get cost_types(): string {
    return `data.${this.resourceType}.${this.resourceName}.cost_types`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get notification(): string {
    return `data.${this.resourceType}.${this.resourceName}.notification`;
  }

  get planned_limit(): string {
    return `data.${this.resourceType}.${this.resourceName}.planned_limit`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get time_period_end(): string {
    return `data.${this.resourceType}.${this.resourceName}.time_period_end`;
  }

  get time_period_start(): string {
    return `data.${this.resourceType}.${this.resourceName}.time_period_start`;
  }

  get time_unit(): string {
    return `data.${this.resourceType}.${this.resourceName}.time_unit`;
  }
}
