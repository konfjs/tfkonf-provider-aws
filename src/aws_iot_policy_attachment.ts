import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIotPolicyAttachmentArgs {
  policy: string;
  target: string;
}

export class aws_iot_policy_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIotPolicyAttachmentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iot_policy_attachment", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get target(): string {
    return `${this.resourceType}.${this.resourceName}.target`;
  }
}
