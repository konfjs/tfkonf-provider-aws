import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmanagerConnectPeerArgsBgpOptions {
  peer_asn?: number;
}

export interface AwsNetworkmanagerConnectPeerArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsNetworkmanagerConnectPeerArgs {
  connect_attachment_id: string;
  core_network_address?: string;
  inside_cidr_blocks?: string[];
  peer_address: string;
  subnet_arn?: string;
  tags?: { [key: string]: string };
  bgp_options?: AwsNetworkmanagerConnectPeerArgsBgpOptions;
  timeouts?: AwsNetworkmanagerConnectPeerArgsTimeouts;
}

export class aws_networkmanager_connect_peer extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNetworkmanagerConnectPeerArgs) {
    const meta = {bgp_options:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_networkmanager_connect_peer", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get configuration(): string {
    return `${this.resourceType}.${this.resourceName}.configuration`;
  }

  get connect_attachment_id(): string {
    return `${this.resourceType}.${this.resourceName}.connect_attachment_id`;
  }

  get connect_peer_id(): string {
    return `${this.resourceType}.${this.resourceName}.connect_peer_id`;
  }

  get core_network_id(): string {
    return `${this.resourceType}.${this.resourceName}.core_network_id`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get edge_location(): string {
    return `${this.resourceType}.${this.resourceName}.edge_location`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get peer_address(): string {
    return `${this.resourceType}.${this.resourceName}.peer_address`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
