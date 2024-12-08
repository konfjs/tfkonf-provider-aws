import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafregionalRuleGroupArgsActivatedRuleAction {
  type: string;
}

export interface AwsWafregionalRuleGroupArgsActivatedRule {
  priority: number;
  rule_id: string;
  type?: string;
  action: AwsWafregionalRuleGroupArgsActivatedRuleAction;
}

export interface AwsWafregionalRuleGroupArgs {
  metric_name: string;
  name: string;
  tags?: { [key: string]: string };
  activated_rule?: AwsWafregionalRuleGroupArgsActivatedRule[];
}

export class aws_wafregional_rule_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsWafregionalRuleGroupArgs) {
    const meta = {activated_rule:{isBlock:true,action:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_wafregional_rule_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get metric_name(): string {
    return `${this.resourceType}.${this.resourceName}.metric_name`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
