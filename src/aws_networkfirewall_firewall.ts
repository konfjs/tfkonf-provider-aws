import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkfirewallFirewallArgsEncryptionConfiguration {
  key_id?: string;
  type: string;
}

export interface AwsNetworkfirewallFirewallArgsSubnetMapping {
  subnet_id: string;
}

export interface AwsNetworkfirewallFirewallArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsNetworkfirewallFirewallArgs {
  delete_protection?: boolean;
  description?: string;
  firewall_policy_arn: string;
  firewall_policy_change_protection?: boolean;
  name: string;
  subnet_change_protection?: boolean;
  tags?: { [key: string]: string };
  vpc_id: string;
  encryption_configuration?: AwsNetworkfirewallFirewallArgsEncryptionConfiguration;
  subnet_mapping: AwsNetworkfirewallFirewallArgsSubnetMapping[];
  timeouts?: AwsNetworkfirewallFirewallArgsTimeouts;
}

export class aws_networkfirewall_firewall extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsNetworkfirewallFirewallArgs) {
    const meta = {encryption_configuration:{isBlock:true},subnet_mapping:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_networkfirewall_firewall", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get firewall_policy_arn(): string {
    return `${this.resourceType}.${this.resourceName}.firewall_policy_arn`;
  }

  get firewall_status(): string {
    return `${this.resourceType}.${this.resourceName}.firewall_status`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get update_token(): string {
    return `${this.resourceType}.${this.resourceName}.update_token`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
