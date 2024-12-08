import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53ResolverRuleArgsTargetIp {
  ip?: string;
  ipv6?: string;
  port?: number;
  protocol?: string;
}

export interface AwsRoute53ResolverRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsRoute53ResolverRuleArgs {
  domain_name: string;
  name?: string;
  resolver_endpoint_id?: string;
  rule_type: string;
  tags?: { [key: string]: string };
  target_ip?: AwsRoute53ResolverRuleArgsTargetIp[];
  timeouts?: AwsRoute53ResolverRuleArgsTimeouts;
}

export class aws_route53_resolver_rule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRoute53ResolverRuleArgs) {
    const meta = {target_ip:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_route53_resolver_rule", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get rule_type(): string {
    return `${this.resourceType}.${this.resourceName}.rule_type`;
  }

  get share_status(): string {
    return `${this.resourceType}.${this.resourceName}.share_status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
