import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53ResolverFirewallRuleGroupArgs {
  name: string;
  tags?: { [key: string]: string };
}

export class aws_route53_resolver_firewall_rule_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRoute53ResolverFirewallRuleGroupArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53_resolver_firewall_rule_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get share_status(): string {
    return `${this.resourceType}.${this.resourceName}.share_status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
