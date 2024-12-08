import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafSqlInjectionMatchSetArgsSqlInjectionMatchTuplesFieldToMatch {
  data?: string;
  type: string;
}

export interface AwsWafSqlInjectionMatchSetArgsSqlInjectionMatchTuples {
  text_transformation: string;
  field_to_match: AwsWafSqlInjectionMatchSetArgsSqlInjectionMatchTuplesFieldToMatch;
}

export interface AwsWafSqlInjectionMatchSetArgs {
  name: string;
  sql_injection_match_tuples?: AwsWafSqlInjectionMatchSetArgsSqlInjectionMatchTuples[];
}

export class aws_waf_sql_injection_match_set extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsWafSqlInjectionMatchSetArgs) {
    const meta = {sql_injection_match_tuples:{isBlock:true,field_to_match:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_waf_sql_injection_match_set", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
