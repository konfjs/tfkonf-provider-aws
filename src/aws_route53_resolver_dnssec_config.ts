import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53ResolverDnssecConfigArgs {
  resource_id: string;
}

export class aws_route53_resolver_dnssec_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRoute53ResolverDnssecConfigArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53_resolver_dnssec_config", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.resource_id`;
  }

  get validation_status(): string {
    return `${this.resourceType}.${this.resourceName}.validation_status`;
  }
}
