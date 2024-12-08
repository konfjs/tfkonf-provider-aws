import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSubnetsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsSubnetsArgsTimeouts {
  read?: string;
}

export interface DataAwsSubnetsArgs {
  filter?: DataAwsSubnetsArgsFilter[];
  timeouts?: DataAwsSubnetsArgsTimeouts;
}

export class data_aws_subnets extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSubnetsArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_subnets", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
