import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSubnetArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsSubnetArgs {
  assign_ipv6_address_on_creation?: boolean;
  cidr_block?: string;
  customer_owned_ipv4_pool?: string;
  enable_dns64?: boolean;
  enable_lni_at_device_index?: number;
  enable_resource_name_dns_a_record_on_launch?: boolean;
  enable_resource_name_dns_aaaa_record_on_launch?: boolean;
  ipv6_cidr_block?: string;
  ipv6_native?: boolean;
  map_customer_owned_ip_on_launch?: boolean;
  map_public_ip_on_launch?: boolean;
  outpost_arn?: string;
  tags?: { [key: string]: string };
  vpc_id: string;
  timeouts?: AwsSubnetArgsTimeouts;
}

export class aws_subnet extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSubnetArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_subnet", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get availability_zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ipv6_cidr_block_association_id(): string {
    return `${this.resourceType}.${this.resourceName}.ipv6_cidr_block_association_id`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get private_dns_hostname_type_on_launch(): string {
    return `${this.resourceType}.${this.resourceName}.private_dns_hostname_type_on_launch`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
