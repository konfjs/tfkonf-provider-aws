import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsNatGatewaysArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsNatGatewaysArgsTimeouts {
  read?: string;
}

export interface DataAwsNatGatewaysArgs {
  vpc_id?: string;
  filter?: DataAwsNatGatewaysArgsFilter[];
  timeouts?: DataAwsNatGatewaysArgsTimeouts;
}

export class data_aws_nat_gateways extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsNatGatewaysArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_nat_gateways", resourceName);
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
