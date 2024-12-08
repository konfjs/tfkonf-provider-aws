import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmanagerTransitGatewayConnectPeerAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsNetworkmanagerTransitGatewayConnectPeerAssociationArgs {
  device_id: string;
  global_network_id: string;
  link_id?: string;
  transit_gateway_connect_peer_arn: string;
  timeouts?: AwsNetworkmanagerTransitGatewayConnectPeerAssociationArgsTimeouts;
}

export class aws_networkmanager_transit_gateway_connect_peer_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNetworkmanagerTransitGatewayConnectPeerAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_networkmanager_transit_gateway_connect_peer_association", resourceName);
  }

  get device_id(): string {
    return `${this.resourceType}.${this.resourceName}.device_id`;
  }

  get global_network_id(): string {
    return `${this.resourceType}.${this.resourceName}.global_network_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get transit_gateway_connect_peer_arn(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_connect_peer_arn`;
  }
}
