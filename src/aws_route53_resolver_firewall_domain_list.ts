import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53ResolverFirewallDomainListArgs {
  domains?: string[];
  name: string;
  tags?: { [key: string]: string };
}

export class aws_route53_resolver_firewall_domain_list extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRoute53ResolverFirewallDomainListArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53_resolver_firewall_domain_list", resourceName);
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

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
