import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsWafregionalSubscribedRuleGroupArgs {
  metric_name?: string;
  name?: string;
}

export class data_aws_wafregional_subscribed_rule_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsWafregionalSubscribedRuleGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_wafregional_subscribed_rule_group", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
