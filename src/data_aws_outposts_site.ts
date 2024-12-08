import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOutpostsSiteArgs {
}

export class data_aws_outposts_site extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsOutpostsSiteArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_outposts_site", resourceName);
  }

  get account_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.account_id`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
