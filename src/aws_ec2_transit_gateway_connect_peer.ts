import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TransitGatewayConnectPeerArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsEc2TransitGatewayConnectPeerArgs {
  inside_cidr_blocks: string[];
  peer_address: string;
  tags?: { [key: string]: string };
  transit_gateway_attachment_id: string;
  timeouts?: AwsEc2TransitGatewayConnectPeerArgsTimeouts;
}

export class aws_ec2_transit_gateway_connect_peer extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2TransitGatewayConnectPeerArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ec2_transit_gateway_connect_peer", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get bgp_asn(): string {
    return `${this.resourceType}.${this.resourceName}.bgp_asn`;
  }

  get bgp_peer_address(): string {
    return `${this.resourceType}.${this.resourceName}.bgp_peer_address`;
  }

  get bgp_transit_gateway_addresses(): string {
    return `${this.resourceType}.${this.resourceName}.bgp_transit_gateway_addresses`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get inside_cidr_blocks(): string {
    return `${this.resourceType}.${this.resourceName}.inside_cidr_blocks`;
  }

  get peer_address(): string {
    return `${this.resourceType}.${this.resourceName}.peer_address`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get transit_gateway_address(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_address`;
  }

  get transit_gateway_attachment_id(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_attachment_id`;
  }
}
