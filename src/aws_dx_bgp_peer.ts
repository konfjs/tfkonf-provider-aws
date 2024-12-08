import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDxBgpPeerArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsDxBgpPeerArgs {
  address_family: string;
  bgp_asn: number;
  virtual_interface_id: string;
  timeouts?: AwsDxBgpPeerArgsTimeouts;
}

export class aws_dx_bgp_peer extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDxBgpPeerArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_dx_bgp_peer", resourceName);
  }

  get address_family(): string {
    return `${this.resourceType}.${this.resourceName}.address_family`;
  }

  get amazon_address(): string {
    return `${this.resourceType}.${this.resourceName}.amazon_address`;
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

  get bgp_peer_id(): string {
    return `${this.resourceType}.${this.resourceName}.bgp_peer_id`;
  }

  get bgp_status(): string {
    return `${this.resourceType}.${this.resourceName}.bgp_status`;
  }

  get customer_address(): string {
    return `${this.resourceType}.${this.resourceName}.customer_address`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get virtual_interface_id(): string {
    return `${this.resourceType}.${this.resourceName}.virtual_interface_id`;
  }
}
