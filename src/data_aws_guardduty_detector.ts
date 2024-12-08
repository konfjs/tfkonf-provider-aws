import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsGuarddutyDetectorArgs {
}

export class data_aws_guardduty_detector extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsGuarddutyDetectorArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_guardduty_detector", resourceName);
  }

  get features(): string {
    return `data.${this.resourceType}.${this.resourceName}.features`;
  }

  get finding_publishing_frequency(): string {
    return `data.${this.resourceType}.${this.resourceName}.finding_publishing_frequency`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get service_role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_role_arn`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }
}
