import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGuarddutyOrganizationAdminAccountArgs {
  admin_account_id: string;
}

export class aws_guardduty_organization_admin_account extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGuarddutyOrganizationAdminAccountArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_guardduty_organization_admin_account", resourceName);
  }

  get admin_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.admin_account_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
