import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerDeviceArgsDevice {
  description?: string;
  device_name: string;
  iot_thing_name?: string;
}

export interface AwsSagemakerDeviceArgs {
  device_fleet_name: string;
  device: AwsSagemakerDeviceArgsDevice;
}

export class aws_sagemaker_device extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSagemakerDeviceArgs) {
    const meta = {device:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_device", resourceName);
  }

  get agent_version(): string {
    return `${this.resourceType}.${this.resourceName}.agent_version`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get device_fleet_name(): string {
    return `${this.resourceType}.${this.resourceName}.device_fleet_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
