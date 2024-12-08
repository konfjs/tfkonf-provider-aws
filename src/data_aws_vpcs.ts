import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsVpcsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsVpcsArgsTimeouts {
  read?: string;
}

export interface DataAwsVpcsArgs {
  filter?: DataAwsVpcsArgsFilter[];
  timeouts?: DataAwsVpcsArgsTimeouts;
}

export class data_aws_vpcs extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsVpcsArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_vpcs", resourceName);
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
