import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamRolePolicyAttachmentsExclusiveArgs {
  policy_arns: string[];
  role_name: string;
}

export class aws_iam_role_policy_attachments_exclusive extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIamRolePolicyAttachmentsExclusiveArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_role_policy_attachments_exclusive", resourceName);
  }

  get policy_arns(): string {
    return `${this.resourceType}.${this.resourceName}.policy_arns`;
  }

  get role_name(): string {
    return `${this.resourceType}.${this.resourceName}.role_name`;
  }
}
