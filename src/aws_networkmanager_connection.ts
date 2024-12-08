import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmanagerConnectionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsNetworkmanagerConnectionArgs {
  connected_device_id: string;
  connected_link_id?: string;
  description?: string;
  device_id: string;
  global_network_id: string;
  link_id?: string;
  tags?: { [key: string]: string };
  timeouts?: AwsNetworkmanagerConnectionArgsTimeouts;
}

export class aws_networkmanager_connection extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNetworkmanagerConnectionArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_networkmanager_connection", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get connected_device_id(): string {
    return `${this.resourceType}.${this.resourceName}.connected_device_id`;
  }

  get device_id(): string {
    return `${this.resourceType}.${this.resourceName}.device_id`;
  }

  get global_network_id(): string {
    return `${this.resourceType}.${this.resourceName}.global_network_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
