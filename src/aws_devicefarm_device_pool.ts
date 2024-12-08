import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDevicefarmDevicePoolArgsRule {
  attribute?: string;
  operator?: string;
  value?: string;
}

export interface AwsDevicefarmDevicePoolArgs {
  description?: string;
  max_devices?: number;
  name: string;
  project_arn: string;
  tags?: { [key: string]: string };
  rule: AwsDevicefarmDevicePoolArgsRule[];
}

export class aws_devicefarm_device_pool extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDevicefarmDevicePoolArgs) {
    const meta = {rule:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_devicefarm_device_pool", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project_arn(): string {
    return `${this.resourceType}.${this.resourceName}.project_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
