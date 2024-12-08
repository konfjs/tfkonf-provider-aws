import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMemorydbSnapshotArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsMemorydbSnapshotArgs {
  cluster_name: string;
  kms_key_arn?: string;
  tags?: { [key: string]: string };
  timeouts?: AwsMemorydbSnapshotArgsTimeouts;
}

export class aws_memorydb_snapshot extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsMemorydbSnapshotArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_memorydb_snapshot", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cluster_configuration(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_configuration`;
  }

  get cluster_name(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get source(): string {
    return `${this.resourceType}.${this.resourceName}.source`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
