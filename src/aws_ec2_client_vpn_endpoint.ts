import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2ClientVpnEndpointArgsAuthenticationOptions {
  active_directory_id?: string;
  root_certificate_chain_arn?: string;
  saml_provider_arn?: string;
  self_service_saml_provider_arn?: string;
  type: string;
}

export interface AwsEc2ClientVpnEndpointArgsClientConnectOptions {
}

export interface AwsEc2ClientVpnEndpointArgsClientLoginBannerOptions {
}

export interface AwsEc2ClientVpnEndpointArgsConnectionLogOptions {
  cloudwatch_log_group?: string;
  enabled: boolean;
}

export interface AwsEc2ClientVpnEndpointArgs {
  client_cidr_block: string;
  description?: string;
  dns_servers?: string[];
  self_service_portal?: string;
  server_certificate_arn: string;
  session_timeout_hours?: number;
  split_tunnel?: boolean;
  tags?: { [key: string]: string };
  transport_protocol?: string;
  vpn_port?: number;
  authentication_options: AwsEc2ClientVpnEndpointArgsAuthenticationOptions[];
  client_connect_options?: AwsEc2ClientVpnEndpointArgsClientConnectOptions;
  client_login_banner_options?: AwsEc2ClientVpnEndpointArgsClientLoginBannerOptions;
  connection_log_options: AwsEc2ClientVpnEndpointArgsConnectionLogOptions;
}

export class aws_ec2_client_vpn_endpoint extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2ClientVpnEndpointArgs) {
    const meta = {authentication_options:{isBlock:true},client_connect_options:{isBlock:true},client_login_banner_options:{isBlock:true},connection_log_options:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ec2_client_vpn_endpoint", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get client_cidr_block(): string {
    return `${this.resourceType}.${this.resourceName}.client_cidr_block`;
  }

  get dns_name(): string {
    return `${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get self_service_portal_url(): string {
    return `${this.resourceType}.${this.resourceName}.self_service_portal_url`;
  }

  get server_certificate_arn(): string {
    return `${this.resourceType}.${this.resourceName}.server_certificate_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
