import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSubnetArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsSubnetArgsTimeouts {
  read?: string;
}

export interface DataAwsSubnetArgs {
  filter?: DataAwsSubnetArgsFilter[];
  timeouts?: DataAwsSubnetArgsTimeouts;
}

export class data_aws_subnet extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSubnetArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_subnet", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get assign_ipv6_address_on_creation(): string {
    return `data.${this.resourceType}.${this.resourceName}.assign_ipv6_address_on_creation`;
  }

  get availability_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get availability_zone_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone_id`;
  }

  get available_ip_address_count(): string {
    return `data.${this.resourceType}.${this.resourceName}.available_ip_address_count`;
  }

  get cidr_block(): string {
    return `data.${this.resourceType}.${this.resourceName}.cidr_block`;
  }

  get customer_owned_ipv4_pool(): string {
    return `data.${this.resourceType}.${this.resourceName}.customer_owned_ipv4_pool`;
  }

  get default_for_az(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_for_az`;
  }

  get enable_dns64(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_dns64`;
  }

  get enable_lni_at_device_index(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_lni_at_device_index`;
  }

  get enable_resource_name_dns_a_record_on_launch(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_resource_name_dns_a_record_on_launch`;
  }

  get enable_resource_name_dns_aaaa_record_on_launch(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_resource_name_dns_aaaa_record_on_launch`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ipv6_cidr_block(): string {
    return `data.${this.resourceType}.${this.resourceName}.ipv6_cidr_block`;
  }

  get ipv6_cidr_block_association_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.ipv6_cidr_block_association_id`;
  }

  get ipv6_native(): string {
    return `data.${this.resourceType}.${this.resourceName}.ipv6_native`;
  }

  get map_customer_owned_ip_on_launch(): string {
    return `data.${this.resourceType}.${this.resourceName}.map_customer_owned_ip_on_launch`;
  }

  get map_public_ip_on_launch(): string {
    return `data.${this.resourceType}.${this.resourceName}.map_public_ip_on_launch`;
  }

  get outpost_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.outpost_arn`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get private_dns_hostname_type_on_launch(): string {
    return `data.${this.resourceType}.${this.resourceName}.private_dns_hostname_type_on_launch`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
