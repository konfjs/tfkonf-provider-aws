import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafRegexPatternSetArgs {
  name: string;
  regex_pattern_strings?: string[];
}

export class aws_waf_regex_pattern_set extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsWafRegexPatternSetArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_waf_regex_pattern_set", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
