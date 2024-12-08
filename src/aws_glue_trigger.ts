import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueTriggerArgsActionsNotificationProperty {
  notify_delay_after?: number;
}

export interface AwsGlueTriggerArgsActions {
  arguments?: { [key: string]: string };
  crawler_name?: string;
  job_name?: string;
  security_configuration?: string;
  timeout?: number;
  notification_property?: AwsGlueTriggerArgsActionsNotificationProperty;
}

export interface AwsGlueTriggerArgsEventBatchingCondition {
  batch_size: number;
  batch_window?: number;
}

export interface AwsGlueTriggerArgsPredicateConditions {
  crawl_state?: string;
  crawler_name?: string;
  job_name?: string;
  logical_operator?: string;
  state?: string;
}

export interface AwsGlueTriggerArgsPredicate {
  logical?: string;
  conditions: AwsGlueTriggerArgsPredicateConditions[];
}

export interface AwsGlueTriggerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsGlueTriggerArgs {
  description?: string;
  enabled?: boolean;
  name: string;
  schedule?: string;
  start_on_creation?: boolean;
  tags?: { [key: string]: string };
  type: string;
  workflow_name?: string;
  actions: AwsGlueTriggerArgsActions[];
  event_batching_condition?: AwsGlueTriggerArgsEventBatchingCondition[];
  predicate?: AwsGlueTriggerArgsPredicate;
  timeouts?: AwsGlueTriggerArgsTimeouts;
}

export class aws_glue_trigger extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGlueTriggerArgs) {
    const meta = {actions:{isBlock:true,notification_property:{isBlock:true}},event_batching_condition:{isBlock:true},predicate:{isBlock:true,conditions:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_glue_trigger", resourceName);
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

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
