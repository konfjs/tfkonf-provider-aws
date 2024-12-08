import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEbsVolumeArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEbsVolumeArgsTimeouts {
  read?: string;
}

export interface DataAwsEbsVolumeArgs {
  most_recent?: boolean;
  filter?: DataAwsEbsVolumeArgsFilter[];
  timeouts?: DataAwsEbsVolumeArgsTimeouts;
}

export class data_aws_ebs_volume extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEbsVolumeArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ebs_volume", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get encrypted(): string {
    return `data.${this.resourceType}.${this.resourceName}.encrypted`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get iops(): string {
    return `data.${this.resourceType}.${this.resourceName}.iops`;
  }

  get kms_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get multi_attach_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.multi_attach_enabled`;
  }

  get outpost_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.outpost_arn`;
  }

  get size(): string {
    return `data.${this.resourceType}.${this.resourceName}.size`;
  }

  get snapshot_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.snapshot_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get throughput(): string {
    return `data.${this.resourceType}.${this.resourceName}.throughput`;
  }

  get volume_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.volume_id`;
  }

  get volume_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.volume_type`;
  }
}
