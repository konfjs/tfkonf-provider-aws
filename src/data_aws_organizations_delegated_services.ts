import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOrganizationsDelegatedServicesArgs {
  account_id: string;
}

export class data_aws_organizations_delegated_services extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsOrganizationsDelegatedServicesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_organizations_delegated_services", resourceName);
  }

  get account_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.account_id`;
  }

  get delegated_services(): string {
    return `data.${this.resourceType}.${this.resourceName}.delegated_services`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
