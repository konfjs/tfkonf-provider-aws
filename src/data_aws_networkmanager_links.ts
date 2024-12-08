import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsNetworkmanagerLinksArgs {
  global_network_id: string;
  provider_name?: string;
  site_id?: string;
  tags?: { [key: string]: string };
  type?: string;
}

export class data_aws_networkmanager_links extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsNetworkmanagerLinksArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_networkmanager_links", resourceName);
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
