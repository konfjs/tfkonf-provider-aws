import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFsxOpenzfsVolumeArgsNfsExportsClientConfigurations {
  clients: string;
  options: string[];
}

export interface AwsFsxOpenzfsVolumeArgsNfsExports {
  client_configurations: AwsFsxOpenzfsVolumeArgsNfsExportsClientConfigurations[];
}

export interface AwsFsxOpenzfsVolumeArgsOriginSnapshot {
  copy_strategy: string;
  snapshot_arn: string;
}

export interface AwsFsxOpenzfsVolumeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsFsxOpenzfsVolumeArgsUserAndGroupQuotas {
  id: number;
  storage_capacity_quota_gib: number;
  type: string;
}

export interface AwsFsxOpenzfsVolumeArgs {
  copy_tags_to_snapshots?: boolean;
  data_compression_type?: string;
  delete_volume_options?: string[];
  name: string;
  parent_volume_id: string;
  record_size_kib?: number;
  tags?: { [key: string]: string };
  volume_type?: string;
  nfs_exports?: AwsFsxOpenzfsVolumeArgsNfsExports;
  origin_snapshot?: AwsFsxOpenzfsVolumeArgsOriginSnapshot;
  timeouts?: AwsFsxOpenzfsVolumeArgsTimeouts;
  user_and_group_quotas?: AwsFsxOpenzfsVolumeArgsUserAndGroupQuotas[];
}

export class aws_fsx_openzfs_volume extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsFsxOpenzfsVolumeArgs) {
    const meta = {nfs_exports:{isBlock:true,client_configurations:{isBlock:true}},origin_snapshot:{isBlock:true},timeouts:{isBlock:true},user_and_group_quotas:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_fsx_openzfs_volume", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent_volume_id(): string {
    return `${this.resourceType}.${this.resourceName}.parent_volume_id`;
  }

  get read_only(): string {
    return `${this.resourceType}.${this.resourceName}.read_only`;
  }

  get storage_capacity_quota_gib(): string {
    return `${this.resourceType}.${this.resourceName}.storage_capacity_quota_gib`;
  }

  get storage_capacity_reservation_gib(): string {
    return `${this.resourceType}.${this.resourceName}.storage_capacity_reservation_gib`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
