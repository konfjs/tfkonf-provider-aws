import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOrganizationsPoliciesForTargetArgs {
  filter: string;
  target_id: string;
}

export class data_aws_organizations_policies_for_target extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsOrganizationsPoliciesForTargetArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_organizations_policies_for_target", resourceName);
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

  get target_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.target_id`;
  }
}
