import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsWafIpsetArgs {
  name: string;
}

export class data_aws_waf_ipset extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsWafIpsetArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_waf_ipset", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
