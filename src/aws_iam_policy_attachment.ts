import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamPolicyAttachmentArgs {
  groups?: string[];
  name: string;
  policy_arn: string;
  roles?: string[];
  users?: string[];
}

export class aws_iam_policy_attachment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIamPolicyAttachmentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_policy_attachment", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get policy_arn(): string {
    return `${this.resourceType}.${this.resourceName}.policy_arn`;
  }
}
