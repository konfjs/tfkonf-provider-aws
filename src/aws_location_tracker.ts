import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLocationTrackerArgs {
  description?: string;
  kms_key_id?: string;
  position_filtering?: string;
  tags?: { [key: string]: string };
  tracker_name: string;
}

export class aws_location_tracker extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLocationTrackerArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_location_tracker", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get tracker_arn(): string {
    return `${this.resourceType}.${this.resourceName}.tracker_arn`;
  }

  get tracker_name(): string {
    return `${this.resourceType}.${this.resourceName}.tracker_name`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
