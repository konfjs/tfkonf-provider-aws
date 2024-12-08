import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOrganizationsOrganizationalUnitChildAccountsArgs {
  parent_id: string;
}

export class data_aws_organizations_organizational_unit_child_accounts extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsOrganizationsOrganizationalUnitChildAccountsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_organizations_organizational_unit_child_accounts", resourceName);
  }

  get accounts(): string {
    return `data.${this.resourceType}.${this.resourceName}.accounts`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get parent_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent_id`;
  }
}
