import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupArgs {
  filter?: DataAwsEc2LocalGatewayVirtualInterfaceGroupArgsFilter[];
  timeouts?: DataAwsEc2LocalGatewayVirtualInterfaceGroupArgsTimeouts;
}

export class data_aws_ec2_local_gateway_virtual_interface_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEc2LocalGatewayVirtualInterfaceGroupArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_local_gateway_virtual_interface_group", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get local_gateway_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.local_gateway_id`;
  }

  get local_gateway_virtual_interface_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.local_gateway_virtual_interface_ids`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
