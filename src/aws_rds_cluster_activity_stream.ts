import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRdsClusterActivityStreamArgs {
  engine_native_audit_fields_included?: boolean;
  kms_key_id: string;
  mode: string;
  resource_arn: string;
}

export class aws_rds_cluster_activity_stream extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRdsClusterActivityStreamArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_rds_cluster_activity_stream", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kinesis_stream_name(): string {
    return `${this.resourceType}.${this.resourceName}.kinesis_stream_name`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get mode(): string {
    return `${this.resourceType}.${this.resourceName}.mode`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }
}
