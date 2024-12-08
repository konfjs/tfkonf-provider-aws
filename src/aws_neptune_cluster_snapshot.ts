import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNeptuneClusterSnapshotArgsTimeouts {
  create?: string;
}

export interface AwsNeptuneClusterSnapshotArgs {
  db_cluster_identifier: string;
  db_cluster_snapshot_identifier: string;
  timeouts?: AwsNeptuneClusterSnapshotArgsTimeouts;
}

export class aws_neptune_cluster_snapshot extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNeptuneClusterSnapshotArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_neptune_cluster_snapshot", resourceName);
  }

  get allocated_storage(): string {
    return `${this.resourceType}.${this.resourceName}.allocated_storage`;
  }

  get availability_zones(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zones`;
  }

  get db_cluster_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.db_cluster_identifier`;
  }

  get db_cluster_snapshot_arn(): string {
    return `${this.resourceType}.${this.resourceName}.db_cluster_snapshot_arn`;
  }

  get db_cluster_snapshot_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.db_cluster_snapshot_identifier`;
  }

  get engine(): string {
    return `${this.resourceType}.${this.resourceName}.engine`;
  }

  get engine_version(): string {
    return `${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get license_model(): string {
    return `${this.resourceType}.${this.resourceName}.license_model`;
  }

  get port(): string {
    return `${this.resourceType}.${this.resourceName}.port`;
  }

  get snapshot_type(): string {
    return `${this.resourceType}.${this.resourceName}.snapshot_type`;
  }

  get source_db_cluster_snapshot_arn(): string {
    return `${this.resourceType}.${this.resourceName}.source_db_cluster_snapshot_arn`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get storage_encrypted(): string {
    return `${this.resourceType}.${this.resourceName}.storage_encrypted`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
