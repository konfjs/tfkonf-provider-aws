import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLocationTrackerAssociationsArgs {
  tracker_name: string;
}

export class data_aws_location_tracker_associations extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsLocationTrackerAssociationsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_location_tracker_associations", resourceName);
  }

  get consumer_arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.consumer_arns`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get tracker_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.tracker_name`;
  }
}
