import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSnapshotCreateVolumePermissionArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsSnapshotCreateVolumePermissionArgs {
  account_id: string;
  snapshot_id: string;
  timeouts?: AwsSnapshotCreateVolumePermissionArgsTimeouts;
}

export class aws_snapshot_create_volume_permission extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSnapshotCreateVolumePermissionArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_snapshot_create_volume_permission", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get snapshot_id(): string {
    return `${this.resourceType}.${this.resourceName}.snapshot_id`;
  }
}
