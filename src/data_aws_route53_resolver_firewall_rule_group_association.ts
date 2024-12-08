import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRoute53ResolverFirewallRuleGroupAssociationArgs {
  firewall_rule_group_association_id: string;
}

export class data_aws_route53_resolver_firewall_rule_group_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsRoute53ResolverFirewallRuleGroupAssociationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_route53_resolver_firewall_rule_group_association", resourceName);
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

  get firewall_rule_group_association_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.firewall_rule_group_association_id`;
  }

  get firewall_rule_group_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.firewall_rule_group_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get managed_owner_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.managed_owner_name`;
  }

  get modification_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.modification_time`;
  }

  get mutation_protection(): string {
    return `data.${this.resourceType}.${this.resourceName}.mutation_protection`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get priority(): string {
    return `data.${this.resourceType}.${this.resourceName}.priority`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get status_message(): string {
    return `data.${this.resourceType}.${this.resourceName}.status_message`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
