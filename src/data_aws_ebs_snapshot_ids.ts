import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEbsSnapshotIdsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEbsSnapshotIdsArgsTimeouts {
  read?: string;
}

export interface DataAwsEbsSnapshotIdsArgs {
  owners?: string[];
  restorable_by_user_ids?: string[];
  filter?: DataAwsEbsSnapshotIdsArgsFilter[];
  timeouts?: DataAwsEbsSnapshotIdsArgsTimeouts;
}

export class data_aws_ebs_snapshot_ids extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEbsSnapshotIdsArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ebs_snapshot_ids", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }
}
