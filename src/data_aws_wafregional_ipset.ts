import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsWafregionalIpsetArgs {
  name: string;
}

export class data_aws_wafregional_ipset extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsWafregionalIpsetArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_wafregional_ipset", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}