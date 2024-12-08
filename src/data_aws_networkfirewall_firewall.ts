import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsNetworkfirewallFirewallArgs {
}

export class data_aws_networkfirewall_firewall extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsNetworkfirewallFirewallArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_networkfirewall_firewall", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get delete_protection(): string {
    return `data.${this.resourceType}.${this.resourceName}.delete_protection`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get encryption_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.encryption_configuration`;
  }

  get firewall_policy_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.firewall_policy_arn`;
  }

  get firewall_policy_change_protection(): string {
    return `data.${this.resourceType}.${this.resourceName}.firewall_policy_change_protection`;
  }

  get firewall_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.firewall_status`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get subnet_change_protection(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_change_protection`;
  }

  get subnet_mapping(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_mapping`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get update_token(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_token`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
