import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOrganizationsOrganizationArgs {
  aws_service_access_principals?: string[];
  enabled_policy_types?: string[];
  feature_set?: string;
}

export class aws_organizations_organization extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsOrganizationsOrganizationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_organizations_organization", resourceName);
  }

  get accounts(): string {
    return `${this.resourceType}.${this.resourceName}.accounts`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get master_account_arn(): string {
    return `${this.resourceType}.${this.resourceName}.master_account_arn`;
  }

  get master_account_email(): string {
    return `${this.resourceType}.${this.resourceName}.master_account_email`;
  }

  get master_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.master_account_id`;
  }

  get master_account_name(): string {
    return `${this.resourceType}.${this.resourceName}.master_account_name`;
  }

  get non_master_accounts(): string {
    return `${this.resourceType}.${this.resourceName}.non_master_accounts`;
  }

  get roots(): string {
    return `${this.resourceType}.${this.resourceName}.roots`;
  }
}
