import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2PublicIpv4PoolsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2PublicIpv4PoolsArgs {
  filter?: DataAwsEc2PublicIpv4PoolsArgsFilter[];
}

export class data_aws_ec2_public_ipv4_pools extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEc2PublicIpv4PoolsArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_public_ipv4_pools", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get pool_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.pool_ids`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
