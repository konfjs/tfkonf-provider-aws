import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGuarddutyPublishingDestinationArgs {
  destination_arn: string;
  destination_type?: string;
  detector_id: string;
  kms_key_arn: string;
}

export class aws_guardduty_publishing_destination extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsGuarddutyPublishingDestinationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_guardduty_publishing_destination", resourceName);
  }

  get destination_arn(): string {
    return `${this.resourceType}.${this.resourceName}.destination_arn`;
  }

  get detector_id(): string {
    return `${this.resourceType}.${this.resourceName}.detector_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_arn(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_arn`;
  }
}
