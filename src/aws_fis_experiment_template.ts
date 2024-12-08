import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFisExperimentTemplateArgsActionParameter {
  key: string;
  value: string;
}

export interface AwsFisExperimentTemplateArgsActionTarget {
  key: string;
  value: string;
}

export interface AwsFisExperimentTemplateArgsAction {
  action_id: string;
  description?: string;
  name: string;
  start_after?: string[];
  parameter?: AwsFisExperimentTemplateArgsActionParameter[];
  target?: AwsFisExperimentTemplateArgsActionTarget;
}

export interface AwsFisExperimentTemplateArgsExperimentOptions {
  account_targeting?: string;
  empty_target_resolution_mode?: string;
}

export interface AwsFisExperimentTemplateArgsLogConfigurationCloudwatchLogsConfiguration {
  log_group_arn: string;
}

export interface AwsFisExperimentTemplateArgsLogConfigurationS3Configuration {
  bucket_name: string;
  prefix?: string;
}

export interface AwsFisExperimentTemplateArgsLogConfiguration {
  log_schema_version: number;
  cloudwatch_logs_configuration?: AwsFisExperimentTemplateArgsLogConfigurationCloudwatchLogsConfiguration;
  s3_configuration?: AwsFisExperimentTemplateArgsLogConfigurationS3Configuration;
}

export interface AwsFisExperimentTemplateArgsStopCondition {
  source: string;
  value?: string;
}

export interface AwsFisExperimentTemplateArgsTargetFilter {
  path: string;
  values: string[];
}

export interface AwsFisExperimentTemplateArgsTargetResourceTag {
  key: string;
  value: string;
}

export interface AwsFisExperimentTemplateArgsTarget {
  name: string;
  parameters?: { [key: string]: string };
  resource_arns?: string[];
  resource_type: string;
  selection_mode: string;
  filter?: AwsFisExperimentTemplateArgsTargetFilter[];
  resource_tag?: AwsFisExperimentTemplateArgsTargetResourceTag[];
}

export interface AwsFisExperimentTemplateArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsFisExperimentTemplateArgs {
  description: string;
  role_arn: string;
  tags?: { [key: string]: string };
  action: AwsFisExperimentTemplateArgsAction[];
  experiment_options?: AwsFisExperimentTemplateArgsExperimentOptions;
  log_configuration?: AwsFisExperimentTemplateArgsLogConfiguration;
  stop_condition: AwsFisExperimentTemplateArgsStopCondition[];
  target?: AwsFisExperimentTemplateArgsTarget[];
  timeouts?: AwsFisExperimentTemplateArgsTimeouts;
}

export class aws_fis_experiment_template extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsFisExperimentTemplateArgs) {
    const meta = {action:{isBlock:true,parameter:{isBlock:true},target:{isBlock:true}},experiment_options:{isBlock:true},log_configuration:{isBlock:true,cloudwatch_logs_configuration:{isBlock:true},s3_configuration:{isBlock:true}},stop_condition:{isBlock:true},target:{isBlock:true,filter:{isBlock:true},resource_tag:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_fis_experiment_template", resourceName);
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
