import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSpotDatafeedSubscriptionArgs {
}

export class data_aws_spot_datafeed_subscription extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSpotDatafeedSubscriptionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_spot_datafeed_subscription", resourceName);
  }

  get bucket(): string {
    return `data.${this.resourceType}.${this.resourceName}.bucket`;
  }

  get prefix(): string {
    return `data.${this.resourceType}.${this.resourceName}.prefix`;
  }
}
