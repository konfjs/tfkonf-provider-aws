import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions {
  name: string;
  value: string;
}

export interface AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric {
  metric_name: string;
  namespace: string;
  dimensions?: AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[];
}

export interface AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat {
  stat: string;
  unit?: string;
  metric: AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric;
}

export interface AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueries {
  expression?: string;
  id: string;
  label?: string;
  return_data?: boolean;
  metric_stat?: AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat;
}

export interface AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification {
  metric_data_queries: AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueries[];
}

export interface AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions {
  name: string;
  value: string;
}

export interface AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric {
  metric_name: string;
  namespace: string;
  dimensions?: AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[];
}

export interface AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat {
  stat: string;
  unit?: string;
  metric: AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric;
}

export interface AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueries {
  expression?: string;
  id: string;
  label?: string;
  return_data?: boolean;
  metric_stat?: AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat;
}

export interface AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification {
  metric_data_queries: AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueries[];
}

export interface AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions {
  name: string;
  value: string;
}

export interface AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric {
  metric_name: string;
  namespace: string;
  dimensions?: AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[];
}

export interface AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat {
  stat: string;
  unit?: string;
  metric: AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric;
}

export interface AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueries {
  expression?: string;
  id: string;
  label?: string;
  return_data?: boolean;
  metric_stat?: AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat;
}

export interface AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification {
  metric_data_queries: AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueries[];
}

export interface AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification {
  predefined_metric_type: string;
  resource_label?: string;
}

export interface AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification {
  predefined_metric_type: string;
  resource_label?: string;
}

export interface AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification {
  predefined_metric_type: string;
  resource_label?: string;
}

export interface AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecification {
  target_value: number;
  customized_capacity_metric_specification?: AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification;
  customized_load_metric_specification?: AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification;
  customized_scaling_metric_specification?: AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification;
  predefined_load_metric_specification?: AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification;
  predefined_metric_pair_specification?: AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification;
  predefined_scaling_metric_specification?: AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification;
}

export interface AwsAutoscalingPolicyArgsPredictiveScalingConfiguration {
  max_capacity_breach_behavior?: string;
  max_capacity_buffer?: string;
  mode?: string;
  scheduling_buffer_time?: string;
  metric_specification: AwsAutoscalingPolicyArgsPredictiveScalingConfigurationMetricSpecification;
}

export interface AwsAutoscalingPolicyArgsStepAdjustment {
  metric_interval_lower_bound?: string;
  metric_interval_upper_bound?: string;
  scaling_adjustment: number;
}

export interface AwsAutoscalingPolicyArgsTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension {
  name: string;
  value: string;
}

export interface AwsAutoscalingPolicyArgsTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions {
  name: string;
  value: string;
}

export interface AwsAutoscalingPolicyArgsTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric {
  metric_name: string;
  namespace: string;
  dimensions?: AwsAutoscalingPolicyArgsTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions[];
}

export interface AwsAutoscalingPolicyArgsTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat {
  stat: string;
  unit?: string;
  metric: AwsAutoscalingPolicyArgsTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric;
}

export interface AwsAutoscalingPolicyArgsTargetTrackingConfigurationCustomizedMetricSpecificationMetrics {
  expression?: string;
  id: string;
  label?: string;
  return_data?: boolean;
  metric_stat?: AwsAutoscalingPolicyArgsTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat;
}

export interface AwsAutoscalingPolicyArgsTargetTrackingConfigurationCustomizedMetricSpecification {
  metric_name?: string;
  namespace?: string;
  statistic?: string;
  unit?: string;
  metric_dimension?: AwsAutoscalingPolicyArgsTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[];
  metrics?: AwsAutoscalingPolicyArgsTargetTrackingConfigurationCustomizedMetricSpecificationMetrics[];
}

export interface AwsAutoscalingPolicyArgsTargetTrackingConfigurationPredefinedMetricSpecification {
  predefined_metric_type: string;
  resource_label?: string;
}

export interface AwsAutoscalingPolicyArgsTargetTrackingConfiguration {
  disable_scale_in?: boolean;
  target_value: number;
  customized_metric_specification?: AwsAutoscalingPolicyArgsTargetTrackingConfigurationCustomizedMetricSpecification;
  predefined_metric_specification?: AwsAutoscalingPolicyArgsTargetTrackingConfigurationPredefinedMetricSpecification;
}

export interface AwsAutoscalingPolicyArgs {
  adjustment_type?: string;
  autoscaling_group_name: string;
  cooldown?: number;
  enabled?: boolean;
  estimated_instance_warmup?: number;
  min_adjustment_magnitude?: number;
  name: string;
  policy_type?: string;
  scaling_adjustment?: number;
  predictive_scaling_configuration?: AwsAutoscalingPolicyArgsPredictiveScalingConfiguration;
  step_adjustment?: AwsAutoscalingPolicyArgsStepAdjustment[];
  target_tracking_configuration?: AwsAutoscalingPolicyArgsTargetTrackingConfiguration;
}

export class aws_autoscaling_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAutoscalingPolicyArgs) {
    const meta = {predictive_scaling_configuration:{isBlock:true,metric_specification:{isBlock:true,customized_capacity_metric_specification:{isBlock:true,metric_data_queries:{isBlock:true,metric_stat:{isBlock:true,metric:{isBlock:true,dimensions:{isBlock:true}}}}},customized_load_metric_specification:{isBlock:true,metric_data_queries:{isBlock:true,metric_stat:{isBlock:true,metric:{isBlock:true,dimensions:{isBlock:true}}}}},customized_scaling_metric_specification:{isBlock:true,metric_data_queries:{isBlock:true,metric_stat:{isBlock:true,metric:{isBlock:true,dimensions:{isBlock:true}}}}},predefined_load_metric_specification:{isBlock:true},predefined_metric_pair_specification:{isBlock:true},predefined_scaling_metric_specification:{isBlock:true}}},step_adjustment:{isBlock:true},target_tracking_configuration:{isBlock:true,customized_metric_specification:{isBlock:true,metric_dimension:{isBlock:true},metrics:{isBlock:true,metric_stat:{isBlock:true,metric:{isBlock:true,dimensions:{isBlock:true}}}}},predefined_metric_specification:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_autoscaling_policy", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get autoscaling_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.autoscaling_group_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get metric_aggregation_type(): string {
    return `${this.resourceType}.${this.resourceName}.metric_aggregation_type`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
