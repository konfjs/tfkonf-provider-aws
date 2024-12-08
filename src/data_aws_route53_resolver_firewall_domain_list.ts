import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRoute53ResolverFirewallDomainListArgs {
  firewall_domain_list_id: string;
}

export class data_aws_route53_resolver_firewall_domain_list extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsRoute53ResolverFirewallDomainListArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_route53_resolver_firewall_domain_list", resourceName);
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

  get domain_count(): string {
    return `data.${this.resourceType}.${this.resourceName}.domain_count`;
  }

  get firewall_domain_list_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.firewall_domain_list_id`;
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

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get status_message(): string {
    return `data.${this.resourceType}.${this.resourceName}.status_message`;
  }
}
