import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsNetworkmanagerGlobalNetworkArgs {
  global_network_id: string;
}

export class data_aws_networkmanager_global_network extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsNetworkmanagerGlobalNetworkArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_networkmanager_global_network", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get global_network_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.global_network_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
