import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDefaultVpcDhcpOptionsArgs {
  tags?: { [key: string]: string };
}

export class aws_default_vpc_dhcp_options extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDefaultVpcDhcpOptionsArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_default_vpc_dhcp_options", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get domain_name_servers(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name_servers`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ipv6_address_preferred_lease_time(): string {
    return `${this.resourceType}.${this.resourceName}.ipv6_address_preferred_lease_time`;
  }

  get netbios_name_servers(): string {
    return `${this.resourceType}.${this.resourceName}.netbios_name_servers`;
  }

  get netbios_node_type(): string {
    return `${this.resourceType}.${this.resourceName}.netbios_node_type`;
  }

  get ntp_servers(): string {
    return `${this.resourceType}.${this.resourceName}.ntp_servers`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
