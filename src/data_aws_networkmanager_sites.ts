import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsNetworkmanagerSitesArgs {
  global_network_id: string;
  tags?: { [key: string]: string };
}

export class data_aws_networkmanager_sites extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsNetworkmanagerSitesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_networkmanager_sites", resourceName);
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
