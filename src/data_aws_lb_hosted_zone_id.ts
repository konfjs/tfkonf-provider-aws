import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLbHostedZoneIdArgs {
  load_balancer_type?: string;
  region?: string;
}

export class data_aws_lb_hosted_zone_id extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsLbHostedZoneIdArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_lb_hosted_zone_id", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}