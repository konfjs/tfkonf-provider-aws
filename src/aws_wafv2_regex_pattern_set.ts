import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafv2RegexPatternSetArgsRegularExpression {
  regex_string: string;
}

export interface AwsWafv2RegexPatternSetArgs {
  description?: string;
  name: string;
  scope: string;
  tags?: { [key: string]: string };
  regular_expression?: AwsWafv2RegexPatternSetArgsRegularExpression[];
}

export class aws_wafv2_regex_pattern_set extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsWafv2RegexPatternSetArgs) {
    const meta = {regular_expression:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_wafv2_regex_pattern_set", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get lock_token(): string {
    return `${this.resourceType}.${this.resourceName}.lock_token`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get scope(): string {
    return `${this.resourceType}.${this.resourceName}.scope`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
