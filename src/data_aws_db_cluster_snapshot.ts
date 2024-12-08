import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDbClusterSnapshotArgs {
  db_cluster_identifier?: string;
  db_cluster_snapshot_identifier?: string;
  include_public?: boolean;
  include_shared?: boolean;
  most_recent?: boolean;
  snapshot_type?: string;
}

export class data_aws_db_cluster_snapshot extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsDbClusterSnapshotArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_db_cluster_snapshot", resourceName);
  }

  get allocated_storage(): string {
    return `data.${this.resourceType}.${this.resourceName}.allocated_storage`;
  }

  get availability_zones(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zones`;
  }

  get db_cluster_snapshot_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.db_cluster_snapshot_arn`;
  }

  get engine(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine`;
  }

  get engine_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get license_model(): string {
    return `data.${this.resourceType}.${this.resourceName}.license_model`;
  }

  get port(): string {
    return `data.${this.resourceType}.${this.resourceName}.port`;
  }

  get snapshot_create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.snapshot_create_time`;
  }

  get source_db_cluster_snapshot_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_db_cluster_snapshot_arn`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get storage_encrypted(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_encrypted`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
