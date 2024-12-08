import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsWafv2RuleGroupArgs {
  name: string;
  scope: string;
}

export class data_aws_wafv2_rule_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsWafv2RuleGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_wafv2_rule_group", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get scope(): string {
    return `data.${this.resourceType}.${this.resourceName}.scope`;
  }
}
