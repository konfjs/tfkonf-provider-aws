import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TransitGatewayDefaultRouteTablePropagationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsEc2TransitGatewayDefaultRouteTablePropagationArgs {
  transit_gateway_id: string;
  transit_gateway_route_table_id: string;
  timeouts?: AwsEc2TransitGatewayDefaultRouteTablePropagationArgsTimeouts;
}

export class aws_ec2_transit_gateway_default_route_table_propagation extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayDefaultRouteTablePropagationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ec2_transit_gateway_default_route_table_propagation", resourceName);
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
