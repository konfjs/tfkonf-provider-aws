import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEvidentlyLaunchArgsGroups {
  description?: string;
  feature: string;
  name: string;
  variation: string;
}

export interface AwsEvidentlyLaunchArgsMetricMonitorsMetricDefinition {
  entity_id_key: string;
  event_pattern?: string;
  name: string;
  unit_label?: string;
  value_key: string;
}

export interface AwsEvidentlyLaunchArgsMetricMonitors {
  metric_definition: AwsEvidentlyLaunchArgsMetricMonitorsMetricDefinition;
}

export interface AwsEvidentlyLaunchArgsScheduledSplitsConfigStepsSegmentOverrides {
  evaluation_order: number;
  segment: string;
  weights: { [key: string]: number };
}

export interface AwsEvidentlyLaunchArgsScheduledSplitsConfigSteps {
  group_weights: { [key: string]: number };
  start_time: string;
  segment_overrides?: AwsEvidentlyLaunchArgsScheduledSplitsConfigStepsSegmentOverrides[];
}

export interface AwsEvidentlyLaunchArgsScheduledSplitsConfig {
  steps: AwsEvidentlyLaunchArgsScheduledSplitsConfigSteps[];
}

export interface AwsEvidentlyLaunchArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsEvidentlyLaunchArgs {
  description?: string;
  name: string;
  project: string;
  randomization_salt?: string;
  tags?: { [key: string]: string };
  groups: AwsEvidentlyLaunchArgsGroups[];
  metric_monitors?: AwsEvidentlyLaunchArgsMetricMonitors[];
  scheduled_splits_config?: AwsEvidentlyLaunchArgsScheduledSplitsConfig;
  timeouts?: AwsEvidentlyLaunchArgsTimeouts;
}

export class aws_evidently_launch extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEvidentlyLaunchArgs) {
    const meta = {groups:{isBlock:true},metric_monitors:{isBlock:true,metric_definition:{isBlock:true}},scheduled_splits_config:{isBlock:true,steps:{isBlock:true,segment_overrides:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_evidently_launch", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_time(): string {
    return `${this.resourceType}.${this.resourceName}.created_time`;
  }

  get execution(): string {
    return `${this.resourceType}.${this.resourceName}.execution`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_time(): string {
    return `${this.resourceType}.${this.resourceName}.last_updated_time`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get status_reason(): string {
    return `${this.resourceType}.${this.resourceName}.status_reason`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
