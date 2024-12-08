import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNeptuneGlobalClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsNeptuneGlobalClusterArgs {
  deletion_protection?: boolean;
  global_cluster_identifier: string;
  timeouts?: AwsNeptuneGlobalClusterArgsTimeouts;
}

export class aws_neptune_global_cluster extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNeptuneGlobalClusterArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_neptune_global_cluster", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get engine(): string {
    return `${this.resourceType}.${this.resourceName}.engine`;
  }

  get engine_version(): string {
    return `${this.resourceType}.${this.resourceName}.engine_version`;
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

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get storage_encrypted(): string {
    return `${this.resourceType}.${this.resourceName}.storage_encrypted`;
  }
}
