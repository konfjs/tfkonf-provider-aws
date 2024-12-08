import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsElbHostedZoneIdArgs {
  region?: string;
}

export class data_aws_elb_hosted_zone_id extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsElbHostedZoneIdArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_elb_hosted_zone_id", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
