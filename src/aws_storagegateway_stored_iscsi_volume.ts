import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsStoragegatewayStoredIscsiVolumeArgs {
  disk_id: string;
  gateway_arn: string;
  kms_encrypted?: boolean;
  kms_key?: string;
  network_interface_id: string;
  preserve_existing_data: boolean;
  snapshot_id?: string;
  tags?: { [key: string]: string };
  target_name: string;
}

export class aws_storagegateway_stored_iscsi_volume extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsStoragegatewayStoredIscsiVolumeArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_storagegateway_stored_iscsi_volume", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get chap_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.chap_enabled`;
  }

  get disk_id(): string {
    return `${this.resourceType}.${this.resourceName}.disk_id`;
  }

  get gateway_arn(): string {
    return `${this.resourceType}.${this.resourceName}.gateway_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get lun_number(): string {
    return `${this.resourceType}.${this.resourceName}.lun_number`;
  }

  get network_interface_id(): string {
    return `${this.resourceType}.${this.resourceName}.network_interface_id`;
  }

  get network_interface_port(): string {
    return `${this.resourceType}.${this.resourceName}.network_interface_port`;
  }

  get preserve_existing_data(): string {
    return `${this.resourceType}.${this.resourceName}.preserve_existing_data`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get target_arn(): string {
    return `${this.resourceType}.${this.resourceName}.target_arn`;
  }

  get target_name(): string {
    return `${this.resourceType}.${this.resourceName}.target_name`;
  }

  get volume_attachment_status(): string {
    return `${this.resourceType}.${this.resourceName}.volume_attachment_status`;
  }

  get volume_id(): string {
    return `${this.resourceType}.${this.resourceName}.volume_id`;
  }

  get volume_size_in_bytes(): string {
    return `${this.resourceType}.${this.resourceName}.volume_size_in_bytes`;
  }

  get volume_status(): string {
    return `${this.resourceType}.${this.resourceName}.volume_status`;
  }

  get volume_type(): string {
    return `${this.resourceType}.${this.resourceName}.volume_type`;
  }
}
