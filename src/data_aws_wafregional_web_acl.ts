import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsWafregionalWebAclArgs {
  name: string;
}

export class data_aws_wafregional_web_acl extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsWafregionalWebAclArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_wafregional_web_acl", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
