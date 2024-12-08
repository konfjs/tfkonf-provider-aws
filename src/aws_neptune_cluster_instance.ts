import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNeptuneClusterInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsNeptuneClusterInstanceArgs {
  auto_minor_version_upgrade?: boolean;
  cluster_identifier: string;
  engine?: string;
  instance_class: string;
  port?: number;
  promotion_tier?: number;
  publicly_accessible?: boolean;
  skip_final_snapshot?: boolean;
  tags?: { [key: string]: string };
  timeouts?: AwsNeptuneClusterInstanceArgsTimeouts;
}

export class aws_neptune_cluster_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNeptuneClusterInstanceArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_neptune_cluster_instance", resourceName);
  }

  get address(): string {
    return `${this.resourceType}.${this.resourceName}.address`;
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

  get cluster_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_identifier`;
  }

  get dbi_resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.dbi_resource_id`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get engine_version(): string {
    return `${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get identifier(): string {
    return `${this.resourceType}.${this.resourceName}.identifier`;
  }

  get identifier_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.identifier_prefix`;
  }

  get instance_class(): string {
    return `${this.resourceType}.${this.resourceName}.instance_class`;
  }

  get kms_key_arn(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_arn`;
  }

  get neptune_parameter_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.neptune_parameter_group_name`;
  }

  get neptune_subnet_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.neptune_subnet_group_name`;
  }

  get preferred_backup_window(): string {
    return `${this.resourceType}.${this.resourceName}.preferred_backup_window`;
  }

  get preferred_maintenance_window(): string {
    return `${this.resourceType}.${this.resourceName}.preferred_maintenance_window`;
  }

  get storage_encrypted(): string {
    return `${this.resourceType}.${this.resourceName}.storage_encrypted`;
  }

  get storage_type(): string {
    return `${this.resourceType}.${this.resourceName}.storage_type`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get writer(): string {
    return `${this.resourceType}.${this.resourceName}.writer`;
  }
}
