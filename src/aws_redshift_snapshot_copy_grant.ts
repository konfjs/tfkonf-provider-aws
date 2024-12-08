import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftSnapshotCopyGrantArgs {
  snapshot_copy_grant_name: string;
  tags?: { [key: string]: string };
}

export class aws_redshift_snapshot_copy_grant extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRedshiftSnapshotCopyGrantArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_redshift_snapshot_copy_grant", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get snapshot_copy_grant_name(): string {
    return `${this.resourceType}.${this.resourceName}.snapshot_copy_grant_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
