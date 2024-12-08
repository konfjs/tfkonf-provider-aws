import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRoute53ResolverFirewallRulesArgs {
  action?: string;
  firewall_rule_group_id: string;
  priority?: number;
}

export class data_aws_route53_resolver_firewall_rules extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsRoute53ResolverFirewallRulesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_route53_resolver_firewall_rules", resourceName);
  }

  get firewall_rule_group_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.firewall_rule_group_id`;
  }

  get firewall_rules(): string {
    return `data.${this.resourceType}.${this.resourceName}.firewall_rules`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
