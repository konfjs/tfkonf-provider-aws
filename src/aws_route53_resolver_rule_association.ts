import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53ResolverRuleAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsRoute53ResolverRuleAssociationArgs {
  name?: string;
  resolver_rule_id: string;
  vpc_id: string;
  timeouts?: AwsRoute53ResolverRuleAssociationArgsTimeouts;
}

export class aws_route53_resolver_rule_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRoute53ResolverRuleAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_route53_resolver_rule_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get resolver_rule_id(): string {
    return `${this.resourceType}.${this.resourceName}.resolver_rule_id`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
