import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsNetworkmanagerConnectionArgs {
  connection_id: string;
  global_network_id: string;
}

export class data_aws_networkmanager_connection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsNetworkmanagerConnectionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_networkmanager_connection", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get connected_device_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.connected_device_id`;
  }

  get connected_link_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.connected_link_id`;
  }

  get connection_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.connection_id`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get device_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.device_id`;
  }

  get global_network_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.global_network_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get link_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.link_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
