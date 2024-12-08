import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsResourceexplorer2SearchArgs {
  query_string: string;
}

export class data_aws_resourceexplorer2_search extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsResourceexplorer2SearchArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_resourceexplorer2_search", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get query_string(): string {
    return `data.${this.resourceType}.${this.resourceName}.query_string`;
  }

  get resource_count(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_count`;
  }

  get resources(): string {
    return `data.${this.resourceType}.${this.resourceName}.resources`;
  }

  get view_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.view_arn`;
  }
}
