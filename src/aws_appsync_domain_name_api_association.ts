import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppsyncDomainNameApiAssociationArgs {
  api_id: string;
  domain_name: string;
}

export class aws_appsync_domain_name_api_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppsyncDomainNameApiAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_appsync_domain_name_api_association", resourceName);
  }

  get api_id(): string {
    return `${this.resourceType}.${this.resourceName}.api_id`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
