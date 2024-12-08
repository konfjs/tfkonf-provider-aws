import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRoute53ResolverRulesArgs {
  name_regex?: string;
  owner_id?: string;
  resolver_endpoint_id?: string;
  rule_type?: string;
  share_status?: string;
}

export class data_aws_route53_resolver_rules extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsRoute53ResolverRulesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_route53_resolver_rules", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get resolver_rule_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.resolver_rule_ids`;
  }
}
