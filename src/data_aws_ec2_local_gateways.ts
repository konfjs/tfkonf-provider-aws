import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2LocalGatewaysArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2LocalGatewaysArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2LocalGatewaysArgs {
  filter?: DataAwsEc2LocalGatewaysArgsFilter[];
  timeouts?: DataAwsEc2LocalGatewaysArgsTimeouts;
}

export class data_aws_ec2_local_gateways extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEc2LocalGatewaysArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_local_gateways", resourceName);
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
