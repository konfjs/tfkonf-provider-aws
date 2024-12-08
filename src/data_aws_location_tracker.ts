import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLocationTrackerArgs {
  tracker_name: string;
}

export class data_aws_location_tracker extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsLocationTrackerArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_location_tracker", resourceName);
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get position_filtering(): string {
    return `data.${this.resourceType}.${this.resourceName}.position_filtering`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get tracker_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.tracker_arn`;
  }

  get tracker_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.tracker_name`;
  }

  get update_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_time`;
  }
}
