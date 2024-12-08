import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFsxOpenzfsFileSystemArgsDiskIopsConfiguration {
  mode?: string;
}

export interface AwsFsxOpenzfsFileSystemArgsRootVolumeConfigurationNfsExportsClientConfigurations {
  clients: string;
  options: string[];
}

export interface AwsFsxOpenzfsFileSystemArgsRootVolumeConfigurationNfsExports {
  client_configurations: AwsFsxOpenzfsFileSystemArgsRootVolumeConfigurationNfsExportsClientConfigurations[];
}

export interface AwsFsxOpenzfsFileSystemArgsRootVolumeConfigurationUserAndGroupQuotas {
  id: number;
  storage_capacity_quota_gib: number;
  type: string;
}

export interface AwsFsxOpenzfsFileSystemArgsRootVolumeConfiguration {
  copy_tags_to_snapshots?: boolean;
  data_compression_type?: string;
  record_size_kib?: number;
  nfs_exports?: AwsFsxOpenzfsFileSystemArgsRootVolumeConfigurationNfsExports;
  user_and_group_quotas?: AwsFsxOpenzfsFileSystemArgsRootVolumeConfigurationUserAndGroupQuotas[];
}

export interface AwsFsxOpenzfsFileSystemArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsFsxOpenzfsFileSystemArgs {
  automatic_backup_retention_days?: number;
  backup_id?: string;
  copy_tags_to_backups?: boolean;
  copy_tags_to_volumes?: boolean;
  delete_options?: string[];
  deployment_type: string;
  final_backup_tags?: { [key: string]: string };
  preferred_subnet_id?: string;
  security_group_ids?: string[];
  skip_final_backup?: boolean;
  storage_capacity?: number;
  storage_type?: string;
  subnet_ids: string[];
  tags?: { [key: string]: string };
  throughput_capacity: number;
  disk_iops_configuration?: AwsFsxOpenzfsFileSystemArgsDiskIopsConfiguration;
  root_volume_configuration?: AwsFsxOpenzfsFileSystemArgsRootVolumeConfiguration;
  timeouts?: AwsFsxOpenzfsFileSystemArgsTimeouts;
}

export class aws_fsx_openzfs_file_system extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsFsxOpenzfsFileSystemArgs) {
    const meta = {disk_iops_configuration:{isBlock:true},root_volume_configuration:{isBlock:true,nfs_exports:{isBlock:true,client_configurations:{isBlock:true}},user_and_group_quotas:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_fsx_openzfs_file_system", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get daily_automatic_backup_start_time(): string {
    return `${this.resourceType}.${this.resourceName}.daily_automatic_backup_start_time`;
  }

  get deployment_type(): string {
    return `${this.resourceType}.${this.resourceName}.deployment_type`;
  }

  get dns_name(): string {
    return `${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get endpoint_ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_ip_address`;
  }

  get endpoint_ip_address_range(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_ip_address_range`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get network_interface_ids(): string {
    return `${this.resourceType}.${this.resourceName}.network_interface_ids`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get root_volume_id(): string {
    return `${this.resourceType}.${this.resourceName}.root_volume_id`;
  }

  get route_table_ids(): string {
    return `${this.resourceType}.${this.resourceName}.route_table_ids`;
  }

  get subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get throughput_capacity(): string {
    return `${this.resourceType}.${this.resourceName}.throughput_capacity`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }

  get weekly_maintenance_start_time(): string {
    return `${this.resourceType}.${this.resourceName}.weekly_maintenance_start_time`;
  }
}
