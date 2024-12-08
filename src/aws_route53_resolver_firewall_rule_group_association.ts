import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53ResolverFirewallRuleGroupAssociationArgs {
  firewall_rule_group_id: string;
  name: string;
  priority: number;
  tags?: { [key: string]: string };
  vpc_id: string;
}

export class aws_route53_resolver_firewall_rule_group_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRoute53ResolverFirewallRuleGroupAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53_resolver_firewall_rule_group_association", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get firewall_rule_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.firewall_rule_group_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get mutation_protection(): string {
    return `${this.resourceType}.${this.resourceName}.mutation_protection`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get priority(): string {
    return `${this.resourceType}.${this.resourceName}.priority`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
