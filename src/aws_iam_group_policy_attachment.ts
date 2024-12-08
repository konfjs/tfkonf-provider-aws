import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamGroupPolicyAttachmentArgs {
  group: string;
  policy_arn: string;
}

export class aws_iam_group_policy_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIamGroupPolicyAttachmentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_group_policy_attachment", resourceName);
  }

  get group(): string {
    return `${this.resourceType}.${this.resourceName}.group`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_arn(): string {
    return `${this.resourceType}.${this.resourceName}.policy_arn`;
  }
}
