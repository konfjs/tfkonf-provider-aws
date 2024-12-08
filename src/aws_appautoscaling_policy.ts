import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppautoscalingPolicyArgsStepScalingPolicyConfigurationStepAdjustment {
  metric_interval_lower_bound?: string;
  metric_interval_upper_bound?: string;
  scaling_adjustment: number;
}

export interface AwsAppautoscalingPolicyArgsStepScalingPolicyConfiguration {
  adjustment_type?: string;
  cooldown?: number;
  metric_aggregation_type?: string;
  min_adjustment_magnitude?: number;
  step_adjustment?: AwsAppautoscalingPolicyArgsStepScalingPolicyConfigurationStepAdjustment[];
}

export interface AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions {
  name: string;
  value: string;
}

export interface AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions {
  name: string;
  value: string;
}

export interface AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric {
  metric_name: string;
  namespace: string;
  dimensions?: AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions[];
}

export interface AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat {
  stat: string;
  unit?: string;
  metric: AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric;
}

export interface AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics {
  expression?: string;
  id: string;
  label?: string;
  return_data?: boolean;
  metric_stat?: AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat;
}

export interface AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification {
  metric_name?: string;
  namespace?: string;
  statistic?: string;
  unit?: string;
  dimensions?: AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[];
  metrics?: AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics[];
}

export interface AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification {
  predefined_metric_type: string;
  resource_label?: string;
}

export interface AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfiguration {
  disable_scale_in?: boolean;
  scale_in_cooldown?: number;
  scale_out_cooldown?: number;
  target_value: number;
  customized_metric_specification?: AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification;
  predefined_metric_specification?: AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification;
}

export interface AwsAppautoscalingPolicyArgs {
  name: string;
  policy_type?: string;
  resource_id: string;
  scalable_dimension: string;
  service_namespace: string;
  step_scaling_policy_configuration?: AwsAppautoscalingPolicyArgsStepScalingPolicyConfiguration;
  target_tracking_scaling_policy_configuration?: AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfiguration;
}

export class aws_appautoscaling_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAppautoscalingPolicyArgs) {
    const meta = {step_scaling_policy_configuration:{isBlock:true,step_adjustment:{isBlock:true}},target_tracking_scaling_policy_configuration:{isBlock:true,customized_metric_specification:{isBlock:true,dimensions:{isBlock:true},metrics:{isBlock:true,metric_stat:{isBlock:true,metric:{isBlock:true,dimensions:{isBlock:true}}}}},predefined_metric_specification:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_appautoscaling_policy", resourceName);
  }

  get alarm_arns(): string {
    return `${this.resourceType}.${this.resourceName}.alarm_arns`;
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

  get resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.resource_id`;
  }

  get scalable_dimension(): string {
    return `${this.resourceType}.${this.resourceName}.scalable_dimension`;
  }

  get service_namespace(): string {
    return `${this.resourceType}.${this.resourceName}.service_namespace`;
  }
}
