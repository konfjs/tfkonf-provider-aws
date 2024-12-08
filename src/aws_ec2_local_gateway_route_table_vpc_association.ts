import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2LocalGatewayRouteTableVpcAssociationArgs {
  local_gateway_route_table_id: string;
  tags?: { [key: string]: string };
  vpc_id: string;
}

export class aws_ec2_local_gateway_route_table_vpc_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2LocalGatewayRouteTableVpcAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ec2_local_gateway_route_table_vpc_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get local_gateway_id(): string {
    return `${this.resourceType}.${this.resourceName}.local_gateway_id`;
  }

  get local_gateway_route_table_id(): string {
    return `${this.resourceType}.${this.resourceName}.local_gateway_route_table_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
