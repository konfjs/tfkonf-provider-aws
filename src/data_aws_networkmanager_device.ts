import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsNetworkmanagerDeviceArgs {
  device_id: string;
  global_network_id: string;
}

export class data_aws_networkmanager_device extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsNetworkmanagerDeviceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_networkmanager_device", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_location(): string {
    return `data.${this.resourceType}.${this.resourceName}.aws_location`;
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

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get model(): string {
    return `data.${this.resourceType}.${this.resourceName}.model`;
  }

  get serial_number(): string {
    return `data.${this.resourceType}.${this.resourceName}.serial_number`;
  }

  get site_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.site_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }

  get vendor(): string {
    return `data.${this.resourceType}.${this.resourceName}.vendor`;
  }
}
