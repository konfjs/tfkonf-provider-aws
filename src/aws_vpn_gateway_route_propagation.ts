import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpnGatewayRoutePropagationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsVpnGatewayRoutePropagationArgs {
  route_table_id: string;
  vpn_gateway_id: string;
  timeouts?: AwsVpnGatewayRoutePropagationArgsTimeouts;
}

export class aws_vpn_gateway_route_propagation extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVpnGatewayRoutePropagationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpn_gateway_route_propagation", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get route_table_id(): string {
    return `${this.resourceType}.${this.resourceName}.route_table_id`;
  }

  get vpn_gateway_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpn_gateway_id`;
  }
}
