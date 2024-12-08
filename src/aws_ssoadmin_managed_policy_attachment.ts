import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsoadminManagedPolicyAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsSsoadminManagedPolicyAttachmentArgs {
  instance_arn: string;
  managed_policy_arn: string;
  permission_set_arn: string;
  timeouts?: AwsSsoadminManagedPolicyAttachmentArgsTimeouts;
}

export class aws_ssoadmin_managed_policy_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSsoadminManagedPolicyAttachmentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ssoadmin_managed_policy_attachment", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_arn(): string {
    return `${this.resourceType}.${this.resourceName}.instance_arn`;
  }

  get managed_policy_arn(): string {
    return `${this.resourceType}.${this.resourceName}.managed_policy_arn`;
  }

  get managed_policy_name(): string {
    return `${this.resourceType}.${this.resourceName}.managed_policy_name`;
  }

  get permission_set_arn(): string {
    return `${this.resourceType}.${this.resourceName}.permission_set_arn`;
  }
}
