import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamRolePolicyAttachmentArgs {
  policy_arn: string;
  role: string;
}

export class aws_iam_role_policy_attachment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIamRolePolicyAttachmentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_role_policy_attachment", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_arn(): string {
    return `${this.resourceType}.${this.resourceName}.policy_arn`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
