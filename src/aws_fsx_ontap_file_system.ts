import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFsxOntapFileSystemArgsDiskIopsConfiguration {
  mode?: string;
}

export interface AwsFsxOntapFileSystemArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsFsxOntapFileSystemArgs {
  automatic_backup_retention_days?: number;
  deployment_type: string;
  fsx_admin_password?: string;
  preferred_subnet_id: string;
  security_group_ids?: string[];
  storage_capacity: number;
  storage_type?: string;
  subnet_ids: string[];
  tags?: { [key: string]: string };
  disk_iops_configuration?: AwsFsxOntapFileSystemArgsDiskIopsConfiguration;
  timeouts?: AwsFsxOntapFileSystemArgsTimeouts;
}

export class aws_fsx_ontap_file_system extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsFsxOntapFileSystemArgs) {
    const meta = {disk_iops_configuration:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_fsx_ontap_file_system", resourceName);
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

  get endpoint_ip_address_range(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_ip_address_range`;
  }

  get endpoints(): string {
    return `${this.resourceType}.${this.resourceName}.endpoints`;
  }

  get ha_pairs(): string {
    return `${this.resourceType}.${this.resourceName}.ha_pairs`;
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

  get preferred_subnet_id(): string {
    return `${this.resourceType}.${this.resourceName}.preferred_subnet_id`;
  }

  get route_table_ids(): string {
    return `${this.resourceType}.${this.resourceName}.route_table_ids`;
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

  get throughput_capacity_per_ha_pair(): string {
    return `${this.resourceType}.${this.resourceName}.throughput_capacity_per_ha_pair`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }

  get weekly_maintenance_start_time(): string {
    return `${this.resourceType}.${this.resourceName}.weekly_maintenance_start_time`;
  }
}
