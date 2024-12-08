import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamUserPolicyAttachmentsExclusiveArgs {
  policy_arns: string[];
  user_name: string;
}

export class aws_iam_user_policy_attachments_exclusive extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIamUserPolicyAttachmentsExclusiveArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_user_policy_attachments_exclusive", resourceName);
  }

  get policy_arns(): string {
    return `${this.resourceType}.${this.resourceName}.policy_arns`;
  }

  get user_name(): string {
    return `${this.resourceType}.${this.resourceName}.user_name`;
  }
}
