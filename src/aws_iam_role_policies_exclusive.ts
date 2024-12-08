import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamRolePoliciesExclusiveArgs {
  policy_names: string[];
  role_name: string;
}

export class aws_iam_role_policies_exclusive extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIamRolePoliciesExclusiveArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_role_policies_exclusive", resourceName);
  }

  get policy_names(): string {
    return `${this.resourceType}.${this.resourceName}.policy_names`;
  }

  get role_name(): string {
    return `${this.resourceType}.${this.resourceName}.role_name`;
  }
}
