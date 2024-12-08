import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsVpcArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsVpcArgsTimeouts {
  read?: string;
}

export interface DataAwsVpcArgs {
  filter?: DataAwsVpcArgsFilter[];
  timeouts?: DataAwsVpcArgsTimeouts;
}

export class data_aws_vpc extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsVpcArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_vpc", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get cidr_block(): string {
    return `data.${this.resourceType}.${this.resourceName}.cidr_block`;
  }

  get cidr_block_associations(): string {
    return `data.${this.resourceType}.${this.resourceName}.cidr_block_associations`;
  }

  get default(): string {
    return `data.${this.resourceType}.${this.resourceName}.default`;
  }

  get dhcp_options_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.dhcp_options_id`;
  }

  get enable_dns_hostnames(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_dns_hostnames`;
  }

  get enable_dns_support(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_dns_support`;
  }

  get enable_network_address_usage_metrics(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_network_address_usage_metrics`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_tenancy(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_tenancy`;
  }

  get ipv6_association_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.ipv6_association_id`;
  }

  get ipv6_cidr_block(): string {
    return `data.${this.resourceType}.${this.resourceName}.ipv6_cidr_block`;
  }

  get main_route_table_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.main_route_table_id`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
