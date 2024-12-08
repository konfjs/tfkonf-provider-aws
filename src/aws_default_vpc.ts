import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDefaultVpcArgs {
  assign_generated_ipv6_cidr_block?: boolean;
  enable_dns_hostnames?: boolean;
  enable_dns_support?: boolean;
  force_destroy?: boolean;
  ipv6_ipam_pool_id?: string;
  ipv6_netmask_length?: number;
  tags?: { [key: string]: string };
}

export class aws_default_vpc extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDefaultVpcArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_default_vpc", resourceName);
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

  get enable_network_address_usage_metrics(): string {
    return `${this.resourceType}.${this.resourceName}.enable_network_address_usage_metrics`;
  }

  get existing_default_vpc(): string {
    return `${this.resourceType}.${this.resourceName}.existing_default_vpc`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_tenancy(): string {
    return `${this.resourceType}.${this.resourceName}.instance_tenancy`;
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
