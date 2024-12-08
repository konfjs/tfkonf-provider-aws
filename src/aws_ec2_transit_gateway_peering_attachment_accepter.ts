import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TransitGatewayPeeringAttachmentAccepterArgs {
  tags?: { [key: string]: string };
  transit_gateway_attachment_id: string;
}

export class aws_ec2_transit_gateway_peering_attachment_accepter extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2TransitGatewayPeeringAttachmentAccepterArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ec2_transit_gateway_peering_attachment_accepter", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get peer_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.peer_account_id`;
  }

  get peer_region(): string {
    return `${this.resourceType}.${this.resourceName}.peer_region`;
  }

  get peer_transit_gateway_id(): string {
    return `${this.resourceType}.${this.resourceName}.peer_transit_gateway_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get transit_gateway_attachment_id(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_attachment_id`;
  }

  get transit_gateway_id(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_id`;
  }
}
