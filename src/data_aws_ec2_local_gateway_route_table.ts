import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2LocalGatewayRouteTableArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2LocalGatewayRouteTableArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2LocalGatewayRouteTableArgs {
  filter?: DataAwsEc2LocalGatewayRouteTableArgsFilter[];
  timeouts?: DataAwsEc2LocalGatewayRouteTableArgsTimeouts;
}

export class data_aws_ec2_local_gateway_route_table extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEc2LocalGatewayRouteTableArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_local_gateway_route_table", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get local_gateway_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.local_gateway_id`;
  }

  get local_gateway_route_table_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.local_gateway_route_table_id`;
  }

  get outpost_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.outpost_arn`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
