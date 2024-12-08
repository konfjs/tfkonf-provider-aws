import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53ResolverFirewallRuleArgs {
  action: string;
  block_override_dns_type?: string;
  block_override_domain?: string;
  block_override_ttl?: number;
  block_response?: string;
  firewall_domain_list_id: string;
  firewall_domain_redirection_action?: string;
  firewall_rule_group_id: string;
  name: string;
  priority: number;
  q_type?: string;
}

export class aws_route53_resolver_firewall_rule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRoute53ResolverFirewallRuleArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53_resolver_firewall_rule", resourceName);
  }

  get action(): string {
    return `${this.resourceType}.${this.resourceName}.action`;
  }

  get firewall_domain_list_id(): string {
    return `${this.resourceType}.${this.resourceName}.firewall_domain_list_id`;
  }

  get firewall_rule_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.firewall_rule_group_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get priority(): string {
    return `${this.resourceType}.${this.resourceName}.priority`;
  }
}
