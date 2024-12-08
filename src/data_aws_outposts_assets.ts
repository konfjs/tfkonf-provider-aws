import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOutpostsAssetsArgs {
  arn: string;
  host_id_filter?: string[];
  status_id_filter?: string[];
}

export class data_aws_outposts_assets extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsOutpostsAssetsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_outposts_assets", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get asset_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.asset_ids`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
