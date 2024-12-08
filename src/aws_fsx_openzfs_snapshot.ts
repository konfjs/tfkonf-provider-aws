import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFsxOpenzfsSnapshotArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface AwsFsxOpenzfsSnapshotArgs {
  name: string;
  tags?: { [key: string]: string };
  volume_id: string;
  timeouts?: AwsFsxOpenzfsSnapshotArgsTimeouts;
}

export class aws_fsx_openzfs_snapshot extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsFsxOpenzfsSnapshotArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_fsx_openzfs_snapshot", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get creation_time(): string {
    return `${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get volume_id(): string {
    return `${this.resourceType}.${this.resourceName}.volume_id`;
  }
}
