import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmanagerTransitGatewayRegistrationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsNetworkmanagerTransitGatewayRegistrationArgs {
  global_network_id: string;
  transit_gateway_arn: string;
  timeouts?: AwsNetworkmanagerTransitGatewayRegistrationArgsTimeouts;
}

export class aws_networkmanager_transit_gateway_registration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsNetworkmanagerTransitGatewayRegistrationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_networkmanager_transit_gateway_registration", resourceName);
  }

  get global_network_id(): string {
    return `${this.resourceType}.${this.resourceName}.global_network_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get transit_gateway_arn(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_arn`;
  }
}
