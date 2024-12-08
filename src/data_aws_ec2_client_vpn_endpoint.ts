import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2ClientVpnEndpointArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2ClientVpnEndpointArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2ClientVpnEndpointArgs {
  filter?: DataAwsEc2ClientVpnEndpointArgsFilter[];
  timeouts?: DataAwsEc2ClientVpnEndpointArgsTimeouts;
}

export class data_aws_ec2_client_vpn_endpoint extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEc2ClientVpnEndpointArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_client_vpn_endpoint", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get authentication_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.authentication_options`;
  }

  get client_cidr_block(): string {
    return `data.${this.resourceType}.${this.resourceName}.client_cidr_block`;
  }

  get client_connect_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.client_connect_options`;
  }

  get client_login_banner_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.client_login_banner_options`;
  }

  get client_vpn_endpoint_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.client_vpn_endpoint_id`;
  }

  get connection_log_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.connection_log_options`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get dns_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get dns_servers(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_servers`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get security_group_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get self_service_portal(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_service_portal`;
  }

  get self_service_portal_url(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_service_portal_url`;
  }

  get server_certificate_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.server_certificate_arn`;
  }

  get session_timeout_hours(): string {
    return `data.${this.resourceType}.${this.resourceName}.session_timeout_hours`;
  }

  get split_tunnel(): string {
    return `data.${this.resourceType}.${this.resourceName}.split_tunnel`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get transport_protocol(): string {
    return `data.${this.resourceType}.${this.resourceName}.transport_protocol`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }

  get vpn_port(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpn_port`;
  }
}
