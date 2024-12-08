import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAuditmanagerAccountRegistrationArgs {
  delegated_admin_account?: string;
  deregister_on_destroy?: boolean;
  kms_key?: string;
}

export class aws_auditmanager_account_registration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAuditmanagerAccountRegistrationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_auditmanager_account_registration", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
