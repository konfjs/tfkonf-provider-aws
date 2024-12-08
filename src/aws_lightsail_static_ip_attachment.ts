import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailStaticIpAttachmentArgs {
  instance_name: string;
  static_ip_name: string;
}

export class aws_lightsail_static_ip_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLightsailStaticIpAttachmentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_static_ip_attachment", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_name(): string {
    return `${this.resourceType}.${this.resourceName}.instance_name`;
  }

  get ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.ip_address`;
  }

  get static_ip_name(): string {
    return `${this.resourceType}.${this.resourceName}.static_ip_name`;
  }
}
