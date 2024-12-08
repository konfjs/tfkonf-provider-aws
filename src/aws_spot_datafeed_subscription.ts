import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSpotDatafeedSubscriptionArgs {
  bucket: string;
  prefix?: string;
}

export class aws_spot_datafeed_subscription extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSpotDatafeedSubscriptionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_spot_datafeed_subscription", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
