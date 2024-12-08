import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAuditmanagerAssessmentReportArgs {
  assessment_id: string;
  description?: string;
  name: string;
}

export class aws_auditmanager_assessment_report extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAuditmanagerAssessmentReportArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_auditmanager_assessment_report", resourceName);
  }

  get assessment_id(): string {
    return `${this.resourceType}.${this.resourceName}.assessment_id`;
  }

  get author(): string {
    return `${this.resourceType}.${this.resourceName}.author`;
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
