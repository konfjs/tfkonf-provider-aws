import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftSnapshotScheduleAssociationArgs {
  cluster_identifier: string;
  schedule_identifier: string;
}

export class aws_redshift_snapshot_schedule_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRedshiftSnapshotScheduleAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_redshift_snapshot_schedule_association", resourceName);
  }

  get cluster_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_identifier`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get schedule_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.schedule_identifier`;
  }
}
