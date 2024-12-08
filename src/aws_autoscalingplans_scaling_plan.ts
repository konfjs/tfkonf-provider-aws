import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAutoscalingplansScalingPlanArgsApplicationSourceTagFilter {
  key: string;
  values?: string[];
}

export interface AwsAutoscalingplansScalingPlanArgsApplicationSource {
  cloudformation_stack_arn?: string;
  tag_filter?: AwsAutoscalingplansScalingPlanArgsApplicationSourceTagFilter[];
}

export interface AwsAutoscalingplansScalingPlanArgsScalingInstructionCustomizedLoadMetricSpecification {
  dimensions?: { [key: string]: string };
  metric_name: string;
  namespace: string;
  statistic: string;
  unit?: string;
}

export interface AwsAutoscalingplansScalingPlanArgsScalingInstructionPredefinedLoadMetricSpecification {
  predefined_load_metric_type: string;
  resource_label?: string;
}

export interface AwsAutoscalingplansScalingPlanArgsScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification {
  dimensions?: { [key: string]: string };
  metric_name: string;
  namespace: string;
  statistic: string;
  unit?: string;
}

export interface AwsAutoscalingplansScalingPlanArgsScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification {
  predefined_scaling_metric_type: string;
  resource_label?: string;
}

export interface AwsAutoscalingplansScalingPlanArgsScalingInstructionTargetTrackingConfiguration {
  disable_scale_in?: boolean;
  estimated_instance_warmup?: number;
  scale_in_cooldown?: number;
  scale_out_cooldown?: number;
  target_value: number;
  customized_scaling_metric_specification?: AwsAutoscalingplansScalingPlanArgsScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification;
  predefined_scaling_metric_specification?: AwsAutoscalingplansScalingPlanArgsScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification;
}

export interface AwsAutoscalingplansScalingPlanArgsScalingInstruction {
  disable_dynamic_scaling?: boolean;
  max_capacity: number;
  min_capacity: number;
  predictive_scaling_max_capacity_behavior?: string;
  predictive_scaling_mode?: string;
  resource_id: string;
  scalable_dimension: string;
  scaling_policy_update_behavior?: string;
  scheduled_action_buffer_time?: number;
  service_namespace: string;
  customized_load_metric_specification?: AwsAutoscalingplansScalingPlanArgsScalingInstructionCustomizedLoadMetricSpecification;
  predefined_load_metric_specification?: AwsAutoscalingplansScalingPlanArgsScalingInstructionPredefinedLoadMetricSpecification;
  target_tracking_configuration: AwsAutoscalingplansScalingPlanArgsScalingInstructionTargetTrackingConfiguration[];
}

export interface AwsAutoscalingplansScalingPlanArgs {
  name: string;
  application_source: AwsAutoscalingplansScalingPlanArgsApplicationSource;
  scaling_instruction: AwsAutoscalingplansScalingPlanArgsScalingInstruction[];
}

export class aws_autoscalingplans_scaling_plan extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAutoscalingplansScalingPlanArgs) {
    const meta = {application_source:{isBlock:true,tag_filter:{isBlock:true}},scaling_instruction:{isBlock:true,customized_load_metric_specification:{isBlock:true},predefined_load_metric_specification:{isBlock:true},target_tracking_configuration:{isBlock:true,customized_scaling_metric_specification:{isBlock:true},predefined_scaling_metric_specification:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_autoscalingplans_scaling_plan", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get scaling_plan_version(): string {
    return `${this.resourceType}.${this.resourceName}.scaling_plan_version`;
  }
}
