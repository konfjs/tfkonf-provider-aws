import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElasticacheReplicationGroupArgsLogDeliveryConfiguration {
  destination: string;
  destination_type: string;
  log_format: string;
  log_type: string;
}

export interface AwsElasticacheReplicationGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsElasticacheReplicationGroupArgs {
  auth_token?: string;
  auth_token_update_strategy?: string;
  automatic_failover_enabled?: boolean;
  description: string;
  engine?: string;
  final_snapshot_identifier?: string;
  kms_key_id?: string;
  multi_az_enabled?: boolean;
  notification_topic_arn?: string;
  port?: number;
  preferred_cache_cluster_azs?: string[];
  replication_group_id: string;
  snapshot_arns?: string[];
  snapshot_name?: string;
  snapshot_retention_limit?: number;
  tags?: { [key: string]: string };
  user_group_ids?: string[];
  log_delivery_configuration?: AwsElasticacheReplicationGroupArgsLogDeliveryConfiguration[];
  timeouts?: AwsElasticacheReplicationGroupArgsTimeouts;
}

export class aws_elasticache_replication_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsElasticacheReplicationGroupArgs) {
    const meta = {log_delivery_configuration:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_elasticache_replication_group", resourceName);
  }

  get apply_immediately(): string {
    return `${this.resourceType}.${this.resourceName}.apply_immediately`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get at_rest_encryption_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.at_rest_encryption_enabled`;
  }

  get auto_minor_version_upgrade(): string {
    return `${this.resourceType}.${this.resourceName}.auto_minor_version_upgrade`;
  }

  get cluster_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_enabled`;
  }

  get cluster_mode(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_mode`;
  }

  get configuration_endpoint_address(): string {
    return `${this.resourceType}.${this.resourceName}.configuration_endpoint_address`;
  }

  get data_tiering_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.data_tiering_enabled`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get engine_version(): string {
    return `${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get engine_version_actual(): string {
    return `${this.resourceType}.${this.resourceName}.engine_version_actual`;
  }

  get global_replication_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.global_replication_group_id`;
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

  get member_clusters(): string {
    return `${this.resourceType}.${this.resourceName}.member_clusters`;
  }

  get network_type(): string {
    return `${this.resourceType}.${this.resourceName}.network_type`;
  }

  get node_type(): string {
    return `${this.resourceType}.${this.resourceName}.node_type`;
  }

  get num_cache_clusters(): string {
    return `${this.resourceType}.${this.resourceName}.num_cache_clusters`;
  }

  get num_node_groups(): string {
    return `${this.resourceType}.${this.resourceName}.num_node_groups`;
  }

  get parameter_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.parameter_group_name`;
  }

  get primary_endpoint_address(): string {
    return `${this.resourceType}.${this.resourceName}.primary_endpoint_address`;
  }

  get reader_endpoint_address(): string {
    return `${this.resourceType}.${this.resourceName}.reader_endpoint_address`;
  }

  get replicas_per_node_group(): string {
    return `${this.resourceType}.${this.resourceName}.replicas_per_node_group`;
  }

  get replication_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.replication_group_id`;
  }

  get security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get security_group_names(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_names`;
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

  get transit_encryption_mode(): string {
    return `${this.resourceType}.${this.resourceName}.transit_encryption_mode`;
  }
}
