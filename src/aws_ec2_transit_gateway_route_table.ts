import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TransitGatewayRouteTableArgs {
  tags?: { [key: string]: string };
  transit_gateway_id: string;
}

export class aws_ec2_transit_gateway_route_table extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2TransitGatewayRouteTableArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ec2_transit_gateway_route_table", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get default_association_route_table(): string {
    return `${this.resourceType}.${this.resourceName}.default_association_route_table`;
  }

  get default_propagation_route_table(): string {
    return `${this.resourceType}.${this.resourceName}.default_propagation_route_table`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get transit_gateway_id(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_id`;
  }
}
