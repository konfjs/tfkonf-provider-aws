import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFsxWindowsFileSystemArgsAuditLogConfiguration {
  file_access_audit_log_level?: string;
  file_share_access_audit_log_level?: string;
}

export interface AwsFsxWindowsFileSystemArgsDiskIopsConfiguration {
  mode?: string;
}

export interface AwsFsxWindowsFileSystemArgsSelfManagedActiveDirectory {
  dns_ips: string[];
  domain_name: string;
  file_system_administrators_group?: string;
  organizational_unit_distinguished_name?: string;
  password: string;
  username: string;
}

export interface AwsFsxWindowsFileSystemArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsFsxWindowsFileSystemArgs {
  active_directory_id?: string;
  aliases?: string[];
  automatic_backup_retention_days?: number;
  backup_id?: string;
  copy_tags_to_backups?: boolean;
  deployment_type?: string;
  final_backup_tags?: { [key: string]: string };
  security_group_ids?: string[];
  skip_final_backup?: boolean;
  storage_type?: string;
  subnet_ids: string[];
  tags?: { [key: string]: string };
  throughput_capacity: number;
  audit_log_configuration?: AwsFsxWindowsFileSystemArgsAuditLogConfiguration;
  disk_iops_configuration?: AwsFsxWindowsFileSystemArgsDiskIopsConfiguration;
  self_managed_active_directory?: AwsFsxWindowsFileSystemArgsSelfManagedActiveDirectory;
  timeouts?: AwsFsxWindowsFileSystemArgsTimeouts;
}

export class aws_fsx_windows_file_system extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsFsxWindowsFileSystemArgs) {
    const meta = {audit_log_configuration:{isBlock:true},disk_iops_configuration:{isBlock:true},self_managed_active_directory:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_fsx_windows_file_system", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get daily_automatic_backup_start_time(): string {
    return `${this.resourceType}.${this.resourceName}.daily_automatic_backup_start_time`;
  }

  get dns_name(): string {
    return `${this.resourceType}.${this.resourceName}.dns_name`;
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

  get preferred_file_server_ip(): string {
    return `${this.resourceType}.${this.resourceName}.preferred_file_server_ip`;
  }

  get preferred_subnet_id(): string {
    return `${this.resourceType}.${this.resourceName}.preferred_subnet_id`;
  }

  get remote_administration_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.remote_administration_endpoint`;
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
