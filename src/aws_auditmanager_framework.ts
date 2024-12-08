import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAuditmanagerFrameworkArgsControlSetsControls {
  id: string;
}

export interface AwsAuditmanagerFrameworkArgsControlSets {
  name: string;
  controls?: AwsAuditmanagerFrameworkArgsControlSetsControls[];
}

export interface AwsAuditmanagerFrameworkArgs {
  compliance_type?: string;
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  control_sets?: AwsAuditmanagerFrameworkArgsControlSets[];
}

export class aws_auditmanager_framework extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAuditmanagerFrameworkArgs) {
    const meta = {control_sets:{isBlock:true,controls:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_auditmanager_framework", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get framework_type(): string {
    return `${this.resourceType}.${this.resourceName}.framework_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
