import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcDhcpOptionsArgs {
  domain_name?: string;
  domain_name_servers?: string[];
  ipv6_address_preferred_lease_time?: string;
  netbios_name_servers?: string[];
  netbios_node_type?: string;
  ntp_servers?: string[];
  tags?: { [key: string]: string };
}

export class aws_vpc_dhcp_options extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVpcDhcpOptionsArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_vpc_dhcp_options", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
