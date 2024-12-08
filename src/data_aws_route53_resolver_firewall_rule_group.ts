import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRoute53ResolverFirewallRuleGroupArgs {
  firewall_rule_group_id: string;
}

export class data_aws_route53_resolver_firewall_rule_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsRoute53ResolverFirewallRuleGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_route53_resolver_firewall_rule_group", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get creation_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get creator_request_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.creator_request_id`;
  }

  get firewall_rule_group_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.firewall_rule_group_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get modification_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.modification_time`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get rule_count(): string {
    return `data.${this.resourceType}.${this.resourceName}.rule_count`;
  }

  get share_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.share_status`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get status_message(): string {
    return `data.${this.resourceType}.${this.resourceName}.status_message`;
  }
}
