import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGuarddutyDetectorFeatureArgsAdditionalConfiguration {
  name: string;
  status: string;
}

export interface AwsGuarddutyDetectorFeatureArgs {
  detector_id: string;
  name: string;
  status: string;
  additional_configuration?: AwsGuarddutyDetectorFeatureArgsAdditionalConfiguration[];
}

export class aws_guardduty_detector_feature extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGuarddutyDetectorFeatureArgs) {
    const meta = {additional_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_guardduty_detector_feature", resourceName);
  }

  get detector_id(): string {
    return `${this.resourceType}.${this.resourceName}.detector_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
