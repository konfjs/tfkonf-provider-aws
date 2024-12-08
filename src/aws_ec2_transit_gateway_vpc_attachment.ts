import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TransitGatewayVpcAttachmentArgs {
  appliance_mode_support?: string;
  dns_support?: string;
  ipv6_support?: string;
  subnet_ids: string[];
  tags?: { [key: string]: string };
  transit_gateway_id: string;
  vpc_id: string;
}

export class aws_ec2_transit_gateway_vpc_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayVpcAttachmentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ec2_transit_gateway_vpc_attachment", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
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

  get transit_gateway_default_route_table_association(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_default_route_table_association`;
  }

  get transit_gateway_default_route_table_propagation(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_default_route_table_propagation`;
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
