import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsNetworkmanagerDevicesArgs {
  global_network_id: string;
  site_id?: string;
  tags?: { [key: string]: string };
}

export class data_aws_networkmanager_devices extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsNetworkmanagerDevicesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_networkmanager_devices", resourceName);
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
