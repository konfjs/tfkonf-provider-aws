import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAuditmanagerAssessmentDelegationArgs {
  assessment_id: string;
  comment?: string;
  control_set_id: string;
  role_arn: string;
  role_type: string;
}

export class aws_auditmanager_assessment_delegation extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAuditmanagerAssessmentDelegationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_auditmanager_assessment_delegation", resourceName);
  }

  get assessment_id(): string {
    return `${this.resourceType}.${this.resourceName}.assessment_id`;
  }

  get control_set_id(): string {
    return `${this.resourceType}.${this.resourceName}.control_set_id`;
  }

  get delegation_id(): string {
    return `${this.resourceType}.${this.resourceName}.delegation_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get role_type(): string {
    return `${this.resourceType}.${this.resourceName}.role_type`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
