import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsoadminPermissionsBoundaryAttachmentArgsPermissionsBoundaryCustomerManagedPolicyReference {
  name: string;
  path?: string;
}

export interface AwsSsoadminPermissionsBoundaryAttachmentArgsPermissionsBoundary {
  managed_policy_arn?: string;
  customer_managed_policy_reference?: AwsSsoadminPermissionsBoundaryAttachmentArgsPermissionsBoundaryCustomerManagedPolicyReference;
}

export interface AwsSsoadminPermissionsBoundaryAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsSsoadminPermissionsBoundaryAttachmentArgs {
  instance_arn: string;
  permission_set_arn: string;
  permissions_boundary: AwsSsoadminPermissionsBoundaryAttachmentArgsPermissionsBoundary;
  timeouts?: AwsSsoadminPermissionsBoundaryAttachmentArgsTimeouts;
}

export class aws_ssoadmin_permissions_boundary_attachment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSsoadminPermissionsBoundaryAttachmentArgs) {
    const meta = {permissions_boundary:{isBlock:true,customer_managed_policy_reference:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ssoadmin_permissions_boundary_attachment", resourceName);
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
