import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafRegexMatchSetArgsRegexMatchTupleFieldToMatch {
  data?: string;
  type: string;
}

export interface AwsWafRegexMatchSetArgsRegexMatchTuple {
  regex_pattern_set_id: string;
  text_transformation: string;
  field_to_match: AwsWafRegexMatchSetArgsRegexMatchTupleFieldToMatch;
}

export interface AwsWafRegexMatchSetArgs {
  name: string;
  regex_match_tuple?: AwsWafRegexMatchSetArgsRegexMatchTuple[];
}

export class aws_waf_regex_match_set extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsWafRegexMatchSetArgs) {
    const meta = {regex_match_tuple:{isBlock:true,field_to_match:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_waf_regex_match_set", resourceName);
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
