import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53ResolverQueryLogConfigArgs {
  destination_arn: string;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_route53_resolver_query_log_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRoute53ResolverQueryLogConfigArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53_resolver_query_log_config", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get destination_arn(): string {
    return `${this.resourceType}.${this.resourceName}.destination_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get share_status(): string {
    return `${this.resourceType}.${this.resourceName}.share_status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
