import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamGroupPoliciesExclusiveArgs {
  group_name: string;
  policy_names: string[];
}

export class aws_iam_group_policies_exclusive extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIamGroupPoliciesExclusiveArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_group_policies_exclusive", resourceName);
  }

  get group_name(): string {
    return `${this.resourceType}.${this.resourceName}.group_name`;
  }

  get policy_names(): string {
    return `${this.resourceType}.${this.resourceName}.policy_names`;
  }
}
