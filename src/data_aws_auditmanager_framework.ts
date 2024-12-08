import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsAuditmanagerFrameworkArgsControlSetsControls {
}

export interface DataAwsAuditmanagerFrameworkArgsControlSets {
  controls?: DataAwsAuditmanagerFrameworkArgsControlSetsControls[];
}

export interface DataAwsAuditmanagerFrameworkArgs {
  framework_type: string;
  name: string;
  control_sets?: DataAwsAuditmanagerFrameworkArgsControlSets[];
}

export class data_aws_auditmanager_framework extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsAuditmanagerFrameworkArgs) {
    const meta = {control_sets:{isBlock:true,controls:{isBlock:true}}};
    super(terraformConfig, "data", args, meta, "aws_auditmanager_framework", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get compliance_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.compliance_type`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get framework_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.framework_type`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
