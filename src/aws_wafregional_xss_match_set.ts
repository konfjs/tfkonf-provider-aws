import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafregionalXssMatchSetArgsXssMatchTupleFieldToMatch {
  data?: string;
  type: string;
}

export interface AwsWafregionalXssMatchSetArgsXssMatchTuple {
  text_transformation: string;
  field_to_match: AwsWafregionalXssMatchSetArgsXssMatchTupleFieldToMatch;
}

export interface AwsWafregionalXssMatchSetArgs {
  name: string;
  xss_match_tuple?: AwsWafregionalXssMatchSetArgsXssMatchTuple[];
}

export class aws_wafregional_xss_match_set extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsWafregionalXssMatchSetArgs) {
    const meta = {xss_match_tuple:{isBlock:true,field_to_match:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_wafregional_xss_match_set", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
