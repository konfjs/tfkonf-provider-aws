import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLocationTrackerAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsLocationTrackerAssociationArgs {
  consumer_arn: string;
  tracker_name: string;
  timeouts?: AwsLocationTrackerAssociationArgsTimeouts;
}

export class aws_location_tracker_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLocationTrackerAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_location_tracker_association", resourceName);
  }

  get consumer_arn(): string {
    return `${this.resourceType}.${this.resourceName}.consumer_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tracker_name(): string {
    return `${this.resourceType}.${this.resourceName}.tracker_name`;
  }
}
