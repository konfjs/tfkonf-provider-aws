import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecurityGroupRuleArgsTimeouts {
  create?: string;
}

export interface AwsSecurityGroupRuleArgs {
  cidr_blocks?: string[];
  description?: string;
  from_port: number;
  ipv6_cidr_blocks?: string[];
  prefix_list_ids?: string[];
  protocol: string;
  security_group_id: string;
  self?: boolean;
  to_port: number;
  type: string;
  timeouts?: AwsSecurityGroupRuleArgsTimeouts;
}

export class aws_security_group_rule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSecurityGroupRuleArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_security_group_rule", resourceName);
  }

  get from_port(): string {
    return `${this.resourceType}.${this.resourceName}.from_port`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get protocol(): string {
    return `${this.resourceType}.${this.resourceName}.protocol`;
  }

  get security_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_id`;
  }

  get security_group_rule_id(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_rule_id`;
  }

  get source_security_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.source_security_group_id`;
  }

  get to_port(): string {
    return `${this.resourceType}.${this.resourceName}.to_port`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
