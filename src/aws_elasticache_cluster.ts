import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElasticacheClusterArgsLogDeliveryConfiguration {
  destination: string;
  destination_type: string;
  log_format: string;
  log_type: string;
}

export interface AwsElasticacheClusterArgs {
  auto_minor_version_upgrade?: string;
  cluster_id: string;
  final_snapshot_identifier?: string;
  notification_topic_arn?: string;
  outpost_mode?: string;
  preferred_availability_zones?: string[];
  snapshot_arns?: string[];
  snapshot_name?: string;
  snapshot_retention_limit?: number;
  tags?: { [key: string]: string };
  log_delivery_configuration?: AwsElasticacheClusterArgsLogDeliveryConfiguration[];
}

export class aws_elasticache_cluster extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsElasticacheClusterArgs) {
    const meta = {log_delivery_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_elasticache_cluster", resourceName);
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

  get az_mode(): string {
    return `${this.resourceType}.${this.resourceName}.az_mode`;
  }

  get cache_nodes(): string {
    return `${this.resourceType}.${this.resourceName}.cache_nodes`;
  }

  get cluster_address(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_address`;
  }

  get cluster_id(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_id`;
  }

  get configuration_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.configuration_endpoint`;
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

  get ip_discovery(): string {
    return `${this.resourceType}.${this.resourceName}.ip_discovery`;
  }

  get maintenance_window(): string {
    return `${this.resourceType}.${this.resourceName}.maintenance_window`;
  }

  get network_type(): string {
    return `${this.resourceType}.${this.resourceName}.network_type`;
  }

  get node_type(): string {
    return `${this.resourceType}.${this.resourceName}.node_type`;
  }

  get num_cache_nodes(): string {
    return `${this.resourceType}.${this.resourceName}.num_cache_nodes`;
  }

  get parameter_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.parameter_group_name`;
  }

  get port(): string {
    return `${this.resourceType}.${this.resourceName}.port`;
  }

  get preferred_outpost_arn(): string {
    return `${this.resourceType}.${this.resourceName}.preferred_outpost_arn`;
  }

  get replication_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.replication_group_id`;
  }

  get security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get snapshot_window(): string {
    return `${this.resourceType}.${this.resourceName}.snapshot_window`;
  }

  get subnet_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_group_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get transit_encryption_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.transit_encryption_enabled`;
  }
}
