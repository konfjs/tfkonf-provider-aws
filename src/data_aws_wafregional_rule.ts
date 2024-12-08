import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsWafregionalRuleArgs {
  name: string;
}

export class data_aws_wafregional_rule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsWafregionalRuleArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_wafregional_rule", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
