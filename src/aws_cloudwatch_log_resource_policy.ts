import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchLogResourcePolicyArgs {
  policy_document: string;
  policy_name: string;
}

export class aws_cloudwatch_log_resource_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudwatchLogResourcePolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_log_resource_policy", resourceName);
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
}
