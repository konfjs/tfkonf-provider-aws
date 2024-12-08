import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDxHostedPrivateVirtualInterfaceArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsDxHostedPrivateVirtualInterfaceArgs {
  address_family: string;
  bgp_asn: number;
  connection_id: string;
  mtu?: number;
  name: string;
  owner_account_id: string;
  vlan: number;
  timeouts?: AwsDxHostedPrivateVirtualInterfaceArgsTimeouts;
}

export class aws_dx_hosted_private_virtual_interface extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDxHostedPrivateVirtualInterfaceArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_dx_hosted_private_virtual_interface", resourceName);
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

  get owner_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_account_id`;
  }

  get vlan(): string {
    return `${this.resourceType}.${this.resourceName}.vlan`;
  }
}
