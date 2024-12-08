import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsElasticacheReplicationGroupArgs {
  replication_group_id: string;
}

export class data_aws_elasticache_replication_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsElasticacheReplicationGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_elasticache_replication_group", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get auth_token_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.auth_token_enabled`;
  }

  get automatic_failover_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.automatic_failover_enabled`;
  }

  get cluster_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_mode`;
  }

  get configuration_endpoint_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.configuration_endpoint_address`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get log_delivery_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.log_delivery_configuration`;
  }

  get member_clusters(): string {
    return `data.${this.resourceType}.${this.resourceName}.member_clusters`;
  }

  get multi_az_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.multi_az_enabled`;
  }

  get node_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.node_type`;
  }

  get num_cache_clusters(): string {
    return `data.${this.resourceType}.${this.resourceName}.num_cache_clusters`;
  }

  get num_node_groups(): string {
    return `data.${this.resourceType}.${this.resourceName}.num_node_groups`;
  }

  get port(): string {
    return `data.${this.resourceType}.${this.resourceName}.port`;
  }

  get primary_endpoint_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.primary_endpoint_address`;
  }

  get reader_endpoint_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.reader_endpoint_address`;
  }

  get replicas_per_node_group(): string {
    return `data.${this.resourceType}.${this.resourceName}.replicas_per_node_group`;
  }

  get replication_group_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.replication_group_id`;
  }

  get snapshot_retention_limit(): string {
    return `data.${this.resourceType}.${this.resourceName}.snapshot_retention_limit`;
  }

  get snapshot_window(): string {
    return `data.${this.resourceType}.${this.resourceName}.snapshot_window`;
  }
}
