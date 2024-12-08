import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsVpcIpamPoolCidrsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsVpcIpamPoolCidrsArgsTimeouts {
  read?: string;
}

export interface DataAwsVpcIpamPoolCidrsArgs {
  ipam_pool_id: string;
  filter?: DataAwsVpcIpamPoolCidrsArgsFilter[];
  timeouts?: DataAwsVpcIpamPoolCidrsArgsTimeouts;
}

export class data_aws_vpc_ipam_pool_cidrs extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsVpcIpamPoolCidrsArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_vpc_ipam_pool_cidrs", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ipam_pool_cidrs(): string {
    return `data.${this.resourceType}.${this.resourceName}.ipam_pool_cidrs`;
  }

  get ipam_pool_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.ipam_pool_id`;
  }
}
