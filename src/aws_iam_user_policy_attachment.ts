import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamUserPolicyAttachmentArgs {
  policy_arn: string;
  user: string;
}

export class aws_iam_user_policy_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIamUserPolicyAttachmentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_user_policy_attachment", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_arn(): string {
    return `${this.resourceType}.${this.resourceName}.policy_arn`;
  }

  get user(): string {
    return `${this.resourceType}.${this.resourceName}.user`;
  }
}
