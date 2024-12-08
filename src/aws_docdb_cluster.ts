import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDocdbClusterArgsRestoreToPointInTime {
  restore_to_time?: string;
  restore_type?: string;
  source_cluster_identifier: string;
  use_latest_restorable_time?: boolean;
}

export interface AwsDocdbClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDocdbClusterArgs {
  allow_major_version_upgrade?: boolean;
  apply_immediately?: boolean;
  backup_retention_period?: number;
  deletion_protection?: boolean;
  enabled_cloudwatch_logs_exports?: string[];
  engine?: string;
  final_snapshot_identifier?: string;
  global_cluster_identifier?: string;
  master_password?: string;
  port?: number;
  skip_final_snapshot?: boolean;
  snapshot_identifier?: string;
  storage_encrypted?: boolean;
  storage_type?: string;
  tags?: { [key: string]: string };
  restore_to_point_in_time?: AwsDocdbClusterArgsRestoreToPointInTime;
  timeouts?: AwsDocdbClusterArgsTimeouts;
}

export class aws_docdb_cluster extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDocdbClusterArgs) {
    const meta = {restore_to_point_in_time:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_docdb_cluster", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zones(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zones`;
  }

  get cluster_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_identifier`;
  }

  get cluster_identifier_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_identifier_prefix`;
  }

  get cluster_members(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_members`;
  }

  get cluster_resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_resource_id`;
  }

  get db_cluster_parameter_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.db_cluster_parameter_group_name`;
  }

  get db_subnet_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.db_subnet_group_name`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get engine_version(): string {
    return `${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get hosted_zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.hosted_zone_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get master_username(): string {
    return `${this.resourceType}.${this.resourceName}.master_username`;
  }

  get preferred_backup_window(): string {
    return `${this.resourceType}.${this.resourceName}.preferred_backup_window`;
  }

  get preferred_maintenance_window(): string {
    return `${this.resourceType}.${this.resourceName}.preferred_maintenance_window`;
  }

  get reader_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.reader_endpoint`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_security_group_ids`;
  }
}
