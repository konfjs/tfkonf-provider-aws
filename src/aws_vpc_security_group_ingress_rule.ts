import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcSecurityGroupIngressRuleArgs {
  cidr_ipv4?: string;
  cidr_ipv6?: string;
  description?: string;
  from_port?: number;
  ip_protocol: string;
  prefix_list_id?: string;
  referenced_security_group_id?: string;
  security_group_id: string;
  tags?: { [key: string]: string };
  to_port?: number;
}

export class aws_vpc_security_group_ingress_rule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpcSecurityGroupIngressRuleArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_vpc_security_group_ingress_rule", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_protocol(): string {
    return `${this.resourceType}.${this.resourceName}.ip_protocol`;
  }

  get security_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_id`;
  }

  get security_group_rule_id(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_rule_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
