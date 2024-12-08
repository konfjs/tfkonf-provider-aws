import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2CapacityBlockOfferingArgs {
  capacity_duration_hours: number;
  instance_count: number;
  instance_type: string;
}

export class data_aws_ec2_capacity_block_offering extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEc2CapacityBlockOfferingArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ec2_capacity_block_offering", resourceName);
  }

  get availability_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get capacity_block_offering_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.capacity_block_offering_id`;
  }

  get capacity_duration_hours(): string {
    return `data.${this.resourceType}.${this.resourceName}.capacity_duration_hours`;
  }

  get currency_code(): string {
    return `data.${this.resourceType}.${this.resourceName}.currency_code`;
  }

  get end_date_range(): string {
    return `data.${this.resourceType}.${this.resourceName}.end_date_range`;
  }

  get instance_count(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_count`;
  }

  get instance_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_type`;
  }

  get start_date_range(): string {
    return `data.${this.resourceType}.${this.resourceName}.start_date_range`;
  }

  get tenancy(): string {
    return `data.${this.resourceType}.${this.resourceName}.tenancy`;
  }

  get upfront_fee(): string {
    return `data.${this.resourceType}.${this.resourceName}.upfront_fee`;
  }
}
