import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TransitGatewayMulticastGroupMemberArgs {
  group_ip_address: string;
  network_interface_id: string;
  transit_gateway_multicast_domain_id: string;
}

export class aws_ec2_transit_gateway_multicast_group_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2TransitGatewayMulticastGroupMemberArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ec2_transit_gateway_multicast_group_member", resourceName);
  }

  get group_ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.group_ip_address`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get network_interface_id(): string {
    return `${this.resourceType}.${this.resourceName}.network_interface_id`;
  }

  get transit_gateway_multicast_domain_id(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_multicast_domain_id`;
  }
}
