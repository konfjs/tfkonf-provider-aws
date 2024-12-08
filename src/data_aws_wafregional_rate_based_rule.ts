import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsWafregionalRateBasedRuleArgs {
  name: string;
}

export class data_aws_wafregional_rate_based_rule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsWafregionalRateBasedRuleArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_wafregional_rate_based_rule", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
