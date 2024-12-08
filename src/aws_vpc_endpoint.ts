import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcEndpointArgsDnsOptions {
  private_dns_only_for_inbound_resolver_endpoint?: boolean;
}

export interface AwsVpcEndpointArgsSubnetConfiguration {
  ipv4?: string;
  ipv6?: string;
  subnet_id?: string;
}

export interface AwsVpcEndpointArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsVpcEndpointArgs {
  auto_accept?: boolean;
  service_name: string;
  tags?: { [key: string]: string };
  vpc_endpoint_type?: string;
  vpc_id: string;
  dns_options?: AwsVpcEndpointArgsDnsOptions;
  subnet_configuration?: AwsVpcEndpointArgsSubnetConfiguration[];
  timeouts?: AwsVpcEndpointArgsTimeouts;
}

export class aws_vpc_endpoint extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpcEndpointArgs) {
    const meta = {dns_options:{isBlock:true},subnet_configuration:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpc_endpoint", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cidr_blocks(): string {
    return `${this.resourceType}.${this.resourceName}.cidr_blocks`;
  }

  get dns_entry(): string {
    return `${this.resourceType}.${this.resourceName}.dns_entry`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_address_type(): string {
    return `${this.resourceType}.${this.resourceName}.ip_address_type`;
  }

  get network_interface_ids(): string {
    return `${this.resourceType}.${this.resourceName}.network_interface_ids`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get prefix_list_id(): string {
    return `${this.resourceType}.${this.resourceName}.prefix_list_id`;
  }

  get private_dns_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.private_dns_enabled`;
  }

  get requester_managed(): string {
    return `${this.resourceType}.${this.resourceName}.requester_managed`;
  }

  get route_table_ids(): string {
    return `${this.resourceType}.${this.resourceName}.route_table_ids`;
  }

  get security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get service_name(): string {
    return `${this.resourceType}.${this.resourceName}.service_name`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
