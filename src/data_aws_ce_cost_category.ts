import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCeCostCategoryArgs {
  cost_category_arn: string;
}

export class data_aws_ce_cost_category extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsCeCostCategoryArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ce_cost_category", resourceName);
  }

  get cost_category_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.cost_category_arn`;
  }

  get default_value(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_value`;
  }

  get effective_end(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_end`;
  }

  get effective_start(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_start`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get rule(): string {
    return `data.${this.resourceType}.${this.resourceName}.rule`;
  }

  get rule_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.rule_version`;
  }

  get split_charge_rule(): string {
    return `data.${this.resourceType}.${this.resourceName}.split_charge_rule`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
