import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRdsClusterArgs {
  cluster_identifier: string;
}

export class data_aws_rds_cluster extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsRdsClusterArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_rds_cluster", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zones(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zones`;
  }

  get backtrack_window(): string {
    return `data.${this.resourceType}.${this.resourceName}.backtrack_window`;
  }

  get backup_retention_period(): string {
    return `data.${this.resourceType}.${this.resourceName}.backup_retention_period`;
  }

  get cluster_identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_identifier`;
  }

  get cluster_members(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_members`;
  }

  get cluster_resource_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_resource_id`;
  }

  get database_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.database_name`;
  }

  get db_cluster_parameter_group_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.db_cluster_parameter_group_name`;
  }

  get db_subnet_group_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.db_subnet_group_name`;
  }

  get db_system_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.db_system_id`;
  }

  get enabled_cloudwatch_logs_exports(): string {
    return `data.${this.resourceType}.${this.resourceName}.enabled_cloudwatch_logs_exports`;
  }

  get endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get engine(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine`;
  }

  get engine_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine_mode`;
  }

  get engine_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get final_snapshot_identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.final_snapshot_identifier`;
  }

  get hosted_zone_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.hosted_zone_id`;
  }

  get iam_database_authentication_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.iam_database_authentication_enabled`;
  }

  get iam_roles(): string {
    return `data.${this.resourceType}.${this.resourceName}.iam_roles`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get master_user_secret(): string {
    return `data.${this.resourceType}.${this.resourceName}.master_user_secret`;
  }

  get master_username(): string {
    return `data.${this.resourceType}.${this.resourceName}.master_username`;
  }

  get network_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_type`;
  }

  get port(): string {
    return `data.${this.resourceType}.${this.resourceName}.port`;
  }

  get preferred_backup_window(): string {
    return `data.${this.resourceType}.${this.resourceName}.preferred_backup_window`;
  }

  get preferred_maintenance_window(): string {
    return `data.${this.resourceType}.${this.resourceName}.preferred_maintenance_window`;
  }

  get reader_endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.reader_endpoint`;
  }

  get replication_source_identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.replication_source_identifier`;
  }

  get storage_encrypted(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_encrypted`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get vpc_security_group_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_security_group_ids`;
  }
}
