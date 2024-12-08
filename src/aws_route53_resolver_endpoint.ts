import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53ResolverEndpointArgsIpAddress {
  subnet_id: string;
}

export interface AwsRoute53ResolverEndpointArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsRoute53ResolverEndpointArgs {
  direction: string;
  name?: string;
  security_group_ids: string[];
  tags?: { [key: string]: string };
  ip_address: AwsRoute53ResolverEndpointArgsIpAddress[];
  timeouts?: AwsRoute53ResolverEndpointArgsTimeouts;
}

export class aws_route53_resolver_endpoint extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRoute53ResolverEndpointArgs) {
    const meta = {ip_address:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_route53_resolver_endpoint", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get direction(): string {
    return `${this.resourceType}.${this.resourceName}.direction`;
  }

  get host_vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.host_vpc_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get protocols(): string {
    return `${this.resourceType}.${this.resourceName}.protocols`;
  }

  get resolver_endpoint_type(): string {
    return `${this.resourceType}.${this.resourceName}.resolver_endpoint_type`;
  }

  get security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
