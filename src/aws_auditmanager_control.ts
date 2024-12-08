import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAuditmanagerControlArgsControlMappingSourcesSourceKeyword {
  keyword_input_type: string;
  keyword_value: string;
}

export interface AwsAuditmanagerControlArgsControlMappingSources {
  source_description?: string;
  source_frequency?: string;
  source_name: string;
  source_set_up_option: string;
  source_type: string;
  troubleshooting_text?: string;
  source_keyword?: AwsAuditmanagerControlArgsControlMappingSourcesSourceKeyword[];
}

export interface AwsAuditmanagerControlArgs {
  action_plan_instructions?: string;
  action_plan_title?: string;
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  testing_information?: string;
  control_mapping_sources?: AwsAuditmanagerControlArgsControlMappingSources[];
}

export class aws_auditmanager_control extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAuditmanagerControlArgs) {
    const meta = {control_mapping_sources:{isBlock:true,source_keyword:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_auditmanager_control", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
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

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
