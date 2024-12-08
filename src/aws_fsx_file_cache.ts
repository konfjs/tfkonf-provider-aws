import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFsxFileCacheArgsDataRepositoryAssociationNfs {
  dns_ips?: string[];
  version: string;
}

export interface AwsFsxFileCacheArgsDataRepositoryAssociation {
  data_repository_path: string;
  data_repository_subdirectories?: string[];
  file_cache_path: string;
  nfs?: AwsFsxFileCacheArgsDataRepositoryAssociationNfs[];
}

export interface AwsFsxFileCacheArgsLustreConfigurationMetadataConfiguration {
  storage_capacity: number;
}

export interface AwsFsxFileCacheArgsLustreConfiguration {
  deployment_type: string;
  per_unit_storage_throughput: number;
  weekly_maintenance_start_time?: string;
  metadata_configuration: AwsFsxFileCacheArgsLustreConfigurationMetadataConfiguration[];
}

export interface AwsFsxFileCacheArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsFsxFileCacheArgs {
  copy_tags_to_data_repository_associations?: boolean;
  file_cache_type: string;
  file_cache_type_version: string;
  security_group_ids?: string[];
  storage_capacity: number;
  subnet_ids: string[];
  tags?: { [key: string]: string };
  data_repository_association?: AwsFsxFileCacheArgsDataRepositoryAssociation[];
  lustre_configuration?: AwsFsxFileCacheArgsLustreConfiguration[];
  timeouts?: AwsFsxFileCacheArgsTimeouts;
}

export class aws_fsx_file_cache extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsFsxFileCacheArgs) {
    const meta = {data_repository_association:{isBlock:true,nfs:{isBlock:true}},lustre_configuration:{isBlock:true,metadata_configuration:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_fsx_file_cache", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get data_repository_association_ids(): string {
    return `${this.resourceType}.${this.resourceName}.data_repository_association_ids`;
  }

  get dns_name(): string {
    return `${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get file_cache_id(): string {
    return `${this.resourceType}.${this.resourceName}.file_cache_id`;
  }

  get file_cache_type(): string {
    return `${this.resourceType}.${this.resourceName}.file_cache_type`;
  }

  get file_cache_type_version(): string {
    return `${this.resourceType}.${this.resourceName}.file_cache_type_version`;
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

  get storage_capacity(): string {
    return `${this.resourceType}.${this.resourceName}.storage_capacity`;
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
}
