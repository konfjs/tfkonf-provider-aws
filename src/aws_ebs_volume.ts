import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEbsVolumeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsEbsVolumeArgs {
  availability_zone: string;
  final_snapshot?: boolean;
  multi_attach_enabled?: boolean;
  outpost_arn?: string;
  tags?: { [key: string]: string };
  timeouts?: AwsEbsVolumeArgsTimeouts;
}

export class aws_ebs_volume extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEbsVolumeArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ebs_volume", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get encrypted(): string {
    return `${this.resourceType}.${this.resourceName}.encrypted`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get iops(): string {
    return `${this.resourceType}.${this.resourceName}.iops`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get size(): string {
    return `${this.resourceType}.${this.resourceName}.size`;
  }

  get snapshot_id(): string {
    return `${this.resourceType}.${this.resourceName}.snapshot_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get throughput(): string {
    return `${this.resourceType}.${this.resourceName}.throughput`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
