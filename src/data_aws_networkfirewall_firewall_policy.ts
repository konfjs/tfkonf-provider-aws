import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsNetworkfirewallFirewallPolicyArgs {
  arn?: string;
  name?: string;
}

export class data_aws_networkfirewall_firewall_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsNetworkfirewallFirewallPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_networkfirewall_firewall_policy", resourceName);
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get firewall_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.firewall_policy`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get update_token(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_token`;
  }
}
