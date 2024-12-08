import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAuditmanagerAssessmentArgsAssessmentReportsDestination {
  destination: string;
  destination_type: string;
}

export interface AwsAuditmanagerAssessmentArgsScopeAwsAccounts {
  id: string;
}

export interface AwsAuditmanagerAssessmentArgsScopeAwsServices {
  service_name: string;
}

export interface AwsAuditmanagerAssessmentArgsScope {
  aws_accounts?: AwsAuditmanagerAssessmentArgsScopeAwsAccounts[];
  aws_services?: AwsAuditmanagerAssessmentArgsScopeAwsServices[];
}

export interface AwsAuditmanagerAssessmentArgs {
  description?: string;
  framework_id: string;
  name: string;
  roles: any[];
  tags?: { [key: string]: string };
  assessment_reports_destination?: AwsAuditmanagerAssessmentArgsAssessmentReportsDestination[];
  scope?: AwsAuditmanagerAssessmentArgsScope[];
}

export class aws_auditmanager_assessment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAuditmanagerAssessmentArgs) {
    const meta = {assessment_reports_destination:{isBlock:true},scope:{isBlock:true,aws_accounts:{isBlock:true},aws_services:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_auditmanager_assessment", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get framework_id(): string {
    return `${this.resourceType}.${this.resourceName}.framework_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get roles(): string {
    return `${this.resourceType}.${this.resourceName}.roles`;
  }

  get roles_all(): string {
    return `${this.resourceType}.${this.resourceName}.roles_all`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
