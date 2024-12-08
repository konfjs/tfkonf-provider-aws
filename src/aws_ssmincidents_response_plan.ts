import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsmincidentsResponsePlanArgsActionSsmAutomationParameter {
  name: string;
  values: string[];
}

export interface AwsSsmincidentsResponsePlanArgsActionSsmAutomation {
  document_name: string;
  document_version?: string;
  dynamic_parameters?: { [key: string]: string };
  role_arn: string;
  target_account?: string;
  parameter?: AwsSsmincidentsResponsePlanArgsActionSsmAutomationParameter[];
}

export interface AwsSsmincidentsResponsePlanArgsAction {
  ssm_automation?: AwsSsmincidentsResponsePlanArgsActionSsmAutomation[];
}

export interface AwsSsmincidentsResponsePlanArgsIncidentTemplateNotificationTarget {
  sns_topic_arn: string;
}

export interface AwsSsmincidentsResponsePlanArgsIncidentTemplate {
  dedupe_string?: string;
  impact: number;
  incident_tags?: { [key: string]: string };
  summary?: string;
  title: string;
  notification_target?: AwsSsmincidentsResponsePlanArgsIncidentTemplateNotificationTarget[];
}

export interface AwsSsmincidentsResponsePlanArgsIntegrationPagerduty {
  name: string;
  secret_id: string;
  service_id: string;
}

export interface AwsSsmincidentsResponsePlanArgsIntegration {
  pagerduty?: AwsSsmincidentsResponsePlanArgsIntegrationPagerduty[];
}

export interface AwsSsmincidentsResponsePlanArgs {
  chat_channel?: string[];
  display_name?: string;
  engagements?: string[];
  name: string;
  tags?: { [key: string]: string };
  action?: AwsSsmincidentsResponsePlanArgsAction;
  incident_template: AwsSsmincidentsResponsePlanArgsIncidentTemplate;
  integration?: AwsSsmincidentsResponsePlanArgsIntegration;
}

export class aws_ssmincidents_response_plan extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSsmincidentsResponsePlanArgs) {
    const meta = {action:{isBlock:true,ssm_automation:{isBlock:true,parameter:{isBlock:true}}},incident_template:{isBlock:true,notification_target:{isBlock:true}},integration:{isBlock:true,pagerduty:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_ssmincidents_response_plan", resourceName);
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
}
