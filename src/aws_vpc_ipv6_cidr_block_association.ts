import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcIpv6CidrBlockAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsVpcIpv6CidrBlockAssociationArgs {
  ipv6_ipam_pool_id?: string;
  ipv6_netmask_length?: number;
  vpc_id: string;
  timeouts?: AwsVpcIpv6CidrBlockAssociationArgsTimeouts;
}

export class aws_vpc_ipv6_cidr_block_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVpcIpv6CidrBlockAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpc_ipv6_cidr_block_association", resourceName);
  }

  get assign_generated_ipv6_cidr_block(): string {
    return `${this.resourceType}.${this.resourceName}.assign_generated_ipv6_cidr_block`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_source(): string {
    return `${this.resourceType}.${this.resourceName}.ip_source`;
  }

  get ipv6_address_attribute(): string {
    return `${this.resourceType}.${this.resourceName}.ipv6_address_attribute`;
  }

  get ipv6_cidr_block(): string {
    return `${this.resourceType}.${this.resourceName}.ipv6_cidr_block`;
  }

  get ipv6_pool(): string {
    return `${this.resourceType}.${this.resourceName}.ipv6_pool`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
