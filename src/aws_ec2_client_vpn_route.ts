import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2ClientVpnRouteArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsEc2ClientVpnRouteArgs {
  client_vpn_endpoint_id: string;
  description?: string;
  destination_cidr_block: string;
  target_vpc_subnet_id: string;
  timeouts?: AwsEc2ClientVpnRouteArgsTimeouts;
}

export class aws_ec2_client_vpn_route extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2ClientVpnRouteArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ec2_client_vpn_route", resourceName);
  }

  get client_vpn_endpoint_id(): string {
    return `${this.resourceType}.${this.resourceName}.client_vpn_endpoint_id`;
  }

  get destination_cidr_block(): string {
    return `${this.resourceType}.${this.resourceName}.destination_cidr_block`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get origin(): string {
    return `${this.resourceType}.${this.resourceName}.origin`;
  }

  get target_vpc_subnet_id(): string {
    return `${this.resourceType}.${this.resourceName}.target_vpc_subnet_id`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
