import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecurityhubFindingAggregatorArgs {
  linking_mode: string;
  specified_regions?: string[];
}

export class aws_securityhub_finding_aggregator extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSecurityhubFindingAggregatorArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_securityhub_finding_aggregator", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get linking_mode(): string {
    return `${this.resourceType}.${this.resourceName}.linking_mode`;
  }
}
