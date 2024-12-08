import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2TransitGatewayRouteTableArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2TransitGatewayRouteTableArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2TransitGatewayRouteTableArgs {
  filter?: DataAwsEc2TransitGatewayRouteTableArgsFilter[];
  timeouts?: DataAwsEc2TransitGatewayRouteTableArgsTimeouts;
}

export class data_aws_ec2_transit_gateway_route_table extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEc2TransitGatewayRouteTableArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_transit_gateway_route_table", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get default_association_route_table(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_association_route_table`;
  }

  get default_propagation_route_table(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_propagation_route_table`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get transit_gateway_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.transit_gateway_id`;
  }
}
