import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmanagerDeviceArgsAwsLocation {
  subnet_arn?: string;
  zone?: string;
}

export interface AwsNetworkmanagerDeviceArgsLocation {
  address?: string;
  latitude?: string;
  longitude?: string;
}

export interface AwsNetworkmanagerDeviceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsNetworkmanagerDeviceArgs {
  description?: string;
  global_network_id: string;
  model?: string;
  serial_number?: string;
  site_id?: string;
  tags?: { [key: string]: string };
  type?: string;
  vendor?: string;
  aws_location?: AwsNetworkmanagerDeviceArgsAwsLocation;
  location?: AwsNetworkmanagerDeviceArgsLocation;
  timeouts?: AwsNetworkmanagerDeviceArgsTimeouts;
}

export class aws_networkmanager_device extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNetworkmanagerDeviceArgs) {
    const meta = {aws_location:{isBlock:true},location:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_networkmanager_device", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
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
