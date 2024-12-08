import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRdsClusterInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsRdsClusterInstanceArgs {
  auto_minor_version_upgrade?: boolean;
  cluster_identifier: string;
  copy_tags_to_snapshot?: boolean;
  custom_iam_instance_profile?: string;
  engine: string;
  instance_class: string;
  monitoring_interval?: number;
  promotion_tier?: number;
  tags?: { [key: string]: string };
  timeouts?: AwsRdsClusterInstanceArgsTimeouts;
}

export class aws_rds_cluster_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRdsClusterInstanceArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_rds_cluster_instance", resourceName);
  }

  get apply_immediately(): string {
    return `${this.resourceType}.${this.resourceName}.apply_immediately`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get ca_cert_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.ca_cert_identifier`;
  }

  get cluster_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_identifier`;
  }

  get db_parameter_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.db_parameter_group_name`;
  }

  get db_subnet_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.db_subnet_group_name`;
  }

  get dbi_resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.dbi_resource_id`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get engine(): string {
    return `${this.resourceType}.${this.resourceName}.engine`;
  }

  get engine_version(): string {
    return `${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get engine_version_actual(): string {
    return `${this.resourceType}.${this.resourceName}.engine_version_actual`;
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

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get monitoring_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.monitoring_role_arn`;
  }

  get network_type(): string {
    return `${this.resourceType}.${this.resourceName}.network_type`;
  }

  get performance_insights_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.performance_insights_enabled`;
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

  get publicly_accessible(): string {
    return `${this.resourceType}.${this.resourceName}.publicly_accessible`;
  }

  get storage_encrypted(): string {
    return `${this.resourceType}.${this.resourceName}.storage_encrypted`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get writer(): string {
    return `${this.resourceType}.${this.resourceName}.writer`;
  }
}
