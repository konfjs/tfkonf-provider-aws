import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEbsSnapshotArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsEbsSnapshotArgs {
  description?: string;
  outpost_arn?: string;
  permanent_restore?: boolean;
  tags?: { [key: string]: string };
  temporary_restore_days?: number;
  volume_id: string;
  timeouts?: AwsEbsSnapshotArgsTimeouts;
}

export class aws_ebs_snapshot extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEbsSnapshotArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ebs_snapshot", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get data_encryption_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.data_encryption_key_id`;
  }

  get encrypted(): string {
    return `${this.resourceType}.${this.resourceName}.encrypted`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get owner_alias(): string {
    return `${this.resourceType}.${this.resourceName}.owner_alias`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get storage_tier(): string {
    return `${this.resourceType}.${this.resourceName}.storage_tier`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get volume_id(): string {
    return `${this.resourceType}.${this.resourceName}.volume_id`;
  }

  get volume_size(): string {
    return `${this.resourceType}.${this.resourceName}.volume_size`;
  }
}
