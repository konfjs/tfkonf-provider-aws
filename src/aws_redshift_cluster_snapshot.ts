import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftClusterSnapshotArgs {
  cluster_identifier: string;
  manual_snapshot_retention_period?: number;
  snapshot_identifier: string;
  tags?: { [key: string]: string };
}

export class aws_redshift_cluster_snapshot extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRedshiftClusterSnapshotArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_redshift_cluster_snapshot", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cluster_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_identifier`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get owner_account(): string {
    return `${this.resourceType}.${this.resourceName}.owner_account`;
  }

  get snapshot_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.snapshot_identifier`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
