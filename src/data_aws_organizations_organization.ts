import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOrganizationsOrganizationArgs {
}

export class data_aws_organizations_organization extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsOrganizationsOrganizationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_organizations_organization", resourceName);
  }

  get accounts(): string {
    return `data.${this.resourceType}.${this.resourceName}.accounts`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_service_access_principals(): string {
    return `data.${this.resourceType}.${this.resourceName}.aws_service_access_principals`;
  }

  get enabled_policy_types(): string {
    return `data.${this.resourceType}.${this.resourceName}.enabled_policy_types`;
  }

  get feature_set(): string {
    return `data.${this.resourceType}.${this.resourceName}.feature_set`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get master_account_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.master_account_arn`;
  }

  get master_account_email(): string {
    return `data.${this.resourceType}.${this.resourceName}.master_account_email`;
  }

  get master_account_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.master_account_id`;
  }

  get master_account_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.master_account_name`;
  }

  get non_master_accounts(): string {
    return `data.${this.resourceType}.${this.resourceName}.non_master_accounts`;
  }

  get roots(): string {
    return `data.${this.resourceType}.${this.resourceName}.roots`;
  }
}
