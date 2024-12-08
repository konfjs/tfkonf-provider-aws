import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEbsSnapshotArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEbsSnapshotArgsTimeouts {
  read?: string;
}

export interface DataAwsEbsSnapshotArgs {
  most_recent?: boolean;
  owners?: string[];
  restorable_by_user_ids?: string[];
  snapshot_ids?: string[];
  filter?: DataAwsEbsSnapshotArgsFilter[];
  timeouts?: DataAwsEbsSnapshotArgsTimeouts;
}

export class data_aws_ebs_snapshot extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEbsSnapshotArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ebs_snapshot", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get data_encryption_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.data_encryption_key_id`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get encrypted(): string {
    return `data.${this.resourceType}.${this.resourceName}.encrypted`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get outpost_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.outpost_arn`;
  }

  get owner_alias(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_alias`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get snapshot_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.snapshot_id`;
  }

  get start_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.start_time`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get storage_tier(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_tier`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get volume_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.volume_id`;
  }

  get volume_size(): string {
    return `data.${this.resourceType}.${this.resourceName}.volume_size`;
  }
}
