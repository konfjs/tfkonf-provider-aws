import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftClusterArgsLogging {
  enable: boolean;
  log_destination_type?: string;
  log_exports?: string[];
}

export interface AwsRedshiftClusterArgsSnapshotCopy {
  destination_region: string;
  grant_name?: string;
  retention_period?: number;
}

export interface AwsRedshiftClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsRedshiftClusterArgs {
  allow_version_upgrade?: boolean;
  apply_immediately?: boolean;
  automated_snapshot_retention_period?: number;
  availability_zone_relocation_enabled?: boolean;
  cluster_identifier: string;
  cluster_version?: string;
  elastic_ip?: string;
  encrypted?: boolean;
  final_snapshot_identifier?: string;
  maintenance_track_name?: string;
  manage_master_password?: boolean;
  manual_snapshot_retention_period?: number;
  master_password?: string;
  master_username?: string;
  multi_az?: boolean;
  node_type: string;
  number_of_nodes?: number;
  owner_account?: string;
  port?: number;
  publicly_accessible?: boolean;
  skip_final_snapshot?: boolean;
  snapshot_arn?: string;
  snapshot_cluster_identifier?: string;
  snapshot_identifier?: string;
  tags?: { [key: string]: string };
  logging?: AwsRedshiftClusterArgsLogging;
  snapshot_copy?: AwsRedshiftClusterArgsSnapshotCopy;
  timeouts?: AwsRedshiftClusterArgsTimeouts;
}

export class aws_redshift_cluster extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRedshiftClusterArgs) {
    const meta = {logging:{isBlock:true},snapshot_copy:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_redshift_cluster", resourceName);
  }

  get aqua_configuration_status(): string {
    return `${this.resourceType}.${this.resourceName}.aqua_configuration_status`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get cluster_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_identifier`;
  }

  get cluster_namespace_arn(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_namespace_arn`;
  }

  get cluster_nodes(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_nodes`;
  }

  get cluster_parameter_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_parameter_group_name`;
  }

  get cluster_public_key(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_public_key`;
  }

  get cluster_revision_number(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_revision_number`;
  }

  get cluster_subnet_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_subnet_group_name`;
  }

  get cluster_type(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_type`;
  }

  get database_name(): string {
    return `${this.resourceType}.${this.resourceName}.database_name`;
  }

  get default_iam_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.default_iam_role_arn`;
  }

  get dns_name(): string {
    return `${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get enhanced_vpc_routing(): string {
    return `${this.resourceType}.${this.resourceName}.enhanced_vpc_routing`;
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

  get master_password_secret_arn(): string {
    return `${this.resourceType}.${this.resourceName}.master_password_secret_arn`;
  }

  get master_password_secret_kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.master_password_secret_kms_key_id`;
  }

  get node_type(): string {
    return `${this.resourceType}.${this.resourceName}.node_type`;
  }

  get preferred_maintenance_window(): string {
    return `${this.resourceType}.${this.resourceName}.preferred_maintenance_window`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_security_group_ids`;
  }
}
