import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOutpostsSitesArgs {
}

export class data_aws_outposts_sites extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsOutpostsSitesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_outposts_sites", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }
}
