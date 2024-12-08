import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2SubnetCidrReservationArgs {
  cidr_block: string;
  description?: string;
  reservation_type: string;
  subnet_id: string;
}

export class aws_ec2_subnet_cidr_reservation extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2SubnetCidrReservationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ec2_subnet_cidr_reservation", resourceName);
  }

  get cidr_block(): string {
    return `${this.resourceType}.${this.resourceName}.cidr_block`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get reservation_type(): string {
    return `${this.resourceType}.${this.resourceName}.reservation_type`;
  }

  get subnet_id(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_id`;
  }
}
