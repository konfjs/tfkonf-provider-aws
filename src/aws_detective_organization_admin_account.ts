import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDetectiveOrganizationAdminAccountArgs {
  account_id: string;
}

export class aws_detective_organization_admin_account extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDetectiveOrganizationAdminAccountArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_detective_organization_admin_account", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
