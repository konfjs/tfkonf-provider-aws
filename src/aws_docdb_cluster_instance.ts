import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDocdbClusterInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDocdbClusterInstanceArgs {
  apply_immediately?: boolean;
  auto_minor_version_upgrade?: boolean;
  cluster_identifier: string;
  copy_tags_to_snapshot?: boolean;
  enable_performance_insights?: boolean;
  engine?: string;
  instance_class: string;
  promotion_tier?: number;
  tags?: { [key: string]: string };
  timeouts?: AwsDocdbClusterInstanceArgsTimeouts;
}

export class aws_docdb_cluster_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDocdbClusterInstanceArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_docdb_cluster_instance", resourceName);
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

  get db_subnet_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.db_subnet_group_name`;
  }

  get dbi_resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.dbi_resource_id`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get engine_version(): string {
    return `${this.resourceType}.${this.resourceName}.engine_version`;
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

  get performance_insights_kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.performance_insights_kms_key_id`;
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
