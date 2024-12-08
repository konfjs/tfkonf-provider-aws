import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsNetworkmanagerGlobalNetworksArgs {
  tags?: { [key: string]: string };
}

export class data_aws_networkmanager_global_networks extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsNetworkmanagerGlobalNetworksArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_networkmanager_global_networks", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }
}
