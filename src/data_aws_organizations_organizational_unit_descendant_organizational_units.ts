import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsArgs {
  parent_id: string;
}

export class data_aws_organizations_organizational_unit_descendant_organizational_units extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_organizations_organizational_unit_descendant_organizational_units", resourceName);
  }

  get children(): string {
    return `data.${this.resourceType}.${this.resourceName}.children`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get parent_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent_id`;
  }
}
