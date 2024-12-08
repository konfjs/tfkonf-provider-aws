import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2LocalGatewayRouteTablesArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2LocalGatewayRouteTablesArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2LocalGatewayRouteTablesArgs {
  filter?: DataAwsEc2LocalGatewayRouteTablesArgsFilter[];
  timeouts?: DataAwsEc2LocalGatewayRouteTablesArgsTimeouts;
}

export class data_aws_ec2_local_gateway_route_tables extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEc2LocalGatewayRouteTablesArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_local_gateway_route_tables", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
