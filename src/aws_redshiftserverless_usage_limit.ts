import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftserverlessUsageLimitArgs {
  amount: number;
  breach_action?: string;
  period?: string;
  resource_arn: string;
  usage_type: string;
}

export class aws_redshiftserverless_usage_limit extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRedshiftserverlessUsageLimitArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_redshiftserverless_usage_limit", resourceName);
  }

  get amount(): string {
    return `${this.resourceType}.${this.resourceName}.amount`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }

  get usage_type(): string {
    return `${this.resourceType}.${this.resourceName}.usage_type`;
  }
}
