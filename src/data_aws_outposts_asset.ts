import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOutpostsAssetArgs {
  arn: string;
  asset_id: string;
}

export class data_aws_outposts_asset extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsOutpostsAssetArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_outposts_asset", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get asset_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.asset_id`;
  }

  get asset_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.asset_type`;
  }

  get host_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.host_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get rack_elevation(): string {
    return `data.${this.resourceType}.${this.resourceName}.rack_elevation`;
  }

  get rack_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.rack_id`;
  }
}
