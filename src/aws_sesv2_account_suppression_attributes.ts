import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesv2AccountSuppressionAttributesArgs {
  suppressed_reasons: string[];
}

export class aws_sesv2_account_suppression_attributes extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSesv2AccountSuppressionAttributesArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sesv2_account_suppression_attributes", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get suppressed_reasons(): string {
    return `${this.resourceType}.${this.resourceName}.suppressed_reasons`;
  }
}
