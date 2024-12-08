import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpnConnectionRouteArgs {
  destination_cidr_block: string;
  vpn_connection_id: string;
}

export class aws_vpn_connection_route extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpnConnectionRouteArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_vpn_connection_route", resourceName);
  }

  get destination_cidr_block(): string {
    return `${this.resourceType}.${this.resourceName}.destination_cidr_block`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get vpn_connection_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpn_connection_id`;
  }
}
