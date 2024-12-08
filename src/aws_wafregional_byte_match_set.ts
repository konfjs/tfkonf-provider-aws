import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafregionalByteMatchSetArgsByteMatchTuplesFieldToMatch {
  data?: string;
  type: string;
}

export interface AwsWafregionalByteMatchSetArgsByteMatchTuples {
  positional_constraint: string;
  target_string?: string;
  text_transformation: string;
  field_to_match: AwsWafregionalByteMatchSetArgsByteMatchTuplesFieldToMatch;
}

export interface AwsWafregionalByteMatchSetArgs {
  name: string;
  byte_match_tuples?: AwsWafregionalByteMatchSetArgsByteMatchTuples[];
}

export class aws_wafregional_byte_match_set extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsWafregionalByteMatchSetArgs) {
    const meta = {byte_match_tuples:{isBlock:true,field_to_match:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_wafregional_byte_match_set", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
