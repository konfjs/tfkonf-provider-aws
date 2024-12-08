import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2CapacityBlockReservationArgsTimeouts {
  create?: string;
}

export interface AwsEc2CapacityBlockReservationArgs {
  capacity_block_offering_id: string;
  instance_platform: string;
  tags?: { [key: string]: string };
  timeouts?: AwsEc2CapacityBlockReservationArgsTimeouts;
}

export class aws_ec2_capacity_block_reservation extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2CapacityBlockReservationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ec2_capacity_block_reservation", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get capacity_block_offering_id(): string {
    return `${this.resourceType}.${this.resourceName}.capacity_block_offering_id`;
  }

  get created_date(): string {
    return `${this.resourceType}.${this.resourceName}.created_date`;
  }

  get ebs_optimized(): string {
    return `${this.resourceType}.${this.resourceName}.ebs_optimized`;
  }

  get end_date(): string {
    return `${this.resourceType}.${this.resourceName}.end_date`;
  }

  get end_date_type(): string {
    return `${this.resourceType}.${this.resourceName}.end_date_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_count(): string {
    return `${this.resourceType}.${this.resourceName}.instance_count`;
  }

  get instance_platform(): string {
    return `${this.resourceType}.${this.resourceName}.instance_platform`;
  }

  get instance_type(): string {
    return `${this.resourceType}.${this.resourceName}.instance_type`;
  }

  get outpost_arn(): string {
    return `${this.resourceType}.${this.resourceName}.outpost_arn`;
  }

  get placement_group_arn(): string {
    return `${this.resourceType}.${this.resourceName}.placement_group_arn`;
  }

  get reservation_type(): string {
    return `${this.resourceType}.${this.resourceName}.reservation_type`;
  }

  get start_date(): string {
    return `${this.resourceType}.${this.resourceName}.start_date`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get tenancy(): string {
    return `${this.resourceType}.${this.resourceName}.tenancy`;
  }
}
