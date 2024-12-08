import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsStoragegatewayCachedIscsiVolumeArgs {
  gateway_arn: string;
  kms_encrypted?: boolean;
  kms_key?: string;
  network_interface_id: string;
  snapshot_id?: string;
  source_volume_arn?: string;
  tags?: { [key: string]: string };
  target_name: string;
  volume_size_in_bytes: number;
}

export class aws_storagegateway_cached_iscsi_volume extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsStoragegatewayCachedIscsiVolumeArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_storagegateway_cached_iscsi_volume", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get chap_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.chap_enabled`;
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

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get target_arn(): string {
    return `${this.resourceType}.${this.resourceName}.target_arn`;
  }

  get target_name(): string {
    return `${this.resourceType}.${this.resourceName}.target_name`;
  }

  get volume_arn(): string {
    return `${this.resourceType}.${this.resourceName}.volume_arn`;
  }

  get volume_id(): string {
    return `${this.resourceType}.${this.resourceName}.volume_id`;
  }

  get volume_size_in_bytes(): string {
    return `${this.resourceType}.${this.resourceName}.volume_size_in_bytes`;
  }
}
