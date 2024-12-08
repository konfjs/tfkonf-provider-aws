import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamUserPolicyArgs {
  policy: string;
  user: string;
}

export class aws_iam_user_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIamUserPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_user_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get user(): string {
    return `${this.resourceType}.${this.resourceName}.user`;
  }
}
