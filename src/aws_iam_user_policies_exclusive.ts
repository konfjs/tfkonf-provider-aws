import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamUserPoliciesExclusiveArgs {
  policy_names: string[];
  user_name: string;
}

export class aws_iam_user_policies_exclusive extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIamUserPoliciesExclusiveArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_user_policies_exclusive", resourceName);
  }

  get policy_names(): string {
    return `${this.resourceType}.${this.resourceName}.policy_names`;
  }

  get user_name(): string {
    return `${this.resourceType}.${this.resourceName}.user_name`;
  }
}
