import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAuditmanagerOrganizationAdminAccountRegistrationArgs {
  admin_account_id: string;
}

export class aws_auditmanager_organization_admin_account_registration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAuditmanagerOrganizationAdminAccountRegistrationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_auditmanager_organization_admin_account_registration", resourceName);
  }

  get admin_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.admin_account_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get organization_id(): string {
    return `${this.resourceType}.${this.resourceName}.organization_id`;
  }
}
