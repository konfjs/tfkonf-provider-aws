import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNeptuneClusterArgsServerlessV2ScalingConfiguration {
  max_capacity?: number;
  min_capacity?: number;
}

export interface AwsNeptuneClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsNeptuneClusterArgs {
  backup_retention_period?: number;
  copy_tags_to_snapshot?: boolean;
  deletion_protection?: boolean;
  enable_cloudwatch_logs_exports?: string[];
  engine?: string;
  final_snapshot_identifier?: string;
  global_cluster_identifier?: string;
  iam_database_authentication_enabled?: boolean;
  iam_roles?: string[];
  neptune_instance_parameter_group_name?: string;
  port?: number;
  replication_source_identifier?: string;
  skip_final_snapshot?: boolean;
  snapshot_identifier?: string;
  storage_encrypted?: boolean;
  tags?: { [key: string]: string };
  serverless_v2_scaling_configuration?: AwsNeptuneClusterArgsServerlessV2ScalingConfiguration;
  timeouts?: AwsNeptuneClusterArgsTimeouts;
}

export class aws_neptune_cluster extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNeptuneClusterArgs) {
    const meta = {serverless_v2_scaling_configuration:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_neptune_cluster", resourceName);
  }

  get allow_major_version_upgrade(): string {
    return `${this.resourceType}.${this.resourceName}.allow_major_version_upgrade`;
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

  get kms_key_arn(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_arn`;
  }

  get neptune_cluster_parameter_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.neptune_cluster_parameter_group_name`;
  }

  get neptune_subnet_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.neptune_subnet_group_name`;
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
