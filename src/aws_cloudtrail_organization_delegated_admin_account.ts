import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudtrailOrganizationDelegatedAdminAccountArgs {
  account_id: string;
}

export class aws_cloudtrail_organization_delegated_admin_account extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudtrailOrganizationDelegatedAdminAccountArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloudtrail_organization_delegated_admin_account", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get email(): string {
    return `${this.resourceType}.${this.resourceName}.email`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get service_principal(): string {
    return `${this.resourceType}.${this.resourceName}.service_principal`;
  }
}
