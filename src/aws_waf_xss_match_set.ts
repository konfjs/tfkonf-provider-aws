import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafXssMatchSetArgsXssMatchTuplesFieldToMatch {
  data?: string;
  type: string;
}

export interface AwsWafXssMatchSetArgsXssMatchTuples {
  text_transformation: string;
  field_to_match: AwsWafXssMatchSetArgsXssMatchTuplesFieldToMatch;
}

export interface AwsWafXssMatchSetArgs {
  name: string;
  xss_match_tuples?: AwsWafXssMatchSetArgsXssMatchTuples[];
}

export class aws_waf_xss_match_set extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsWafXssMatchSetArgs) {
    const meta = {xss_match_tuples:{isBlock:true,field_to_match:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_waf_xss_match_set", resourceName);
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
