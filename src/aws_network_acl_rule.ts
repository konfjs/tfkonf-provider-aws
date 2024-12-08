import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkAclRuleArgs {
  cidr_block?: string;
  egress?: boolean;
  from_port?: number;
  icmp_code?: number;
  icmp_type?: number;
  ipv6_cidr_block?: string;
  network_acl_id: string;
  protocol: string;
  rule_action: string;
  rule_number: number;
  to_port?: number;
}

export class aws_network_acl_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNetworkAclRuleArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_network_acl_rule", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get network_acl_id(): string {
    return `${this.resourceType}.${this.resourceName}.network_acl_id`;
  }

  get protocol(): string {
    return `${this.resourceType}.${this.resourceName}.protocol`;
  }

  get rule_action(): string {
    return `${this.resourceType}.${this.resourceName}.rule_action`;
  }

  get rule_number(): string {
    return `${this.resourceType}.${this.resourceName}.rule_number`;
  }
}
