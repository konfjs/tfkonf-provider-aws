import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServicecatalogOrganizationsAccessArgsTimeouts {
  read?: string;
}

export interface AwsServicecatalogOrganizationsAccessArgs {
  enabled: boolean;
  timeouts?: AwsServicecatalogOrganizationsAccessArgsTimeouts;
}

export class aws_servicecatalog_organizations_access extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsServicecatalogOrganizationsAccessArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_servicecatalog_organizations_access", resourceName);
  }

  get enabled(): string {
    return `${this.resourceType}.${this.resourceName}.enabled`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
