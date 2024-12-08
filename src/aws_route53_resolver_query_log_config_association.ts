import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53ResolverQueryLogConfigAssociationArgs {
  resolver_query_log_config_id: string;
  resource_id: string;
}

export class aws_route53_resolver_query_log_config_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRoute53ResolverQueryLogConfigAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53_resolver_query_log_config_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get resolver_query_log_config_id(): string {
    return `${this.resourceType}.${this.resourceName}.resolver_query_log_config_id`;
  }

  get resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.resource_id`;
  }
}
