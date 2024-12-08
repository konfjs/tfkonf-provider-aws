import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafregionalRegexPatternSetArgs {
  name: string;
  regex_pattern_strings?: string[];
}

export class aws_wafregional_regex_pattern_set extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsWafregionalRegexPatternSetArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_wafregional_regex_pattern_set", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
