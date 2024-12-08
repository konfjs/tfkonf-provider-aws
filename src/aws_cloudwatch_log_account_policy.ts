import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchLogAccountPolicyArgs {
  policy_document: string;
  policy_name: string;
  policy_type: string;
  scope?: string;
  selection_criteria?: string;
}

export class aws_cloudwatch_log_account_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudwatchLogAccountPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_log_account_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_document(): string {
    return `${this.resourceType}.${this.resourceName}.policy_document`;
  }

  get policy_name(): string {
    return `${this.resourceType}.${this.resourceName}.policy_name`;
  }

  get policy_type(): string {
    return `${this.resourceType}.${this.resourceName}.policy_type`;
  }
}
