import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53ResolverConfigArgs {
  autodefined_reverse_flag: string;
  resource_id: string;
}

export class aws_route53_resolver_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRoute53ResolverConfigArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53_resolver_config", resourceName);
  }

  get autodefined_reverse_flag(): string {
    return `${this.resourceType}.${this.resourceName}.autodefined_reverse_flag`;
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
}
