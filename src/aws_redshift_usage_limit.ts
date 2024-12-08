import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftUsageLimitArgs {
  amount: number;
  breach_action?: string;
  cluster_identifier: string;
  feature_type: string;
  limit_type: string;
  period?: string;
  tags?: { [key: string]: string };
}

export class aws_redshift_usage_limit extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRedshiftUsageLimitArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_redshift_usage_limit", resourceName);
  }

  get amount(): string {
    return `${this.resourceType}.${this.resourceName}.amount`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cluster_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_identifier`;
  }

  get feature_type(): string {
    return `${this.resourceType}.${this.resourceName}.feature_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get limit_type(): string {
    return `${this.resourceType}.${this.resourceName}.limit_type`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
