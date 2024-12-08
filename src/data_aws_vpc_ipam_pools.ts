import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsVpcIpamPoolsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsVpcIpamPoolsArgs {
  filter?: DataAwsVpcIpamPoolsArgsFilter[];
}

export class data_aws_vpc_ipam_pools extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsVpcIpamPoolsArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_vpc_ipam_pools", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ipam_pools(): string {
    return `data.${this.resourceType}.${this.resourceName}.ipam_pools`;
  }
}
