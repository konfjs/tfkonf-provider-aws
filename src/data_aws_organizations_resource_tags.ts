import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOrganizationsResourceTagsArgs {
  resource_id: string;
}

export class data_aws_organizations_resource_tags extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsOrganizationsResourceTagsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_organizations_resource_tags", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get resource_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
