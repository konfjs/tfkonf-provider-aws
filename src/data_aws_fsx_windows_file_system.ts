import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsFsxWindowsFileSystemArgs {
  id: string;
}

export class data_aws_fsx_windows_file_system extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsFsxWindowsFileSystemArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_fsx_windows_file_system", resourceName);
  }

  get active_directory_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.active_directory_id`;
  }

  get aliases(): string {
    return `data.${this.resourceType}.${this.resourceName}.aliases`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get audit_log_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.audit_log_configuration`;
  }

  get automatic_backup_retention_days(): string {
    return `data.${this.resourceType}.${this.resourceName}.automatic_backup_retention_days`;
  }

  get backup_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.backup_id`;
  }

  get copy_tags_to_backups(): string {
    return `data.${this.resourceType}.${this.resourceName}.copy_tags_to_backups`;
  }

  get daily_automatic_backup_start_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.daily_automatic_backup_start_time`;
  }

  get deployment_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.deployment_type`;
  }

  get disk_iops_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.disk_iops_configuration`;
  }

  get dns_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get network_interface_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_interface_ids`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get preferred_file_server_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.preferred_file_server_ip`;
  }

  get preferred_subnet_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.preferred_subnet_id`;
  }

  get security_group_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get skip_final_backup(): string {
    return `data.${this.resourceType}.${this.resourceName}.skip_final_backup`;
  }

  get storage_capacity(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_capacity`;
  }

  get storage_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_type`;
  }

  get subnet_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get throughput_capacity(): string {
    return `data.${this.resourceType}.${this.resourceName}.throughput_capacity`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }

  get weekly_maintenance_start_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.weekly_maintenance_start_time`;
  }
}
