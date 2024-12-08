import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRdsClusterArgsRestoreToPointInTime {
  restore_to_time?: string;
  restore_type?: string;
  source_cluster_identifier?: string;
  source_cluster_resource_id?: string;
  use_latest_restorable_time?: boolean;
}

export interface AwsRdsClusterArgsS3Import {
  bucket_name: string;
  bucket_prefix?: string;
  ingestion_role: string;
  source_engine: string;
  source_engine_version: string;
}

export interface AwsRdsClusterArgsScalingConfiguration {
  auto_pause?: boolean;
  max_capacity?: number;
  min_capacity?: number;
  seconds_before_timeout?: number;
  seconds_until_auto_pause?: number;
  timeout_action?: string;
}

export interface AwsRdsClusterArgsServerlessv2ScalingConfiguration {
  max_capacity: number;
  min_capacity: number;
}

export interface AwsRdsClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsRdsClusterArgs {
  allow_major_version_upgrade?: boolean;
  backtrack_window?: number;
  copy_tags_to_snapshot?: boolean;
  db_cluster_instance_class?: string;
  db_instance_parameter_group_name?: string;
  delete_automated_backups?: boolean;
  deletion_protection?: boolean;
  domain?: string;
  domain_iam_role_name?: string;
  enable_global_write_forwarding?: boolean;
  enable_http_endpoint?: boolean;
  enable_local_write_forwarding?: boolean;
  enabled_cloudwatch_logs_exports?: string[];
  engine: string;
  engine_mode?: string;
  final_snapshot_identifier?: string;
  global_cluster_identifier?: string;
  iam_database_authentication_enabled?: boolean;
  iops?: number;
  manage_master_user_password?: boolean;
  master_password?: string;
  performance_insights_enabled?: boolean;
  replication_source_identifier?: string;
  skip_final_snapshot?: boolean;
  snapshot_identifier?: string;
  source_region?: string;
  tags?: { [key: string]: string };
  restore_to_point_in_time?: AwsRdsClusterArgsRestoreToPointInTime;
  s3_import?: AwsRdsClusterArgsS3Import;
  scaling_configuration?: AwsRdsClusterArgsScalingConfiguration;
  serverlessv2_scaling_configuration?: AwsRdsClusterArgsServerlessv2ScalingConfiguration;
  timeouts?: AwsRdsClusterArgsTimeouts;
}

export class aws_rds_cluster extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRdsClusterArgs) {
    const meta = {restore_to_point_in_time:{isBlock:true},s3_import:{isBlock:true},scaling_configuration:{isBlock:true},serverlessv2_scaling_configuration:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_rds_cluster", resourceName);
  }

  get allocated_storage(): string {
    return `${this.resourceType}.${this.resourceName}.allocated_storage`;
  }

  get apply_immediately(): string {
    return `${this.resourceType}.${this.resourceName}.apply_immediately`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zones(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zones`;
  }

  get backup_retention_period(): string {
    return `${this.resourceType}.${this.resourceName}.backup_retention_period`;
  }

  get ca_certificate_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.ca_certificate_identifier`;
  }

  get ca_certificate_valid_till(): string {
    return `${this.resourceType}.${this.resourceName}.ca_certificate_valid_till`;
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

  get database_name(): string {
    return `${this.resourceType}.${this.resourceName}.database_name`;
  }

  get db_cluster_parameter_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.db_cluster_parameter_group_name`;
  }

  get db_subnet_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.db_subnet_group_name`;
  }

  get db_system_id(): string {
    return `${this.resourceType}.${this.resourceName}.db_system_id`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get engine(): string {
    return `${this.resourceType}.${this.resourceName}.engine`;
  }

  get engine_lifecycle_support(): string {
    return `${this.resourceType}.${this.resourceName}.engine_lifecycle_support`;
  }

  get engine_version(): string {
    return `${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get engine_version_actual(): string {
    return `${this.resourceType}.${this.resourceName}.engine_version_actual`;
  }

  get hosted_zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.hosted_zone_id`;
  }

  get iam_roles(): string {
    return `${this.resourceType}.${this.resourceName}.iam_roles`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get master_user_secret(): string {
    return `${this.resourceType}.${this.resourceName}.master_user_secret`;
  }

  get master_user_secret_kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.master_user_secret_kms_key_id`;
  }

  get master_username(): string {
    return `${this.resourceType}.${this.resourceName}.master_username`;
  }

  get network_type(): string {
    return `${this.resourceType}.${this.resourceName}.network_type`;
  }

  get performance_insights_kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.performance_insights_kms_key_id`;
  }

  get performance_insights_retention_period(): string {
    return `${this.resourceType}.${this.resourceName}.performance_insights_retention_period`;
  }

  get port(): string {
    return `${this.resourceType}.${this.resourceName}.port`;
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

  get storage_encrypted(): string {
    return `${this.resourceType}.${this.resourceName}.storage_encrypted`;
  }

  get storage_type(): string {
    return `${this.resourceType}.${this.resourceName}.storage_type`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_security_group_ids`;
  }
}
