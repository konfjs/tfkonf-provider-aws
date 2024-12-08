import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAutoscalingGroupArgsInitialLifecycleHook {
  heartbeat_timeout?: number;
  lifecycle_transition: string;
  name: string;
  notification_metadata?: string;
  notification_target_arn?: string;
  role_arn?: string;
}

export interface AwsAutoscalingGroupArgsInstanceMaintenancePolicy {
  max_healthy_percentage: number;
  min_healthy_percentage: number;
}

export interface AwsAutoscalingGroupArgsInstanceRefreshPreferencesAlarmSpecification {
  alarms?: string[];
}

export interface AwsAutoscalingGroupArgsInstanceRefreshPreferences {
  auto_rollback?: boolean;
  checkpoint_delay?: string;
  checkpoint_percentages?: number[];
  instance_warmup?: string;
  max_healthy_percentage?: number;
  min_healthy_percentage?: number;
  scale_in_protected_instances?: string;
  skip_matching?: boolean;
  standby_instances?: string;
  alarm_specification?: AwsAutoscalingGroupArgsInstanceRefreshPreferencesAlarmSpecification;
}

export interface AwsAutoscalingGroupArgsInstanceRefresh {
  strategy: string;
  triggers?: string[];
  preferences?: AwsAutoscalingGroupArgsInstanceRefreshPreferences;
}

export interface AwsAutoscalingGroupArgsLaunchTemplate {
}

export interface AwsAutoscalingGroupArgsMixedInstancesPolicyInstancesDistribution {
  spot_max_price?: string;
}

export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {
}

export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount {
  max?: number;
  min?: number;
}

export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib {
  max?: number;
  min?: number;
}

export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps {
  max?: number;
  min?: number;
}

export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu {
  max?: number;
  min?: number;
}

export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib {
  max?: number;
  min?: number;
}

export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps {
  max?: number;
  min?: number;
}

export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount {
  max?: number;
  min?: number;
}

export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb {
  max?: number;
  min?: number;
}

export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount {
  max?: number;
  min?: number;
}

export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements {
  accelerator_manufacturers?: string[];
  accelerator_names?: string[];
  accelerator_types?: string[];
  allowed_instance_types?: string[];
  bare_metal?: string;
  burstable_performance?: string;
  cpu_manufacturers?: string[];
  excluded_instance_types?: string[];
  instance_generations?: string[];
  local_storage?: string;
  local_storage_types?: string[];
  max_spot_price_as_percentage_of_optimal_on_demand_price?: number;
  on_demand_max_price_percentage_over_lowest_price?: number;
  require_hibernate_support?: boolean;
  spot_max_price_percentage_over_lowest_price?: number;
  accelerator_count?: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount;
  accelerator_total_memory_mib?: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib;
  baseline_ebs_bandwidth_mbps?: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps;
  memory_gib_per_vcpu?: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu;
  memory_mib?: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib;
  network_bandwidth_gbps?: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps;
  network_interface_count?: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount;
  total_local_storage_gb?: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb;
  vcpu_count?: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount;
}

export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification {
}

export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverride {
  instance_type?: string;
  weighted_capacity?: string;
  instance_requirements?: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements;
  launch_template_specification?: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification;
}

export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplate {
  launch_template_specification: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification;
  override?: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateOverride[];
}

export interface AwsAutoscalingGroupArgsMixedInstancesPolicy {
  instances_distribution?: AwsAutoscalingGroupArgsMixedInstancesPolicyInstancesDistribution;
  launch_template: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplate;
}

export interface AwsAutoscalingGroupArgsTag {
  key: string;
  propagate_at_launch: boolean;
  value: string;
}

export interface AwsAutoscalingGroupArgsTimeouts {
  delete?: string;
  update?: string;
}

export interface AwsAutoscalingGroupArgsTrafficSource {
  identifier: string;
  type?: string;
}

export interface AwsAutoscalingGroupArgsWarmPoolInstanceReusePolicy {
  reuse_on_scale_in?: boolean;
}

