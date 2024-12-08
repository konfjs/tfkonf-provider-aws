import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDbSnapshotArgsTimeouts {
  create?: string;
}

export interface AwsDbSnapshotArgs {
  db_instance_identifier: string;
  db_snapshot_identifier: string;
  shared_accounts?: string[];
  tags?: { [key: string]: string };
  timeouts?: AwsDbSnapshotArgsTimeouts;
}

export class aws_db_snapshot extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDbSnapshotArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_db_snapshot", resourceName);
  }

  get allocated_storage(): string {
    return `${this.resourceType}.${this.resourceName}.allocated_storage`;
  }

  get availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get db_instance_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.db_instance_identifier`;
  }

  get db_snapshot_arn(): string {
    return `${this.resourceType}.${this.resourceName}.db_snapshot_arn`;
  }

  get db_snapshot_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.db_snapshot_identifier`;
  }

  get encrypted(): string {
    return `${this.resourceType}.${this.resourceName}.encrypted`;
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

  get iops(): string {
    return `${this.resourceType}.${this.resourceName}.iops`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get license_model(): string {
    return `${this.resourceType}.${this.resourceName}.license_model`;
  }

  get option_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.option_group_name`;
  }

  get port(): string {
    return `${this.resourceType}.${this.resourceName}.port`;
  }

  get snapshot_type(): string {
    return `${this.resourceType}.${this.resourceName}.snapshot_type`;
  }

  get source_db_snapshot_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.source_db_snapshot_identifier`;
  }

  get source_region(): string {
    return `${this.resourceType}.${this.resourceName}.source_region`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get storage_type(): string {
    return `${this.resourceType}.${this.resourceName}.storage_type`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
