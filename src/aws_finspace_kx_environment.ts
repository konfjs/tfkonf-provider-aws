import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFinspaceKxEnvironmentArgsCustomDnsConfiguration {
  custom_dns_server_ip: string;
  custom_dns_server_name: string;
}

export interface AwsFinspaceKxEnvironmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsFinspaceKxEnvironmentArgsTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode {
  code: number;
  type: number;
}

export interface AwsFinspaceKxEnvironmentArgsTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange {
  from: number;
  to: number;
}

export interface AwsFinspaceKxEnvironmentArgsTransitGatewayConfigurationAttachmentNetworkAclConfiguration {
  cidr_block: string;
  protocol: string;
  rule_action: string;
  rule_number: number;
  icmp_type_code?: AwsFinspaceKxEnvironmentArgsTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode;
  port_range?: AwsFinspaceKxEnvironmentArgsTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange;
}

export interface AwsFinspaceKxEnvironmentArgsTransitGatewayConfiguration {
  routable_cidr_space: string;
  transit_gateway_id: string;
  attachment_network_acl_configuration?: AwsFinspaceKxEnvironmentArgsTransitGatewayConfigurationAttachmentNetworkAclConfiguration[];
}

export interface AwsFinspaceKxEnvironmentArgs {
  description?: string;
  kms_key_id: string;
  name: string;
  tags?: { [key: string]: string };
  custom_dns_configuration?: AwsFinspaceKxEnvironmentArgsCustomDnsConfiguration[];
  timeouts?: AwsFinspaceKxEnvironmentArgsTimeouts;
  transit_gateway_configuration?: AwsFinspaceKxEnvironmentArgsTransitGatewayConfiguration;
}

export class aws_finspace_kx_environment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsFinspaceKxEnvironmentArgs) {
    const meta = {custom_dns_configuration:{isBlock:true},timeouts:{isBlock:true},transit_gateway_configuration:{isBlock:true,attachment_network_acl_configuration:{isBlock:true,icmp_type_code:{isBlock:true},port_range:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_finspace_kx_environment", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zones(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zones`;
  }

  get created_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.created_timestamp`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get infrastructure_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.infrastructure_account_id`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get last_modified_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified_timestamp`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
