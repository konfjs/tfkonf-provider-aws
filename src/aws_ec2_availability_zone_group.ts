import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2AvailabilityZoneGroupArgs {
  group_name: string;
  opt_in_status: string;
}

export class aws_ec2_availability_zone_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2AvailabilityZoneGroupArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ec2_availability_zone_group", resourceName);
  }

  get group_name(): string {
    return `${this.resourceType}.${this.resourceName}.group_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get opt_in_status(): string {
    return `${this.resourceType}.${this.resourceName}.opt_in_status`;
  }
}
