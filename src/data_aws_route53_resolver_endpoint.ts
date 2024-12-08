import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRoute53ResolverEndpointArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsRoute53ResolverEndpointArgs {
  resolver_endpoint_id?: string;
  filter?: DataAwsRoute53ResolverEndpointArgsFilter[];
}

export class data_aws_route53_resolver_endpoint extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsRoute53ResolverEndpointArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_route53_resolver_endpoint", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get direction(): string {
    return `data.${this.resourceType}.${this.resourceName}.direction`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_addresses(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_addresses`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get protocols(): string {
    return `data.${this.resourceType}.${this.resourceName}.protocols`;
  }

  get resolver_endpoint_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.resolver_endpoint_type`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
