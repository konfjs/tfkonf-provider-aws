import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TransitGatewayRouteTableAssociationArgs {
  replace_existing_association?: boolean;
  transit_gateway_attachment_id: string;
  transit_gateway_route_table_id: string;
}

export class aws_ec2_transit_gateway_route_table_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayRouteTableAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ec2_transit_gateway_route_table_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.resource_id`;
  }

  get resource_type(): string {
    return `${this.resourceType}.${this.resourceName}.resource_type`;
  }

  get transit_gateway_attachment_id(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_attachment_id`;
  }

  get transit_gateway_route_table_id(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_route_table_id`;
  }
}
