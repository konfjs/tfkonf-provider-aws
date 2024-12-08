import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TransitGatewayRouteArgs {
  blackhole?: boolean;
  destination_cidr_block: string;
  transit_gateway_attachment_id?: string;
  transit_gateway_route_table_id: string;
}

export class aws_ec2_transit_gateway_route extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayRouteArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ec2_transit_gateway_route", resourceName);
  }

  get destination_cidr_block(): string {
    return `${this.resourceType}.${this.resourceName}.destination_cidr_block`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get transit_gateway_route_table_id(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_route_table_id`;
  }
}
