import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRoute53ResolverRuleArgs {
}

export class data_aws_route53_resolver_rule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsRoute53ResolverRuleArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_route53_resolver_rule", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get domain_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get resolver_endpoint_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.resolver_endpoint_id`;
  }

  get resolver_rule_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.resolver_rule_id`;
  }

  get rule_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.rule_type`;
  }

  get share_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.share_status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
