import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsWafWebAclArgs {
  name: string;
}

export class data_aws_waf_web_acl extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsWafWebAclArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_waf_web_acl", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
