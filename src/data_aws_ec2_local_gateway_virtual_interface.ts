import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2LocalGatewayVirtualInterfaceArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2LocalGatewayVirtualInterfaceArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2LocalGatewayVirtualInterfaceArgs {
  filter?: DataAwsEc2LocalGatewayVirtualInterfaceArgsFilter[];
  timeouts?: DataAwsEc2LocalGatewayVirtualInterfaceArgsTimeouts;
}

export class data_aws_ec2_local_gateway_virtual_interface extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEc2LocalGatewayVirtualInterfaceArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_local_gateway_virtual_interface", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get local_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.local_address`;
  }

  get local_bgp_asn(): string {
    return `data.${this.resourceType}.${this.resourceName}.local_bgp_asn`;
  }

  get local_gateway_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.local_gateway_id`;
  }

  get local_gateway_virtual_interface_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.local_gateway_virtual_interface_ids`;
  }

  get peer_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.peer_address`;
  }

  get peer_bgp_asn(): string {
    return `data.${this.resourceType}.${this.resourceName}.peer_bgp_asn`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get vlan(): string {
    return `data.${this.resourceType}.${this.resourceName}.vlan`;
  }
}
