import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsNetworkmanagerConnectionsArgs {
  device_id?: string;
  global_network_id: string;
  tags?: { [key: string]: string };
}

export class data_aws_networkmanager_connections extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsNetworkmanagerConnectionsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_networkmanager_connections", resourceName);
  }

  get global_network_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.global_network_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }
}
