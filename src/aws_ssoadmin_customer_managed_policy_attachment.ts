import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsoadminCustomerManagedPolicyAttachmentArgsCustomerManagedPolicyReference {
  name: string;
  path?: string;
}

export interface AwsSsoadminCustomerManagedPolicyAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsSsoadminCustomerManagedPolicyAttachmentArgs {
  instance_arn: string;
  permission_set_arn: string;
  customer_managed_policy_reference: AwsSsoadminCustomerManagedPolicyAttachmentArgsCustomerManagedPolicyReference;
  timeouts?: AwsSsoadminCustomerManagedPolicyAttachmentArgsTimeouts;
}

export class aws_ssoadmin_customer_managed_policy_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSsoadminCustomerManagedPolicyAttachmentArgs) {
    const meta = {customer_managed_policy_reference:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ssoadmin_customer_managed_policy_attachment", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_arn(): string {
    return `${this.resourceType}.${this.resourceName}.instance_arn`;
  }

  get permission_set_arn(): string {
    return `${this.resourceType}.${this.resourceName}.permission_set_arn`;
  }
}
