import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsMemorydbClusterArgs {
  name: string;
}

export class data_aws_memorydb_cluster extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsMemorydbClusterArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_memorydb_cluster", resourceName);
  }

  get acl_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.acl_name`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get auto_minor_version_upgrade(): string {
    return `data.${this.resourceType}.${this.resourceName}.auto_minor_version_upgrade`;
  }

  get cluster_endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_endpoint`;
  }

  get data_tiering(): string {
    return `data.${this.resourceType}.${this.resourceName}.data_tiering`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get engine(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine`;
  }

  get engine_patch_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine_patch_version`;
  }

  get engine_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get final_snapshot_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.final_snapshot_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_arn`;
  }

  get maintenance_window(): string {
    return `data.${this.resourceType}.${this.resourceName}.maintenance_window`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get node_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.node_type`;
  }

  get num_replicas_per_shard(): string {
    return `data.${this.resourceType}.${this.resourceName}.num_replicas_per_shard`;
  }

  get num_shards(): string {
    return `data.${this.resourceType}.${this.resourceName}.num_shards`;
  }

  get parameter_group_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.parameter_group_name`;
  }

  get port(): string {
    return `data.${this.resourceType}.${this.resourceName}.port`;
  }

  get security_group_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get shards(): string {
    return `data.${this.resourceType}.${this.resourceName}.shards`;
  }

  get snapshot_retention_limit(): string {
    return `data.${this.resourceType}.${this.resourceName}.snapshot_retention_limit`;
  }

  get snapshot_window(): string {
    return `data.${this.resourceType}.${this.resourceName}.snapshot_window`;
  }

  get sns_topic_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.sns_topic_arn`;
  }

  get subnet_group_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_group_name`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get tls_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.tls_enabled`;
  }
}
