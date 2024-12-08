import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftLoggingArgs {
  bucket_name?: string;
  cluster_identifier: string;
  log_destination_type?: string;
  log_exports?: string[];
  s3_key_prefix?: string;
}

export class aws_redshift_logging extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRedshiftLoggingArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_redshift_logging", resourceName);
  }

  get cluster_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_identifier`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
