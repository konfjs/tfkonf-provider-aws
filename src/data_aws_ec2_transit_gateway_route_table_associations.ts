import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2TransitGatewayRouteTableAssociationsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2TransitGatewayRouteTableAssociationsArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2TransitGatewayRouteTableAssociationsArgs {
  transit_gateway_route_table_id: string;
  filter?: DataAwsEc2TransitGatewayRouteTableAssociationsArgsFilter[];
  timeouts?: DataAwsEc2TransitGatewayRouteTableAssociationsArgsTimeouts;
}

export class data_aws_ec2_transit_gateway_route_table_associations extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEc2TransitGatewayRouteTableAssociationsArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_transit_gateway_route_table_associations", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }

  get transit_gateway_route_table_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.transit_gateway_route_table_id`;
  }
}
