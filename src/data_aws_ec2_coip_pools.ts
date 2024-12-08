import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2CoipPoolsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2CoipPoolsArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2CoipPoolsArgs {
  tags?: { [key: string]: string };
  filter?: DataAwsEc2CoipPoolsArgsFilter[];
  timeouts?: DataAwsEc2CoipPoolsArgsTimeouts;
}

export class data_aws_ec2_coip_pools extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEc2CoipPoolsArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_coip_pools", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get pool_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.pool_ids`;
  }
}
