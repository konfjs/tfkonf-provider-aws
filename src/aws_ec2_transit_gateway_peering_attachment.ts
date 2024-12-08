import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TransitGatewayPeeringAttachmentArgsOptions {
  dynamic_routing?: string;
}

export interface AwsEc2TransitGatewayPeeringAttachmentArgs {
  peer_region: string;
  peer_transit_gateway_id: string;
  tags?: { [key: string]: string };
  transit_gateway_id: string;
  options?: AwsEc2TransitGatewayPeeringAttachmentArgsOptions;
}

export class aws_ec2_transit_gateway_peering_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayPeeringAttachmentArgs) {
    const meta = {options:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ec2_transit_gateway_peering_attachment", resourceName);
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

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get transit_gateway_id(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_id`;
  }
}
