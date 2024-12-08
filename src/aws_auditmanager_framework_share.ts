import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAuditmanagerFrameworkShareArgs {
  comment?: string;
  destination_account: string;
  destination_region: string;
  framework_id: string;
}

export class aws_auditmanager_framework_share extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAuditmanagerFrameworkShareArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_auditmanager_framework_share", resourceName);
  }

  get destination_account(): string {
    return `${this.resourceType}.${this.resourceName}.destination_account`;
  }

  get destination_region(): string {
    return `${this.resourceType}.${this.resourceName}.destination_region`;
  }

  get framework_id(): string {
    return `${this.resourceType}.${this.resourceName}.framework_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
