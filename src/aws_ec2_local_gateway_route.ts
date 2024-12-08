import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2LocalGatewayRouteArgs {
  destination_cidr_block: string;
  local_gateway_route_table_id: string;
  local_gateway_virtual_interface_group_id: string;
}

export class aws_ec2_local_gateway_route extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2LocalGatewayRouteArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ec2_local_gateway_route", resourceName);
  }

  get destination_cidr_block(): string {
    return `${this.resourceType}.${this.resourceName}.destination_cidr_block`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get local_gateway_route_table_id(): string {
    return `${this.resourceType}.${this.resourceName}.local_gateway_route_table_id`;
  }

  get local_gateway_virtual_interface_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.local_gateway_virtual_interface_group_id`;
  }
}
