import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafregionalRegexMatchSetArgsRegexMatchTupleFieldToMatch {
  data?: string;
  type: string;
}

export interface AwsWafregionalRegexMatchSetArgsRegexMatchTuple {
  regex_pattern_set_id: string;
  text_transformation: string;
  field_to_match: AwsWafregionalRegexMatchSetArgsRegexMatchTupleFieldToMatch;
}

export interface AwsWafregionalRegexMatchSetArgs {
  name: string;
  regex_match_tuple?: AwsWafregionalRegexMatchSetArgsRegexMatchTuple[];
}

export class aws_wafregional_regex_match_set extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsWafregionalRegexMatchSetArgs) {
    const meta = {regex_match_tuple:{isBlock:true,field_to_match:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_wafregional_regex_match_set", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
