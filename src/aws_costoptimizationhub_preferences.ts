import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCostoptimizationhubPreferencesArgs {
}

export class aws_costoptimizationhub_preferences extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCostoptimizationhubPreferencesArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_costoptimizationhub_preferences", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get member_account_discount_visibility(): string {
    return `${this.resourceType}.${this.resourceName}.member_account_discount_visibility`;
  }

  get savings_estimation_mode(): string {
    return `${this.resourceType}.${this.resourceName}.savings_estimation_mode`;
  }
}
