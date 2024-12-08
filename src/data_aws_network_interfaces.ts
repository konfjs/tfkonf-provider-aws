import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsNetworkInterfacesArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsNetworkInterfacesArgsTimeouts {
  read?: string;
}

export interface DataAwsNetworkInterfacesArgs {
  filter?: DataAwsNetworkInterfacesArgsFilter[];
  timeouts?: DataAwsNetworkInterfacesArgsTimeouts;
}

export class data_aws_network_interfaces extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsNetworkInterfacesArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_network_interfaces", resourceName);
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
