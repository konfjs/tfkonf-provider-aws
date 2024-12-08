import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFsxLustreFileSystemArgsLogConfiguration {
  level?: string;
}

export interface AwsFsxLustreFileSystemArgsMetadataConfiguration {
}

export interface AwsFsxLustreFileSystemArgsRootSquashConfiguration {
  no_squash_nids?: string[];
  root_squash?: string;
}

export interface AwsFsxLustreFileSystemArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsFsxLustreFileSystemArgs {
  backup_id?: string;
  copy_tags_to_backups?: boolean;
  data_compression_type?: string;
  deployment_type?: string;
  drive_cache_type?: string;
  final_backup_tags?: { [key: string]: string };
  import_path?: string;
  per_unit_storage_throughput?: number;
  security_group_ids?: string[];
  skip_final_backup?: boolean;
  storage_capacity?: number;
  storage_type?: string;
  subnet_ids: string[];
  tags?: { [key: string]: string };
  log_configuration?: AwsFsxLustreFileSystemArgsLogConfiguration;
  metadata_configuration?: AwsFsxLustreFileSystemArgsMetadataConfiguration;
  root_squash_configuration?: AwsFsxLustreFileSystemArgsRootSquashConfiguration;
  timeouts?: AwsFsxLustreFileSystemArgsTimeouts;
}

export class aws_fsx_lustre_file_system extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsFsxLustreFileSystemArgs) {
    const meta = {log_configuration:{isBlock:true},metadata_configuration:{isBlock:true},root_squash_configuration:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_fsx_lustre_file_system", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get auto_import_policy(): string {
    return `${this.resourceType}.${this.resourceName}.auto_import_policy`;
  }

  get automatic_backup_retention_days(): string {
    return `${this.resourceType}.${this.resourceName}.automatic_backup_retention_days`;
  }

  get daily_automatic_backup_start_time(): string {
    return `${this.resourceType}.${this.resourceName}.daily_automatic_backup_start_time`;
  }

  get dns_name(): string {
    return `${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get export_path(): string {
    return `${this.resourceType}.${this.resourceName}.export_path`;
  }

  get file_system_type_version(): string {
    return `${this.resourceType}.${this.resourceName}.file_system_type_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get imported_file_chunk_size(): string {
    return `${this.resourceType}.${this.resourceName}.imported_file_chunk_size`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get mount_name(): string {
    return `${this.resourceType}.${this.resourceName}.mount_name`;
  }

  get network_interface_ids(): string {
    return `${this.resourceType}.${this.resourceName}.network_interface_ids`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }

  get weekly_maintenance_start_time(): string {
    return `${this.resourceType}.${this.resourceName}.weekly_maintenance_start_time`;
  }
}