export interface AwsAutoscalingGroupArgsWarmPool {
  max_group_prepared_capacity?: number;
  min_size?: number;
  pool_state?: string;
  instance_reuse_policy?: AwsAutoscalingGroupArgsWarmPoolInstanceReusePolicy;
}

export interface AwsAutoscalingGroupArgs {
  capacity_rebalance?: boolean;
  context?: string;
  default_instance_warmup?: number;
  desired_capacity_type?: string;
  enabled_metrics?: string[];
  force_delete?: boolean;
  force_delete_warm_pool?: boolean;
  health_check_grace_period?: number;
  ignore_failed_scaling_activities?: boolean;
  launch_configuration?: string;
  max_instance_lifetime?: number;
  max_size: number;
  metrics_granularity?: string;
  min_elb_capacity?: number;
  min_size: number;
  placement_group?: string;
  protect_from_scale_in?: boolean;
  suspended_processes?: string[];
  termination_policies?: string[];
  wait_for_capacity_timeout?: string;
  wait_for_elb_capacity?: number;
  initial_lifecycle_hook?: AwsAutoscalingGroupArgsInitialLifecycleHook[];
  instance_maintenance_policy?: AwsAutoscalingGroupArgsInstanceMaintenancePolicy;
  instance_refresh?: AwsAutoscalingGroupArgsInstanceRefresh;
  launch_template?: AwsAutoscalingGroupArgsLaunchTemplate;
  mixed_instances_policy?: AwsAutoscalingGroupArgsMixedInstancesPolicy;
  tag?: AwsAutoscalingGroupArgsTag[];
  timeouts?: AwsAutoscalingGroupArgsTimeouts;
  traffic_source?: AwsAutoscalingGroupArgsTrafficSource[];
  warm_pool?: AwsAutoscalingGroupArgsWarmPool;
}

export class aws_autoscaling_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAutoscalingGroupArgs) {
    const meta = {initial_lifecycle_hook:{isBlock:true},instance_maintenance_policy:{isBlock:true},instance_refresh:{isBlock:true,preferences:{isBlock:true,alarm_specification:{isBlock:true}}},launch_template:{isBlock:true},mixed_instances_policy:{isBlock:true,instances_distribution:{isBlock:true},launch_template:{isBlock:true,launch_template_specification:{isBlock:true},override:{isBlock:true,instance_requirements:{isBlock:true,accelerator_count:{isBlock:true},accelerator_total_memory_mib:{isBlock:true},baseline_ebs_bandwidth_mbps:{isBlock:true},memory_gib_per_vcpu:{isBlock:true},memory_mib:{isBlock:true},network_bandwidth_gbps:{isBlock:true},network_interface_count:{isBlock:true},total_local_storage_gb:{isBlock:true},vcpu_count:{isBlock:true}},launch_template_specification:{isBlock:true}}}},tag:{isBlock:true},timeouts:{isBlock:true},traffic_source:{isBlock:true},warm_pool:{isBlock:true,instance_reuse_policy:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_autoscaling_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zones(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zones`;
  }

  get default_cooldown(): string {
    return `${this.resourceType}.${this.resourceName}.default_cooldown`;
  }

  get desired_capacity(): string {
    return `${this.resourceType}.${this.resourceName}.desired_capacity`;
  }

  get health_check_type(): string {
    return `${this.resourceType}.${this.resourceName}.health_check_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get load_balancers(): string {
    return `${this.resourceType}.${this.resourceName}.load_balancers`;
  }

  get max_size(): string {
    return `${this.resourceType}.${this.resourceName}.max_size`;
  }

  get min_size(): string {
    return `${this.resourceType}.${this.resourceName}.min_size`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get predicted_capacity(): string {
    return `${this.resourceType}.${this.resourceName}.predicted_capacity`;
  }

  get service_linked_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.service_linked_role_arn`;
  }

  get target_group_arns(): string {
    return `${this.resourceType}.${this.resourceName}.target_group_arns`;
  }

  get vpc_zone_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_zone_identifier`;
  }

  get warm_pool_size(): string {
    return `${this.resourceType}.${this.resourceName}.warm_pool_size`;
  }
}
