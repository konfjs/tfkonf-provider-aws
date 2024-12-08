import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2CapacityReservationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsEc2CapacityReservationArgs {
  availability_zone: string;
  ebs_optimized?: boolean;
  end_date?: string;
  end_date_type?: string;
  ephemeral_storage?: boolean;
  instance_count: number;
  instance_match_criteria?: string;
  instance_platform: string;
  instance_type: string;
  outpost_arn?: string;
  placement_group_arn?: string;
  tags?: { [key: string]: string };
  tenancy?: string;
  timeouts?: AwsEc2CapacityReservationArgsTimeouts;
}

export class aws_ec2_capacity_reservation extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2CapacityReservationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ec2_capacity_reservation", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone`;
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

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
