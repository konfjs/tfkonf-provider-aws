import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsoadminPermissionSetInlinePolicyArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsSsoadminPermissionSetInlinePolicyArgs {
  inline_policy: string;
  instance_arn: string;
  permission_set_arn: string;
  timeouts?: AwsSsoadminPermissionSetInlinePolicyArgsTimeouts;
}

export class aws_ssoadmin_permission_set_inline_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSsoadminPermissionSetInlinePolicyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ssoadmin_permission_set_inline_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get inline_policy(): string {
    return `${this.resourceType}.${this.resourceName}.inline_policy`;
  }

  get instance_arn(): string {
    return `${this.resourceType}.${this.resourceName}.instance_arn`;
  }

  get permission_set_arn(): string {
    return `${this.resourceType}.${this.resourceName}.permission_set_arn`;
  }
}
