import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOrganizationsPolicyAttachmentArgs {
  policy_id: string;
  skip_destroy?: boolean;
  target_id: string;
}

export class aws_organizations_policy_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsOrganizationsPolicyAttachmentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_organizations_policy_attachment", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_id(): string {
    return `${this.resourceType}.${this.resourceName}.policy_id`;
  }

  get target_id(): string {
    return `${this.resourceType}.${this.resourceName}.target_id`;
  }
}
