import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailDiskAttachmentArgs {
  disk_name: string;
  disk_path: string;
  instance_name: string;
}

export class aws_lightsail_disk_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLightsailDiskAttachmentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_disk_attachment", resourceName);
  }

  get disk_name(): string {
    return `${this.resourceType}.${this.resourceName}.disk_name`;
  }

  get disk_path(): string {
    return `${this.resourceType}.${this.resourceName}.disk_path`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_name(): string {
    return `${this.resourceType}.${this.resourceName}.instance_name`;
  }
}
