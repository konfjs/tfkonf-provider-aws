import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOrganizationsPoliciesArgs {
  filter: string;
}

export class data_aws_organizations_policies extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsOrganizationsPoliciesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_organizations_policies", resourceName);
  }

  get filter(): string {
    return `data.${this.resourceType}.${this.resourceName}.filter`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }
}
