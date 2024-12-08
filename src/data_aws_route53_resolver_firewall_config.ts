import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRoute53ResolverFirewallConfigArgs {
  resource_id: string;
}

export class data_aws_route53_resolver_firewall_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsRoute53ResolverFirewallConfigArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_route53_resolver_firewall_config", resourceName);
  }

  get firewall_fail_open(): string {
    return `data.${this.resourceType}.${this.resourceName}.firewall_fail_open`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get resource_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_id`;
  }
}
