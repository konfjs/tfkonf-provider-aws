import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDxPrivateVirtualInterfaceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDxPrivateVirtualInterfaceArgs {
  address_family: string;
  bgp_asn: number;
  connection_id: string;
  dx_gateway_id?: string;
  mtu?: number;
  name: string;
  sitelink_enabled?: boolean;
  tags?: { [key: string]: string };
  vlan: number;
  vpn_gateway_id?: string;
  timeouts?: AwsDxPrivateVirtualInterfaceArgsTimeouts;
}

export class aws_dx_private_virtual_interface extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDxPrivateVirtualInterfaceArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_dx_private_virtual_interface", resourceName);
  }

  get address_family(): string {
    return `${this.resourceType}.${this.resourceName}.address_family`;
  }

  get amazon_address(): string {
    return `${this.resourceType}.${this.resourceName}.amazon_address`;
  }

  get amazon_side_asn(): string {
    return `${this.resourceType}.${this.resourceName}.amazon_side_asn`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_device(): string {
    return `${this.resourceType}.${this.resourceName}.aws_device`;
  }

  get bgp_asn(): string {
    return `${this.resourceType}.${this.resourceName}.bgp_asn`;
  }

  get bgp_auth_key(): string {
    return `${this.resourceType}.${this.resourceName}.bgp_auth_key`;
  }

  get connection_id(): string {
    return `${this.resourceType}.${this.resourceName}.connection_id`;
  }

  get customer_address(): string {
    return `${this.resourceType}.${this.resourceName}.customer_address`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get jumbo_frame_capable(): string {
    return `${this.resourceType}.${this.resourceName}.jumbo_frame_capable`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vlan(): string {
    return `${this.resourceType}.${this.resourceName}.vlan`;
  }
}
