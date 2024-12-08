import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkInterfaceSgAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
}

export interface AwsNetworkInterfaceSgAttachmentArgs {
  network_interface_id: string;
  security_group_id: string;
  timeouts?: AwsNetworkInterfaceSgAttachmentArgsTimeouts;
}

export class aws_network_interface_sg_attachment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNetworkInterfaceSgAttachmentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_network_interface_sg_attachment", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get network_interface_id(): string {
    return `${this.resourceType}.${this.resourceName}.network_interface_id`;
  }

  get security_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_id`;
  }
}
