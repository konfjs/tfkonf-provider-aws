import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafRuleGroupArgsActivatedRuleAction {
  type: string;
}

export interface AwsWafRuleGroupArgsActivatedRule {
  priority: number;
  rule_id: string;
  type?: string;
  action: AwsWafRuleGroupArgsActivatedRuleAction;
}

export interface AwsWafRuleGroupArgs {
  metric_name: string;
  name: string;
  tags?: { [key: string]: string };
  activated_rule?: AwsWafRuleGroupArgsActivatedRule[];
}

export class aws_waf_rule_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsWafRuleGroupArgs) {
    const meta = {activated_rule:{isBlock:true,action:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_waf_rule_group", resourceName);
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
