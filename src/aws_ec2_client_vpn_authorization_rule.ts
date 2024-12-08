import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2ClientVpnAuthorizationRuleArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsEc2ClientVpnAuthorizationRuleArgs {
  access_group_id?: string;
  authorize_all_groups?: boolean;
  client_vpn_endpoint_id: string;
  description?: string;
  target_network_cidr: string;
  timeouts?: AwsEc2ClientVpnAuthorizationRuleArgsTimeouts;
}

export class aws_ec2_client_vpn_authorization_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2ClientVpnAuthorizationRuleArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ec2_client_vpn_authorization_rule", resourceName);
  }

  get client_vpn_endpoint_id(): string {
    return `${this.resourceType}.${this.resourceName}.client_vpn_endpoint_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get target_network_cidr(): string {
    return `${this.resourceType}.${this.resourceName}.target_network_cidr`;
  }
}
