import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftSnapshotCopyArgs {
  cluster_identifier: string;
  destination_region: string;
  snapshot_copy_grant_name?: string;
}

export class aws_redshift_snapshot_copy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRedshiftSnapshotCopyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_redshift_snapshot_copy", resourceName);
  }

  get cluster_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_identifier`;
  }

  get destination_region(): string {
    return `${this.resourceType}.${this.resourceName}.destination_region`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get manual_snapshot_retention_period(): string {
    return `${this.resourceType}.${this.resourceName}.manual_snapshot_retention_period`;
  }

  get retention_period(): string {
    return `${this.resourceType}.${this.resourceName}.retention_period`;
  }
}
