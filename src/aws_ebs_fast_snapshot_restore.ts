import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEbsFastSnapshotRestoreArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsEbsFastSnapshotRestoreArgs {
  availability_zone: string;
  snapshot_id: string;
  timeouts?: AwsEbsFastSnapshotRestoreArgsTimeouts;
}

export class aws_ebs_fast_snapshot_restore extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEbsFastSnapshotRestoreArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ebs_fast_snapshot_restore", resourceName);
  }

  get availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get snapshot_id(): string {
    return `${this.resourceType}.${this.resourceName}.snapshot_id`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }
}
