import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcIpv4CidrBlockAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsVpcIpv4CidrBlockAssociationArgs {
  ipv4_ipam_pool_id?: string;
  ipv4_netmask_length?: number;
  vpc_id: string;
  timeouts?: AwsVpcIpv4CidrBlockAssociationArgsTimeouts;
}

export class aws_vpc_ipv4_cidr_block_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpcIpv4CidrBlockAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpc_ipv4_cidr_block_association", resourceName);
  }

  get cidr_block(): string {
    return `${this.resourceType}.${this.resourceName}.cidr_block`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
