import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TransitGatewayDefaultRouteTableAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsEc2TransitGatewayDefaultRouteTableAssociationArgs {
  transit_gateway_id: string;
  transit_gateway_route_table_id: string;
  timeouts?: AwsEc2TransitGatewayDefaultRouteTableAssociationArgsTimeouts;
}

export class aws_ec2_transit_gateway_default_route_table_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayDefaultRouteTableAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ec2_transit_gateway_default_route_table_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get original_default_route_table_id(): string {
    return `${this.resourceType}.${this.resourceName}.original_default_route_table_id`;
  }

  get transit_gateway_id(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_id`;
  }

  get transit_gateway_route_table_id(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_route_table_id`;
  }
}
