import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2TransitGatewayRouteTableRoutesArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2TransitGatewayRouteTableRoutesArgs {
  transit_gateway_route_table_id: string;
  filter: DataAwsEc2TransitGatewayRouteTableRoutesArgsFilter[];
}

export class data_aws_ec2_transit_gateway_route_table_routes extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEc2TransitGatewayRouteTableRoutesArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_transit_gateway_route_table_routes", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get routes(): string {
    return `data.${this.resourceType}.${this.resourceName}.routes`;
  }

  get transit_gateway_route_table_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.transit_gateway_route_table_id`;
  }
}
