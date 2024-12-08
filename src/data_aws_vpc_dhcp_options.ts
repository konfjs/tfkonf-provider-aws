import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsVpcDhcpOptionsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsVpcDhcpOptionsArgsTimeouts {
  read?: string;
}

export interface DataAwsVpcDhcpOptionsArgs {
  filter?: DataAwsVpcDhcpOptionsArgsFilter[];
  timeouts?: DataAwsVpcDhcpOptionsArgsTimeouts;
}

export class data_aws_vpc_dhcp_options extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsVpcDhcpOptionsArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_vpc_dhcp_options", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get dhcp_options_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.dhcp_options_id`;
  }

  get domain_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get domain_name_servers(): string {
    return `data.${this.resourceType}.${this.resourceName}.domain_name_servers`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ipv6_address_preferred_lease_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.ipv6_address_preferred_lease_time`;
  }

  get netbios_name_servers(): string {
    return `data.${this.resourceType}.${this.resourceName}.netbios_name_servers`;
  }

  get netbios_node_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.netbios_node_type`;
  }

  get ntp_servers(): string {
    return `data.${this.resourceType}.${this.resourceName}.ntp_servers`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
