import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TransitGatewayMulticastDomainAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsEc2TransitGatewayMulticastDomainAssociationArgs {
  subnet_id: string;
  transit_gateway_attachment_id: string;
  transit_gateway_multicast_domain_id: string;
  timeouts?: AwsEc2TransitGatewayMulticastDomainAssociationArgsTimeouts;
}

export class aws_ec2_transit_gateway_multicast_domain_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayMulticastDomainAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ec2_transit_gateway_multicast_domain_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get subnet_id(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_id`;
  }

  get transit_gateway_attachment_id(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_attachment_id`;
  }

  get transit_gateway_multicast_domain_id(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_multicast_domain_id`;
  }
}
