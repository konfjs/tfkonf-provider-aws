import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcIpamOrganizationAdminAccountArgs {
  delegated_admin_account_id: string;
}

export class aws_vpc_ipam_organization_admin_account extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpcIpamOrganizationAdminAccountArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_vpc_ipam_organization_admin_account", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get delegated_admin_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.delegated_admin_account_id`;
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
