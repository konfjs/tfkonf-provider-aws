import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupsArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupsArgs {
  tags?: { [key: string]: string };
  filter?: DataAwsEc2LocalGatewayVirtualInterfaceGroupsArgsFilter[];
  timeouts?: DataAwsEc2LocalGatewayVirtualInterfaceGroupsArgsTimeouts;
}

export class data_aws_ec2_local_gateway_virtual_interface_groups extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEc2LocalGatewayVirtualInterfaceGroupsArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_local_gateway_virtual_interface_groups", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }

  get local_gateway_virtual_interface_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.local_gateway_virtual_interface_ids`;
  }
}
