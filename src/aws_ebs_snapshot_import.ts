import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEbsSnapshotImportArgsClientData {
  comment?: string;
}

export interface AwsEbsSnapshotImportArgsDiskContainerUserBucket {
  s3_bucket: string;
  s3_key: string;
}

export interface AwsEbsSnapshotImportArgsDiskContainer {
  description?: string;
  format: string;
  url?: string;
  user_bucket?: AwsEbsSnapshotImportArgsDiskContainerUserBucket;
}

export interface AwsEbsSnapshotImportArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsEbsSnapshotImportArgs {
  encrypted?: boolean;
  kms_key_id?: string;
  permanent_restore?: boolean;
  role_name?: string;
  tags?: { [key: string]: string };
  temporary_restore_days?: number;
  client_data?: AwsEbsSnapshotImportArgsClientData;
  disk_container: AwsEbsSnapshotImportArgsDiskContainer;
  timeouts?: AwsEbsSnapshotImportArgsTimeouts;
}

export class aws_ebs_snapshot_import extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEbsSnapshotImportArgs) {
    const meta = {client_data:{isBlock:true},disk_container:{isBlock:true,user_bucket:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ebs_snapshot_import", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get data_encryption_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.data_encryption_key_id`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
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
