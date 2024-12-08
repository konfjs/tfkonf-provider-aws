import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsVpcSecurityGroupRulesArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsVpcSecurityGroupRulesArgs {
  tags?: { [key: string]: string };
  filter?: DataAwsVpcSecurityGroupRulesArgsFilter[];
}

export class data_aws_vpc_security_group_rules extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsVpcSecurityGroupRulesArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_vpc_security_group_rules", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }
}
