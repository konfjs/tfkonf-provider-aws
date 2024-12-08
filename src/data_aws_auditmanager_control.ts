import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsAuditmanagerControlArgsControlMappingSourcesSourceKeyword {
}

export interface DataAwsAuditmanagerControlArgsControlMappingSources {
  source_keyword?: DataAwsAuditmanagerControlArgsControlMappingSourcesSourceKeyword[];
}

export interface DataAwsAuditmanagerControlArgs {
  name: string;
  type: string;
  control_mapping_sources?: DataAwsAuditmanagerControlArgsControlMappingSources[];
}

export class data_aws_auditmanager_control extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsAuditmanagerControlArgs) {
    const meta = {control_mapping_sources:{isBlock:true,source_keyword:{isBlock:true}}};
    super(terraformConfig, "data", args, meta, "aws_auditmanager_control", resourceName);
  }

  get action_plan_instructions(): string {
    return `data.${this.resourceType}.${this.resourceName}.action_plan_instructions`;
  }

  get action_plan_title(): string {
    return `data.${this.resourceType}.${this.resourceName}.action_plan_title`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
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

  get testing_information(): string {
    return `data.${this.resourceType}.${this.resourceName}.testing_information`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }
}
