import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53ResolverFirewallConfigArgs {
  resource_id: string;
}

export class aws_route53_resolver_firewall_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRoute53ResolverFirewallConfigArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53_resolver_firewall_config", resourceName);
  }

  get firewall_fail_open(): string {
    return `${this.resourceType}.${this.resourceName}.firewall_fail_open`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.resource_id`;
  }
}
