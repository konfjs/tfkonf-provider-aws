import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2ClientVpnNetworkAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsEc2ClientVpnNetworkAssociationArgs {
  client_vpn_endpoint_id: string;
  subnet_id: string;
  timeouts?: AwsEc2ClientVpnNetworkAssociationArgsTimeouts;
}

export class aws_ec2_client_vpn_network_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEc2ClientVpnNetworkAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ec2_client_vpn_network_association", resourceName);
  }

  get association_id(): string {
    return `${this.resourceType}.${this.resourceName}.association_id`;
  }

  get client_vpn_endpoint_id(): string {
    return `${this.resourceType}.${this.resourceName}.client_vpn_endpoint_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get subnet_id(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_id`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
