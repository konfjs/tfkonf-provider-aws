import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsFsxOntapFileSystemArgs {
  id: string;
}

export class data_aws_fsx_ontap_file_system extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsFsxOntapFileSystemArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_fsx_ontap_file_system", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get automatic_backup_retention_days(): string {
    return `data.${this.resourceType}.${this.resourceName}.automatic_backup_retention_days`;
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

  get endpoint_ip_address_range(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint_ip_address_range`;
  }

  get endpoints(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoints`;
  }

  get ha_pairs(): string {
    return `data.${this.resourceType}.${this.resourceName}.ha_pairs`;
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

  get preferred_subnet_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.preferred_subnet_id`;
  }

  get route_table_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.route_table_ids`;
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

  get throughput_capacity_per_ha_pair(): string {
    return `data.${this.resourceType}.${this.resourceName}.throughput_capacity_per_ha_pair`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }

  get weekly_maintenance_start_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.weekly_maintenance_start_time`;
  }
}
