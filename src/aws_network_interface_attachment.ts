import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkInterfaceAttachmentArgs {
  device_index: number;
  instance_id: string;
  network_interface_id: string;
}

export class aws_network_interface_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsNetworkInterfaceAttachmentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_network_interface_attachment", resourceName);
  }

  get attachment_id(): string {
    return `${this.resourceType}.${this.resourceName}.attachment_id`;
  }

  get device_index(): string {
    return `${this.resourceType}.${this.resourceName}.device_index`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get network_interface_id(): string {
    return `${this.resourceType}.${this.resourceName}.network_interface_id`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
