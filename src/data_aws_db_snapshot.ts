import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDbSnapshotArgs {
  db_instance_identifier?: string;
  db_snapshot_identifier?: string;
  include_public?: boolean;
  include_shared?: boolean;
  most_recent?: boolean;
  snapshot_type?: string;
}

export class data_aws_db_snapshot extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsDbSnapshotArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_db_snapshot", resourceName);
  }

  get allocated_storage(): string {
    return `data.${this.resourceType}.${this.resourceName}.allocated_storage`;
  }

  get availability_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get db_snapshot_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.db_snapshot_arn`;
  }

  get encrypted(): string {
    return `data.${this.resourceType}.${this.resourceName}.encrypted`;
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

  get iops(): string {
    return `data.${this.resourceType}.${this.resourceName}.iops`;
  }

  get kms_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get license_model(): string {
    return `data.${this.resourceType}.${this.resourceName}.license_model`;
  }

  get option_group_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.option_group_name`;
  }

  get original_snapshot_create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.original_snapshot_create_time`;
  }

  get port(): string {
    return `data.${this.resourceType}.${this.resourceName}.port`;
  }

  get snapshot_create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.snapshot_create_time`;
  }

  get source_db_snapshot_identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_db_snapshot_identifier`;
  }

  get source_region(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_region`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get storage_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_type`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
