import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafregionalSqlInjectionMatchSetArgsSqlInjectionMatchTupleFieldToMatch {
  data?: string;
  type: string;
}

export interface AwsWafregionalSqlInjectionMatchSetArgsSqlInjectionMatchTuple {
  text_transformation: string;
  field_to_match: AwsWafregionalSqlInjectionMatchSetArgsSqlInjectionMatchTupleFieldToMatch;
}

export interface AwsWafregionalSqlInjectionMatchSetArgs {
  name: string;
  sql_injection_match_tuple?: AwsWafregionalSqlInjectionMatchSetArgsSqlInjectionMatchTuple[];
}

export class aws_wafregional_sql_injection_match_set extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsWafregionalSqlInjectionMatchSetArgs) {
    const meta = {sql_injection_match_tuple:{isBlock:true,field_to_match:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_wafregional_sql_injection_match_set", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
