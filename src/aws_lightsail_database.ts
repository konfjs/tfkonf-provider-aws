import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailDatabaseArgs {
  backup_retention_enabled?: boolean;
  blueprint_id: string;
  bundle_id: string;
  final_snapshot_name?: string;
  master_database_name: string;
  master_password: string;
  master_username: string;
  publicly_accessible?: boolean;
  relational_database_name: string;
  skip_final_snapshot?: boolean;
  tags?: { [key: string]: string };
}

export class aws_lightsail_database extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLightsailDatabaseArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_database", resourceName);
  }

  get apply_immediately(): string {
    return `${this.resourceType}.${this.resourceName}.apply_immediately`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get blueprint_id(): string {
    return `${this.resourceType}.${this.resourceName}.blueprint_id`;
  }

  get bundle_id(): string {
    return `${this.resourceType}.${this.resourceName}.bundle_id`;
  }

  get ca_certificate_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.ca_certificate_identifier`;
  }

  get cpu_count(): string {
    return `${this.resourceType}.${this.resourceName}.cpu_count`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get disk_size(): string {
    return `${this.resourceType}.${this.resourceName}.disk_size`;
  }

  get engine(): string {
    return `${this.resourceType}.${this.resourceName}.engine`;
  }

  get engine_version(): string {
    return `${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get master_database_name(): string {
    return `${this.resourceType}.${this.resourceName}.master_database_name`;
  }

  get master_endpoint_address(): string {
    return `${this.resourceType}.${this.resourceName}.master_endpoint_address`;
  }

  get master_endpoint_port(): string {
    return `${this.resourceType}.${this.resourceName}.master_endpoint_port`;
  }

  get master_password(): string {
    return `${this.resourceType}.${this.resourceName}.master_password`;
  }

  get master_username(): string {
    return `${this.resourceType}.${this.resourceName}.master_username`;
  }

  get preferred_backup_window(): string {
    return `${this.resourceType}.${this.resourceName}.preferred_backup_window`;
  }

  get preferred_maintenance_window(): string {
    return `${this.resourceType}.${this.resourceName}.preferred_maintenance_window`;
  }

  get ram_size(): string {
    return `${this.resourceType}.${this.resourceName}.ram_size`;
  }

  get relational_database_name(): string {
    return `${this.resourceType}.${this.resourceName}.relational_database_name`;
  }

  get secondary_availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.secondary_availability_zone`;
  }

  get support_code(): string {
    return `${this.resourceType}.${this.resourceName}.support_code`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
