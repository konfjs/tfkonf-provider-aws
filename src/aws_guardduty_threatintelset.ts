import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGuarddutyThreatintelsetArgs {
  activate: boolean;
  detector_id: string;
  format: string;
  location: string;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_guardduty_threatintelset extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsGuarddutyThreatintelsetArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_guardduty_threatintelset", resourceName);
  }

  get activate(): string {
    return `${this.resourceType}.${this.resourceName}.activate`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get detector_id(): string {
    return `${this.resourceType}.${this.resourceName}.detector_id`;
  }

  get format(): string {
    return `${this.resourceType}.${this.resourceName}.format`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
