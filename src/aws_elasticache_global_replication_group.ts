import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElasticacheGlobalReplicationGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsElasticacheGlobalReplicationGroupArgs {
  global_replication_group_description?: string;
  global_replication_group_id_suffix: string;
  parameter_group_name?: string;
  primary_replication_group_id: string;
  timeouts?: AwsElasticacheGlobalReplicationGroupArgsTimeouts;
}

export class aws_elasticache_global_replication_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsElasticacheGlobalReplicationGroupArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_elasticache_global_replication_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get at_rest_encryption_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.at_rest_encryption_enabled`;
  }

  get auth_token_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.auth_token_enabled`;
  }

  get automatic_failover_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.automatic_failover_enabled`;
  }

  get cache_node_type(): string {
    return `${this.resourceType}.${this.resourceName}.cache_node_type`;
  }

  get cluster_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_enabled`;
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

  get global_node_groups(): string {
    return `${this.resourceType}.${this.resourceName}.global_node_groups`;
  }

  get global_replication_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.global_replication_group_id`;
  }

  get global_replication_group_id_suffix(): string {
    return `${this.resourceType}.${this.resourceName}.global_replication_group_id_suffix`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get num_node_groups(): string {
    return `${this.resourceType}.${this.resourceName}.num_node_groups`;
  }

  get primary_replication_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.primary_replication_group_id`;
  }

  get transit_encryption_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.transit_encryption_enabled`;
  }
}
