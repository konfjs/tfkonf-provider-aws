import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsElasticacheClusterArgs {
  cluster_id: string;
}

export class data_aws_elasticache_cluster extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsElasticacheClusterArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_elasticache_cluster", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get cache_nodes(): string {
    return `data.${this.resourceType}.${this.resourceName}.cache_nodes`;
  }

  get cluster_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_address`;
  }

  get cluster_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_id`;
  }

  get configuration_endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.configuration_endpoint`;
  }

  get engine(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine`;
  }

  get engine_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_discovery(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_discovery`;
  }

  get log_delivery_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.log_delivery_configuration`;
  }

  get maintenance_window(): string {
    return `data.${this.resourceType}.${this.resourceName}.maintenance_window`;
  }

  get network_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_type`;
  }

  get node_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.node_type`;
  }

  get notification_topic_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.notification_topic_arn`;
  }

  get num_cache_nodes(): string {
    return `data.${this.resourceType}.${this.resourceName}.num_cache_nodes`;
  }

  get parameter_group_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.parameter_group_name`;
  }

  get port(): string {
    return `data.${this.resourceType}.${this.resourceName}.port`;
  }

  get preferred_outpost_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.preferred_outpost_arn`;
  }

  get replication_group_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.replication_group_id`;
  }

  get security_group_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get snapshot_retention_limit(): string {
    return `data.${this.resourceType}.${this.resourceName}.snapshot_retention_limit`;
  }

  get snapshot_window(): string {
    return `data.${this.resourceType}.${this.resourceName}.snapshot_window`;
  }

  get subnet_group_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_group_name`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
