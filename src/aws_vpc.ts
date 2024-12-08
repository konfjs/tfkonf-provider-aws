import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcArgs {
  assign_generated_ipv6_cidr_block?: boolean;
  enable_dns_support?: boolean;
  instance_tenancy?: string;
  ipv4_ipam_pool_id?: string;
  ipv4_netmask_length?: number;
  ipv6_ipam_pool_id?: string;
  ipv6_netmask_length?: number;
  tags?: { [key: string]: string };
}

export class aws_vpc extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVpcArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_vpc", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cidr_block(): string {
    return `${this.resourceType}.${this.resourceName}.cidr_block`;
  }

  get default_network_acl_id(): string {
    return `${this.resourceType}.${this.resourceName}.default_network_acl_id`;
  }

  get default_route_table_id(): string {
    return `${this.resourceType}.${this.resourceName}.default_route_table_id`;
  }

  get default_security_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.default_security_group_id`;
  }

  get dhcp_options_id(): string {
    return `${this.resourceType}.${this.resourceName}.dhcp_options_id`;
  }

  get enable_dns_hostnames(): string {
    return `${this.resourceType}.${this.resourceName}.enable_dns_hostnames`;
  }

  get enable_network_address_usage_metrics(): string {
    return `${this.resourceType}.${this.resourceName}.enable_network_address_usage_metrics`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ipv6_association_id(): string {
    return `${this.resourceType}.${this.resourceName}.ipv6_association_id`;
  }

  get ipv6_cidr_block(): string {
    return `${this.resourceType}.${this.resourceName}.ipv6_cidr_block`;
  }

  get ipv6_cidr_block_network_border_group(): string {
    return `${this.resourceType}.${this.resourceName}.ipv6_cidr_block_network_border_group`;
  }

  get main_route_table_id(): string {
    return `${this.resourceType}.${this.resourceName}.main_route_table_id`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
