import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRedshiftClusterArgs {
  cluster_identifier: string;
}

export class data_aws_redshift_cluster extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsRedshiftClusterArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_redshift_cluster", resourceName);
  }

  get allow_version_upgrade(): string {
    return `data.${this.resourceType}.${this.resourceName}.allow_version_upgrade`;
  }

  get aqua_configuration_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.aqua_configuration_status`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get automated_snapshot_retention_period(): string {
    return `data.${this.resourceType}.${this.resourceName}.automated_snapshot_retention_period`;
  }

  get availability_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get availability_zone_relocation_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone_relocation_enabled`;
  }

  get bucket_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.bucket_name`;
  }

  get cluster_identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_identifier`;
  }

  get cluster_namespace_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_namespace_arn`;
  }

  get cluster_nodes(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_nodes`;
  }

  get cluster_parameter_group_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_parameter_group_name`;
  }

  get cluster_public_key(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_public_key`;
  }

  get cluster_revision_number(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_revision_number`;
  }

  get cluster_subnet_group_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_subnet_group_name`;
  }

  get cluster_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_type`;
  }

  get cluster_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_version`;
  }

  get database_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.database_name`;
  }

  get default_iam_role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_iam_role_arn`;
  }

  get elastic_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.elastic_ip`;
  }

  get enable_logging(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_logging`;
  }

  get encrypted(): string {
    return `data.${this.resourceType}.${this.resourceName}.encrypted`;
  }

  get endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get enhanced_vpc_routing(): string {
    return `data.${this.resourceType}.${this.resourceName}.enhanced_vpc_routing`;
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

  get log_destination_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.log_destination_type`;
  }

  get log_exports(): string {
    return `data.${this.resourceType}.${this.resourceName}.log_exports`;
  }

  get maintenance_track_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.maintenance_track_name`;
  }

  get manual_snapshot_retention_period(): string {
    return `data.${this.resourceType}.${this.resourceName}.manual_snapshot_retention_period`;
  }

  get master_username(): string {
    return `data.${this.resourceType}.${this.resourceName}.master_username`;
  }

  get multi_az(): string {
    return `data.${this.resourceType}.${this.resourceName}.multi_az`;
  }

  get node_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.node_type`;
  }

  get number_of_nodes(): string {
    return `data.${this.resourceType}.${this.resourceName}.number_of_nodes`;
  }

  get port(): string {
    return `data.${this.resourceType}.${this.resourceName}.port`;
  }

  get preferred_maintenance_window(): string {
    return `data.${this.resourceType}.${this.resourceName}.preferred_maintenance_window`;
  }

  get publicly_accessible(): string {
    return `data.${this.resourceType}.${this.resourceName}.publicly_accessible`;
  }

  get s3_key_prefix(): string {
    return `data.${this.resourceType}.${this.resourceName}.s3_key_prefix`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }

  get vpc_security_group_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_security_group_ids`;
  }
}
