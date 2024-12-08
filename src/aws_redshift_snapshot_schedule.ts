import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftSnapshotScheduleArgs {
  definitions: string[];
  description?: string;
  force_destroy?: boolean;
  tags?: { [key: string]: string };
}

export class aws_redshift_snapshot_schedule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRedshiftSnapshotScheduleArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_redshift_snapshot_schedule", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get definitions(): string {
    return `${this.resourceType}.${this.resourceName}.definitions`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get identifier(): string {
    return `${this.resourceType}.${this.resourceName}.identifier`;
  }

  get identifier_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.identifier_prefix`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
