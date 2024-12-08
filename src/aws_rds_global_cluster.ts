import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRdsGlobalClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsRdsGlobalClusterArgs {
  database_name?: string;
  deletion_protection?: boolean;
  force_destroy?: boolean;
  global_cluster_identifier: string;
  timeouts?: AwsRdsGlobalClusterArgsTimeouts;
}

export class aws_rds_global_cluster extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRdsGlobalClusterArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_rds_global_cluster", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get engine(): string {
    return `${this.resourceType}.${this.resourceName}.engine`;
  }

  get engine_lifecycle_support(): string {
    return `${this.resourceType}.${this.resourceName}.engine_lifecycle_support`;
  }

  get engine_version(): string {
    return `${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get engine_version_actual(): string {
    return `${this.resourceType}.${this.resourceName}.engine_version_actual`;
  }

  get global_cluster_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.global_cluster_identifier`;
  }

  get global_cluster_members(): string {
    return `${this.resourceType}.${this.resourceName}.global_cluster_members`;
  }

  get global_cluster_resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.global_cluster_resource_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get source_db_cluster_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.source_db_cluster_identifier`;
  }

  get storage_encrypted(): string {
    return `${this.resourceType}.${this.resourceName}.storage_encrypted`;
  }
}
