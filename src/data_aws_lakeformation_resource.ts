import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLakeformationResourceArgs {
  arn: string;
}

export class data_aws_lakeformation_resource extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsLakeformationResourceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_lakeformation_resource", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_modified`;
  }

  get role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.role_arn`;
  }
}
