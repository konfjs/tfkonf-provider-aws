import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVolumeAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsVolumeAttachmentArgs {
  device_name: string;
  force_detach?: boolean;
  instance_id: string;
  skip_destroy?: boolean;
  stop_instance_before_detaching?: boolean;
  volume_id: string;
  timeouts?: AwsVolumeAttachmentArgsTimeouts;
}

export class aws_volume_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVolumeAttachmentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_volume_attachment", resourceName);
  }

  get device_name(): string {
    return `${this.resourceType}.${this.resourceName}.device_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get volume_id(): string {
    return `${this.resourceType}.${this.resourceName}.volume_id`;
  }
}
