import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsVpcEndpointArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsVpcEndpointArgsTimeouts {
  read?: string;
}

export interface DataAwsVpcEndpointArgs {
  filter?: DataAwsVpcEndpointArgsFilter[];
  timeouts?: DataAwsVpcEndpointArgsTimeouts;
}

export class data_aws_vpc_endpoint extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsVpcEndpointArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_vpc_endpoint", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get cidr_blocks(): string {
    return `data.${this.resourceType}.${this.resourceName}.cidr_blocks`;
  }

  get dns_entry(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_entry`;
  }

  get dns_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_options`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_address_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_address_type`;
  }

  get network_interface_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_interface_ids`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy`;
  }

  get prefix_list_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.prefix_list_id`;
  }

  get private_dns_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.private_dns_enabled`;
  }

  get requester_managed(): string {
    return `data.${this.resourceType}.${this.resourceName}.requester_managed`;
  }

  get route_table_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.route_table_ids`;
  }

  get security_group_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get service_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_name`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get subnet_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get vpc_endpoint_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_endpoint_type`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
