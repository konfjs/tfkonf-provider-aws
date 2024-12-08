import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecurityhubStandardsControlArgs {
  control_status: string;
  standards_control_arn: string;
}

export class aws_securityhub_standards_control extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSecurityhubStandardsControlArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_securityhub_standards_control", resourceName);
  }

  get control_id(): string {
    return `${this.resourceType}.${this.resourceName}.control_id`;
  }

  get control_status(): string {
    return `${this.resourceType}.${this.resourceName}.control_status`;
  }

  get control_status_updated_at(): string {
    return `${this.resourceType}.${this.resourceName}.control_status_updated_at`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get disabled_reason(): string {
    return `${this.resourceType}.${this.resourceName}.disabled_reason`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get related_requirements(): string {
    return `${this.resourceType}.${this.resourceName}.related_requirements`;
  }

  get remediation_url(): string {
    return `${this.resourceType}.${this.resourceName}.remediation_url`;
  }

  get severity_rating(): string {
    return `${this.resourceType}.${this.resourceName}.severity_rating`;
  }

  get standards_control_arn(): string {
    return `${this.resourceType}.${this.resourceName}.standards_control_arn`;
  }

  get title(): string {
    return `${this.resourceType}.${this.resourceName}.title`;
  }
}
