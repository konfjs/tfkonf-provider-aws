import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TransitGatewayVpcAttachmentAccepterArgs {
  tags?: { [key: string]: string };
  transit_gateway_attachment_id: string;
  transit_gateway_default_route_table_association?: boolean;
  transit_gateway_default_route_table_propagation?: boolean;
}

export class aws_ec2_transit_gateway_vpc_attachment_accepter extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2TransitGatewayVpcAttachmentAccepterArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ec2_transit_gateway_vpc_attachment_accepter", resourceName);
  }

  get appliance_mode_support(): string {
    return `${this.resourceType}.${this.resourceName}.appliance_mode_support`;
  }

  get dns_support(): string {
    return `${this.resourceType}.${this.resourceName}.dns_support`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ipv6_support(): string {
    return `${this.resourceType}.${this.resourceName}.ipv6_support`;
  }

  get security_group_referencing_support(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_referencing_support`;
  }

  get subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_ids`;
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

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }

  get vpc_owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_owner_id`;
  }
}
