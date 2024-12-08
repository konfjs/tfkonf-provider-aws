import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsVpcSecurityGroupRuleArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsVpcSecurityGroupRuleArgs {
  filter?: DataAwsVpcSecurityGroupRuleArgsFilter[];
}

export class data_aws_vpc_security_group_rule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsVpcSecurityGroupRuleArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_vpc_security_group_rule", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get cidr_ipv4(): string {
    return `data.${this.resourceType}.${this.resourceName}.cidr_ipv4`;
  }

  get cidr_ipv6(): string {
    return `data.${this.resourceType}.${this.resourceName}.cidr_ipv6`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get from_port(): string {
    return `data.${this.resourceType}.${this.resourceName}.from_port`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_protocol(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_protocol`;
  }

  get is_egress(): string {
    return `data.${this.resourceType}.${this.resourceName}.is_egress`;
  }

  get prefix_list_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.prefix_list_id`;
  }

  get referenced_security_group_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.referenced_security_group_id`;
  }

  get security_group_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_group_id`;
  }

  get security_group_rule_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_group_rule_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get to_port(): string {
    return `data.${this.resourceType}.${this.resourceName}.to_port`;
  }
}
