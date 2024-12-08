import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEbsSnapshotBlockPublicAccessArgs {
  state: string;
}

export class aws_ebs_snapshot_block_public_access extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEbsSnapshotBlockPublicAccessArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ebs_snapshot_block_public_access", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }
}
