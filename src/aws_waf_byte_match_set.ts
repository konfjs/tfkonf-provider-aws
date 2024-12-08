import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafByteMatchSetArgsByteMatchTuplesFieldToMatch {
  data?: string;
  type: string;
}

export interface AwsWafByteMatchSetArgsByteMatchTuples {
  positional_constraint: string;
  target_string?: string;
  text_transformation: string;
  field_to_match: AwsWafByteMatchSetArgsByteMatchTuplesFieldToMatch;
}

export interface AwsWafByteMatchSetArgs {
  name: string;
  byte_match_tuples?: AwsWafByteMatchSetArgsByteMatchTuples[];
}

export class aws_waf_byte_match_set extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsWafByteMatchSetArgs) {
    const meta = {byte_match_tuples:{isBlock:true,field_to_match:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_waf_byte_match_set", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
