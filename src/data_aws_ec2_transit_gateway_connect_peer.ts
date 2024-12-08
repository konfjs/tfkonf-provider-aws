import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2TransitGatewayConnectPeerArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2TransitGatewayConnectPeerArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2TransitGatewayConnectPeerArgs {
  filter?: DataAwsEc2TransitGatewayConnectPeerArgsFilter[];
  timeouts?: DataAwsEc2TransitGatewayConnectPeerArgsTimeouts;
}

export class data_aws_ec2_transit_gateway_connect_peer extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEc2TransitGatewayConnectPeerArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_transit_gateway_connect_peer", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get bgp_asn(): string {
    return `data.${this.resourceType}.${this.resourceName}.bgp_asn`;
  }

  get bgp_peer_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.bgp_peer_address`;
  }

  get bgp_transit_gateway_addresses(): string {
    return `data.${this.resourceType}.${this.resourceName}.bgp_transit_gateway_addresses`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get inside_cidr_blocks(): string {
    return `data.${this.resourceType}.${this.resourceName}.inside_cidr_blocks`;
  }

  get peer_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.peer_address`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get transit_gateway_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.transit_gateway_address`;
  }

  get transit_gateway_attachment_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.transit_gateway_attachment_id`;
  }

  get transit_gateway_connect_peer_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.transit_gateway_connect_peer_id`;
  }
}
