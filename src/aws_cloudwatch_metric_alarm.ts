import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchMetricAlarmArgsMetricQueryMetric {
  dimensions?: { [key: string]: string };
  metric_name: string;
  namespace?: string;
  period: number;
  stat: string;
  unit?: string;
}

export interface AwsCloudwatchMetricAlarmArgsMetricQuery {
  account_id?: string;
  expression?: string;
  id: string;
  label?: string;
  period?: number;
  return_data?: boolean;
  metric?: AwsCloudwatchMetricAlarmArgsMetricQueryMetric;
}

export interface AwsCloudwatchMetricAlarmArgs {
  actions_enabled?: boolean;
  alarm_actions?: string[];
  alarm_description?: string;
  alarm_name: string;
  comparison_operator: string;
  datapoints_to_alarm?: number;
  dimensions?: { [key: string]: string };
  evaluation_periods: number;
  extended_statistic?: string;
  insufficient_data_actions?: string[];
  metric_name?: string;
  namespace?: string;
  ok_actions?: string[];
  period?: number;
  statistic?: string;
  tags?: { [key: string]: string };
  threshold?: number;
  threshold_metric_id?: string;
  treat_missing_data?: string;
  unit?: string;
  metric_query?: AwsCloudwatchMetricAlarmArgsMetricQuery[];
}

export class aws_cloudwatch_metric_alarm extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudwatchMetricAlarmArgs) {
    const meta = {metric_query:{isBlock:true,metric:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_metric_alarm", resourceName);
  }

  get alarm_name(): string {
    return `${this.resourceType}.${this.resourceName}.alarm_name`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get comparison_operator(): string {
    return `${this.resourceType}.${this.resourceName}.comparison_operator`;
  }

  get evaluate_low_sample_count_percentiles(): string {
    return `${this.resourceType}.${this.resourceName}.evaluate_low_sample_count_percentiles`;
  }

  get evaluation_periods(): string {
    return `${this.resourceType}.${this.resourceName}.evaluation_periods`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
