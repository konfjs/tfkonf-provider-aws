import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKinesisanalyticsv2ApplicationSnapshotArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsKinesisanalyticsv2ApplicationSnapshotArgs {
  application_name: string;
  snapshot_name: string;
  timeouts?: AwsKinesisanalyticsv2ApplicationSnapshotArgsTimeouts;
}

export class aws_kinesisanalyticsv2_application_snapshot extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsKinesisanalyticsv2ApplicationSnapshotArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_kinesisanalyticsv2_application_snapshot", resourceName);
  }

  get application_name(): string {
    return `${this.resourceType}.${this.resourceName}.application_name`;
  }

  get application_version_id(): string {
    return `${this.resourceType}.${this.resourceName}.application_version_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get snapshot_creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.snapshot_creation_timestamp`;
  }

  get snapshot_name(): string {
    return `${this.resourceType}.${this.resourceName}.snapshot_name`;
  }
}
