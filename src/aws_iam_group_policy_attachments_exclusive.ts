import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamGroupPolicyAttachmentsExclusiveArgs {
  group_name: string;
  policy_arns: string[];
}

export class aws_iam_group_policy_attachments_exclusive extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIamGroupPolicyAttachmentsExclusiveArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_group_policy_attachments_exclusive", resourceName);
  }

  get group_name(): string {
    return `${this.resourceType}.${this.resourceName}.group_name`;
  }

  get policy_arns(): string {
    return `${this.resourceType}.${this.resourceName}.policy_arns`;
  }
}
