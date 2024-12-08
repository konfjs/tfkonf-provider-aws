import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMemorydbClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsMemorydbClusterArgs {
  acl_name: string;
  auto_minor_version_upgrade?: boolean;
  data_tiering?: boolean;
  description?: string;
  final_snapshot_name?: string;
  kms_key_arn?: string;
  node_type: string;
  num_replicas_per_shard?: number;
  num_shards?: number;
  security_group_ids?: string[];
  snapshot_arns?: string[];
  snapshot_name?: string;
  sns_topic_arn?: string;
  tags?: { [key: string]: string };
  tls_enabled?: boolean;
  timeouts?: AwsMemorydbClusterArgsTimeouts;
}

export class aws_memorydb_cluster extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsMemorydbClusterArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_memorydb_cluster", resourceName);
  }

  get acl_name(): string {
    return `${this.resourceType}.${this.resourceName}.acl_name`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cluster_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_endpoint`;
  }

  get engine(): string {
    return `${this.resourceType}.${this.resourceName}.engine`;
  }

  get engine_patch_version(): string {
    return `${this.resourceType}.${this.resourceName}.engine_patch_version`;
  }

  get engine_version(): string {
    return `${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get maintenance_window(): string {
    return `${this.resourceType}.${this.resourceName}.maintenance_window`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get node_type(): string {
    return `${this.resourceType}.${this.resourceName}.node_type`;
  }

  get parameter_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.parameter_group_name`;
  }

  get port(): string {
    return `${this.resourceType}.${this.resourceName}.port`;
  }

  get shards(): string {
    return `${this.resourceType}.${this.resourceName}.shards`;
  }

  get snapshot_retention_limit(): string {
    return `${this.resourceType}.${this.resourceName}.snapshot_retention_limit`;
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
}
