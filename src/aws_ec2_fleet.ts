import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2FleetArgsFleetInstanceSet {
}

export interface AwsEc2FleetArgsLaunchTemplateConfigLaunchTemplateSpecification {
  launch_template_id?: string;
  launch_template_name?: string;
  version: string;
}

export interface AwsEc2FleetArgsLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount {
  max?: number;
  min?: number;
}

export interface AwsEc2FleetArgsLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib {
  max?: number;
  min?: number;
}

export interface AwsEc2FleetArgsLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps {
  max?: number;
  min?: number;
}

export interface AwsEc2FleetArgsLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu {
  max?: number;
  min?: number;
}

export interface AwsEc2FleetArgsLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib {
  max?: number;
  min: number;
}

export interface AwsEc2FleetArgsLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps {
  max?: number;
  min?: number;
}

export interface AwsEc2FleetArgsLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount {
  max?: number;
  min?: number;
}

export interface AwsEc2FleetArgsLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb {
  max?: number;
  min?: number;
}

export interface AwsEc2FleetArgsLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount {
  max?: number;
  min: number;
}

export interface AwsEc2FleetArgsLaunchTemplateConfigOverrideInstanceRequirements {
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
  accelerator_count?: AwsEc2FleetArgsLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount;
  accelerator_total_memory_mib?: AwsEc2FleetArgsLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib;
  baseline_ebs_bandwidth_mbps?: AwsEc2FleetArgsLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps;
  memory_gib_per_vcpu?: AwsEc2FleetArgsLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu;
  memory_mib: AwsEc2FleetArgsLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib;
  network_bandwidth_gbps?: AwsEc2FleetArgsLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps;
  network_interface_count?: AwsEc2FleetArgsLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount;
  total_local_storage_gb?: AwsEc2FleetArgsLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb;
  vcpu_count: AwsEc2FleetArgsLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount;
}

export interface AwsEc2FleetArgsLaunchTemplateConfigOverride {
  availability_zone?: string;
  instance_type?: string;
  max_price?: string;
  priority?: number;
  subnet_id?: string;
  weighted_capacity?: number;
  instance_requirements?: AwsEc2FleetArgsLaunchTemplateConfigOverrideInstanceRequirements;
}

export interface AwsEc2FleetArgsLaunchTemplateConfig {
  launch_template_specification?: AwsEc2FleetArgsLaunchTemplateConfigLaunchTemplateSpecification;
  override?: AwsEc2FleetArgsLaunchTemplateConfigOverride[];
}

export interface AwsEc2FleetArgsOnDemandOptionsCapacityReservationOptions {
  usage_strategy?: string;
}

export interface AwsEc2FleetArgsOnDemandOptions {
  allocation_strategy?: string;
  max_total_price?: string;
  min_target_capacity?: number;
  single_availability_zone?: boolean;
  single_instance_type?: boolean;
  capacity_reservation_options?: AwsEc2FleetArgsOnDemandOptionsCapacityReservationOptions;
}

export interface AwsEc2FleetArgsSpotOptionsMaintenanceStrategiesCapacityRebalance {
  replacement_strategy?: string;
  termination_delay?: number;
}

export interface AwsEc2FleetArgsSpotOptionsMaintenanceStrategies {
  capacity_rebalance?: AwsEc2FleetArgsSpotOptionsMaintenanceStrategiesCapacityRebalance;
}

export interface AwsEc2FleetArgsSpotOptions {
  allocation_strategy?: string;
  instance_interruption_behavior?: string;
  instance_pools_to_use_count?: number;
  maintenance_strategies?: AwsEc2FleetArgsSpotOptionsMaintenanceStrategies;
}

export interface AwsEc2FleetArgsTargetCapacitySpecification {
  default_target_capacity_type: string;
  on_demand_target_capacity?: number;
  spot_target_capacity?: number;
  target_capacity_unit_type?: string;
  total_target_capacity: number;
}

export interface AwsEc2FleetArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsEc2FleetArgs {
  context?: string;
  excess_capacity_termination_policy?: string;
  replace_unhealthy_instances?: boolean;
  tags?: { [key: string]: string };
  terminate_instances?: boolean;
  terminate_instances_with_expiration?: boolean;
  type?: string;
  valid_from?: string;
  valid_until?: string;
  fleet_instance_set?: AwsEc2FleetArgsFleetInstanceSet[];
  launch_template_config: AwsEc2FleetArgsLaunchTemplateConfig[];
  on_demand_options?: AwsEc2FleetArgsOnDemandOptions;
  spot_options?: AwsEc2FleetArgsSpotOptions;
  target_capacity_specification: AwsEc2FleetArgsTargetCapacitySpecification;
  timeouts?: AwsEc2FleetArgsTimeouts;
}

export class aws_ec2_fleet extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2FleetArgs) {
    const meta = {fleet_instance_set:{isBlock:true},launch_template_config:{isBlock:true,launch_template_specification:{isBlock:true},override:{isBlock:true,instance_requirements:{isBlock:true,accelerator_count:{isBlock:true},accelerator_total_memory_mib:{isBlock:true},baseline_ebs_bandwidth_mbps:{isBlock:true},memory_gib_per_vcpu:{isBlock:true},memory_mib:{isBlock:true},network_bandwidth_gbps:{isBlock:true},network_interface_count:{isBlock:true},total_local_storage_gb:{isBlock:true},vcpu_count:{isBlock:true}}}},on_demand_options:{isBlock:true,capacity_reservation_options:{isBlock:true}},spot_options:{isBlock:true,maintenance_strategies:{isBlock:true,capacity_rebalance:{isBlock:true}}},target_capacity_specification:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ec2_fleet", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get fleet_state(): string {
    return `${this.resourceType}.${this.resourceName}.fleet_state`;
  }

  get fulfilled_capacity(): string {
    return `${this.resourceType}.${this.resourceName}.fulfilled_capacity`;
  }

  get fulfilled_on_demand_capacity(): string {
    return `${this.resourceType}.${this.resourceName}.fulfilled_on_demand_capacity`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
