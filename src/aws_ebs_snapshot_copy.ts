import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEbsSnapshotCopyArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsEbsSnapshotCopyArgs {
  description?: string;
  encrypted?: boolean;
  kms_key_id?: string;
  permanent_restore?: boolean;
  source_region: string;
  source_snapshot_id: string;
  tags?: { [key: string]: string };
  temporary_restore_days?: number;
  timeouts?: AwsEbsSnapshotCopyArgsTimeouts;
}

export class aws_ebs_snapshot_copy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEbsSnapshotCopyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ebs_snapshot_copy", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get data_encryption_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.data_encryption_key_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get outpost_arn(): string {
    return `${this.resourceType}.${this.resourceName}.outpost_arn`;
  }

  get owner_alias(): string {
    return `${this.resourceType}.${this.resourceName}.owner_alias`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get source_region(): string {
    return `${this.resourceType}.${this.resourceName}.source_region`;
  }

  get source_snapshot_id(): string {
    return `${this.resourceType}.${this.resourceName}.source_snapshot_id`;
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
