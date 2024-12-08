import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOrganizationsDelegatedAdministratorsArgs {
  service_principal?: string;
}

export class data_aws_organizations_delegated_administrators extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsOrganizationsDelegatedAdministratorsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_organizations_delegated_administrators", resourceName);
  }

  get delegated_administrators(): string {
    return `data.${this.resourceType}.${this.resourceName}.delegated_administrators`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
