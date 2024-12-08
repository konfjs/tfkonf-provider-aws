import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDbInstanceArgs {
}

export class data_aws_db_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsDbInstanceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_db_instance", resourceName);
  }

  get address(): string {
    return `data.${this.resourceType}.${this.resourceName}.address`;
  }

  get allocated_storage(): string {
    return `data.${this.resourceType}.${this.resourceName}.allocated_storage`;
  }

  get auto_minor_version_upgrade(): string {
    return `data.${this.resourceType}.${this.resourceName}.auto_minor_version_upgrade`;
  }

  get availability_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get backup_retention_period(): string {
    return `data.${this.resourceType}.${this.resourceName}.backup_retention_period`;
  }

  get ca_cert_identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.ca_cert_identifier`;
  }

  get db_cluster_identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.db_cluster_identifier`;
  }

  get db_instance_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.db_instance_arn`;
  }

  get db_instance_class(): string {
    return `data.${this.resourceType}.${this.resourceName}.db_instance_class`;
  }

  get db_instance_identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.db_instance_identifier`;
  }

  get db_instance_port(): string {
    return `data.${this.resourceType}.${this.resourceName}.db_instance_port`;
  }

  get db_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.db_name`;
  }

  get db_parameter_groups(): string {
    return `data.${this.resourceType}.${this.resourceName}.db_parameter_groups`;
  }

  get db_subnet_group(): string {
    return `data.${this.resourceType}.${this.resourceName}.db_subnet_group`;
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

  get engine_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get hosted_zone_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.hosted_zone_id`;
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

  get master_user_secret(): string {
    return `data.${this.resourceType}.${this.resourceName}.master_user_secret`;
  }

  get master_username(): string {
    return `data.${this.resourceType}.${this.resourceName}.master_username`;
  }

  get max_allocated_storage(): string {
    return `data.${this.resourceType}.${this.resourceName}.max_allocated_storage`;
  }

  get monitoring_interval(): string {
    return `data.${this.resourceType}.${this.resourceName}.monitoring_interval`;
  }

  get monitoring_role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.monitoring_role_arn`;
  }

  get multi_az(): string {
    return `data.${this.resourceType}.${this.resourceName}.multi_az`;
  }

  get network_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_type`;
  }

  get option_group_memberships(): string {
    return `data.${this.resourceType}.${this.resourceName}.option_group_memberships`;
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

  get publicly_accessible(): string {
    return `data.${this.resourceType}.${this.resourceName}.publicly_accessible`;
  }

  get replicate_source_db(): string {
    return `data.${this.resourceType}.${this.resourceName}.replicate_source_db`;
  }

  get resource_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_id`;
  }

  get storage_encrypted(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_encrypted`;
  }

  get storage_throughput(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_throughput`;
  }

  get storage_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_type`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get timezone(): string {
    return `data.${this.resourceType}.${this.resourceName}.timezone`;
  }

  get vpc_security_groups(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_security_groups`;
  }
}
