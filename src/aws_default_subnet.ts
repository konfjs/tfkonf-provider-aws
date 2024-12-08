import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDefaultSubnetArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsDefaultSubnetArgs {
  assign_ipv6_address_on_creation?: boolean;
  availability_zone: string;
  customer_owned_ipv4_pool?: string;
  enable_dns64?: boolean;
  enable_resource_name_dns_a_record_on_launch?: boolean;
  enable_resource_name_dns_aaaa_record_on_launch?: boolean;
  force_destroy?: boolean;
  ipv6_native?: boolean;
  map_customer_owned_ip_on_launch?: boolean;
  map_public_ip_on_launch?: boolean;
  tags?: { [key: string]: string };
  timeouts?: AwsDefaultSubnetArgsTimeouts;
}

export class aws_default_subnet extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDefaultSubnetArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_default_subnet", resourceName);
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

  get cidr_block(): string {
    return `${this.resourceType}.${this.resourceName}.cidr_block`;
  }

  get enable_lni_at_device_index(): string {
    return `${this.resourceType}.${this.resourceName}.enable_lni_at_device_index`;
  }

  get existing_default_subnet(): string {
    return `${this.resourceType}.${this.resourceName}.existing_default_subnet`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ipv6_cidr_block(): string {
    return `${this.resourceType}.${this.resourceName}.ipv6_cidr_block`;
  }

  get ipv6_cidr_block_association_id(): string {
    return `${this.resourceType}.${this.resourceName}.ipv6_cidr_block_association_id`;
  }

  get outpost_arn(): string {
    return `${this.resourceType}.${this.resourceName}.outpost_arn`;
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
