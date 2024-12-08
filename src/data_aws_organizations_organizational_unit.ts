import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOrganizationsOrganizationalUnitArgs {
  name: string;
  parent_id: string;
}

export class data_aws_organizations_organizational_unit extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsOrganizationsOrganizationalUnitArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_organizations_organizational_unit", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get parent_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent_id`;
  }
}
