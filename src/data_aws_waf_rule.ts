import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsWafRuleArgs {
  name: string;
}

export class data_aws_waf_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsWafRuleArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_waf_rule", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
