import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsWafv2RegexPatternSetArgs {
  name: string;
  scope: string;
}

export class data_aws_wafv2_regex_pattern_set extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsWafv2RegexPatternSetArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_wafv2_regex_pattern_set", resourceName);
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

  get regular_expression(): string {
    return `data.${this.resourceType}.${this.resourceName}.regular_expression`;
  }

  get scope(): string {
    return `data.${this.resourceType}.${this.resourceName}.scope`;
  }
}
