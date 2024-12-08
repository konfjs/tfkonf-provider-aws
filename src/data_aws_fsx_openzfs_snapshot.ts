import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsFsxOpenzfsSnapshotArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsFsxOpenzfsSnapshotArgs {
  most_recent?: boolean;
  name?: string;
  snapshot_ids?: string[];
  filter?: DataAwsFsxOpenzfsSnapshotArgsFilter[];
}

export class data_aws_fsx_openzfs_snapshot extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsFsxOpenzfsSnapshotArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_fsx_openzfs_snapshot", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get creation_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get snapshot_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.snapshot_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get volume_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.volume_id`;
  }
}
