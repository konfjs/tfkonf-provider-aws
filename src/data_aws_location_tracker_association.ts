import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLocationTrackerAssociationArgs {
  consumer_arn: string;
  tracker_name: string;
}

export class data_aws_location_tracker_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsLocationTrackerAssociationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_location_tracker_association", resourceName);
  }

  get consumer_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.consumer_arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get tracker_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.tracker_name`;
  }
}
