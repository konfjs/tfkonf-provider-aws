import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDbInstanceArgsBlueGreenUpdate {
  enabled?: boolean;
}

export interface AwsDbInstanceArgsRestoreToPointInTime {
  restore_time?: string;
  source_db_instance_automated_backups_arn?: string;
  source_db_instance_identifier?: string;
  source_dbi_resource_id?: string;
  use_latest_restorable_time?: boolean;
}

export interface AwsDbInstanceArgsS3Import {
  bucket_name: string;
  bucket_prefix?: string;
  ingestion_role: string;
  source_engine: string;
  source_engine_version: string;
}

export interface AwsDbInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDbInstanceArgs {
  allow_major_version_upgrade?: boolean;
  apply_immediately?: boolean;
  auto_minor_version_upgrade?: boolean;
  copy_tags_to_snapshot?: boolean;
  custom_iam_instance_profile?: string;
  customer_owned_ip_enabled?: boolean;
  dedicated_log_volume?: boolean;
  delete_automated_backups?: boolean;
  deletion_protection?: boolean;
  domain?: string;
  domain_auth_secret_arn?: string;
  domain_dns_ips?: string[];
  domain_iam_role_name?: string;
  domain_ou?: string;
  enabled_cloudwatch_logs_exports?: string[];
  final_snapshot_identifier?: string;
  iam_database_authentication_enabled?: boolean;
  instance_class: string;
  manage_master_user_password?: boolean;
  max_allocated_storage?: number;
  monitoring_interval?: number;
  password?: string;
  performance_insights_enabled?: boolean;
  publicly_accessible?: boolean;
  replicate_source_db?: string;
  skip_final_snapshot?: boolean;
  storage_encrypted?: boolean;
  tags?: { [key: string]: string };
  upgrade_storage_config?: boolean;
  blue_green_update?: AwsDbInstanceArgsBlueGreenUpdate;
  restore_to_point_in_time?: AwsDbInstanceArgsRestoreToPointInTime;
  s3_import?: AwsDbInstanceArgsS3Import;
  timeouts?: AwsDbInstanceArgsTimeouts;
}

export class aws_db_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDbInstanceArgs) {
    const meta = {blue_green_update:{isBlock:true},restore_to_point_in_time:{isBlock:true},s3_import:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_db_instance", resourceName);
  }

  get address(): string {
    return `${this.resourceType}.${this.resourceName}.address`;
  }

  get allocated_storage(): string {
    return `${this.resourceType}.${this.resourceName}.allocated_storage`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get backup_retention_period(): string {
    return `${this.resourceType}.${this.resourceName}.backup_retention_period`;
  }

  get backup_target(): string {
    return `${this.resourceType}.${this.resourceName}.backup_target`;
  }

  get backup_window(): string {
    return `${this.resourceType}.${this.resourceName}.backup_window`;
  }

  get ca_cert_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.ca_cert_identifier`;
  }

  get character_set_name(): string {
    return `${this.resourceType}.${this.resourceName}.character_set_name`;
  }

  get db_name(): string {
    return `${this.resourceType}.${this.resourceName}.db_name`;
  }

  get db_subnet_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.db_subnet_group_name`;
  }

  get domain_fqdn(): string {
    return `${this.resourceType}.${this.resourceName}.domain_fqdn`;
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

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get identifier(): string {
    return `${this.resourceType}.${this.resourceName}.identifier`;
  }

  get identifier_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.identifier_prefix`;
  }

  get instance_class(): string {
    return `${this.resourceType}.${this.resourceName}.instance_class`;
  }

  get iops(): string {
    return `${this.resourceType}.${this.resourceName}.iops`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get latest_restorable_time(): string {
    return `${this.resourceType}.${this.resourceName}.latest_restorable_time`;
  }

  get license_model(): string {
    return `${this.resourceType}.${this.resourceName}.license_model`;
  }

  get listener_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.listener_endpoint`;
  }

  get maintenance_window(): string {
    return `${this.resourceType}.${this.resourceName}.maintenance_window`;
  }

  get master_user_secret(): string {
    return `${this.resourceType}.${this.resourceName}.master_user_secret`;
  }

  get master_user_secret_kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.master_user_secret_kms_key_id`;
  }

  get monitoring_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.monitoring_role_arn`;
  }

  get multi_az(): string {
    return `${this.resourceType}.${this.resourceName}.multi_az`;
  }

  get nchar_character_set_name(): string {
    return `${this.resourceType}.${this.resourceName}.nchar_character_set_name`;
  }

  get network_type(): string {
    return `${this.resourceType}.${this.resourceName}.network_type`;
  }

  get option_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.option_group_name`;
  }

  get parameter_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.parameter_group_name`;
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

  get replica_mode(): string {
    return `${this.resourceType}.${this.resourceName}.replica_mode`;
  }

  get replicas(): string {
    return `${this.resourceType}.${this.resourceName}.replicas`;
  }

  get resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.resource_id`;
  }

  get snapshot_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.snapshot_identifier`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get storage_throughput(): string {
    return `${this.resourceType}.${this.resourceName}.storage_throughput`;
  }

  get storage_type(): string {
    return `${this.resourceType}.${this.resourceName}.storage_type`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get timezone(): string {
    return `${this.resourceType}.${this.resourceName}.timezone`;
  }

  get username(): string {
    return `${this.resourceType}.${this.resourceName}.username`;
  }

  get vpc_security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_security_group_ids`;
  }
}
