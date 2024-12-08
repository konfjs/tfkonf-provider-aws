import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecurityhubOrganizationAdminAccountArgs {
  admin_account_id: string;
}

export class aws_securityhub_organization_admin_account extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSecurityhubOrganizationAdminAccountArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_securityhub_organization_admin_account", resourceName);
  }

  get admin_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.admin_account_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
