import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecurityhubStandardsSubscriptionArgs {
  standards_arn: string;
}

export class aws_securityhub_standards_subscription extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSecurityhubStandardsSubscriptionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_securityhub_standards_subscription", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get standards_arn(): string {
    return `${this.resourceType}.${this.resourceName}.standards_arn`;
  }
}
