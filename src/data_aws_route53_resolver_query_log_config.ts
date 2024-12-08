import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRoute53ResolverQueryLogConfigArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsRoute53ResolverQueryLogConfigArgs {
  name?: string;
  resolver_query_log_config_id?: string;
  filter?: DataAwsRoute53ResolverQueryLogConfigArgsFilter[];
}

export class data_aws_route53_resolver_query_log_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsRoute53ResolverQueryLogConfigArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_route53_resolver_query_log_config", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get destination_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.destination_arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get share_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.share_status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
