import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDefaultTagsArgs {
}

export class data_aws_default_tags extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsDefaultTagsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_default_tags", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
