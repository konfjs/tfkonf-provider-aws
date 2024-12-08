import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsMemorydbSnapshotArgs {
  name: string;
}

export class data_aws_memorydb_snapshot extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsMemorydbSnapshotArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_memorydb_snapshot", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get cluster_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_configuration`;
  }

  get cluster_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_arn`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get source(): string {
    return `data.${this.resourceType}.${this.resourceName}.source`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
