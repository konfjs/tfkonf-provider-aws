import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSpotFleetRequestArgsLaunchSpecificationEbsBlockDevice {
  delete_on_termination?: boolean;
  device_name: string;
}

export interface AwsSpotFleetRequestArgsLaunchSpecificationEphemeralBlockDevice {
  device_name: string;
  virtual_name: string;
}

export interface AwsSpotFleetRequestArgsLaunchSpecificationRootBlockDevice {
  delete_on_termination?: boolean;
}

export interface AwsSpotFleetRequestArgsLaunchSpecification {
  ami: string;
  associate_public_ip_address?: boolean;
  ebs_optimized?: boolean;
  iam_instance_profile?: string;
  iam_instance_profile_arn?: string;
  instance_type: string;
  monitoring?: boolean;
  placement_tenancy?: string;
  spot_price?: string;
  tags?: { [key: string]: string };
  user_data?: string;
  weighted_capacity?: string;
  ebs_block_device?: AwsSpotFleetRequestArgsLaunchSpecificationEbsBlockDevice[];
  ephemeral_block_device?: AwsSpotFleetRequestArgsLaunchSpecificationEphemeralBlockDevice[];
  root_block_device?: AwsSpotFleetRequestArgsLaunchSpecificationRootBlockDevice[];
}

export interface AwsSpotFleetRequestArgsLaunchTemplateConfigLaunchTemplateSpecification {
  id?: string;
  name?: string;
  version?: string;
}

export interface AwsSpotFleetRequestArgsLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount {
  max?: number;
  min?: number;
}

export interface AwsSpotFleetRequestArgsLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib {
  max?: number;
  min?: number;
}

export interface AwsSpotFleetRequestArgsLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps {
  max?: number;
  min?: number;
}

export interface AwsSpotFleetRequestArgsLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu {
  max?: number;
  min?: number;
}

export interface AwsSpotFleetRequestArgsLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib {
  max?: number;
  min?: number;
}

export interface AwsSpotFleetRequestArgsLaunchTemplateConfigOverridesInstanceRequirementsNetworkBandwidthGbps {
  max?: number;
  min?: number;
}

export interface AwsSpotFleetRequestArgsLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount {
  max?: number;
  min?: number;
}

export interface AwsSpotFleetRequestArgsLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb {
  max?: number;
  min?: number;
}

export interface AwsSpotFleetRequestArgsLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount {
  max?: number;
  min?: number;
}

export interface AwsSpotFleetRequestArgsLaunchTemplateConfigOverridesInstanceRequirements {
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
  on_demand_max_price_percentage_over_lowest_price?: number;
  require_hibernate_support?: boolean;
  spot_max_price_percentage_over_lowest_price?: number;
  accelerator_count?: AwsSpotFleetRequestArgsLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount;
  accelerator_total_memory_mib?: AwsSpotFleetRequestArgsLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib;
  baseline_ebs_bandwidth_mbps?: AwsSpotFleetRequestArgsLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps;
  memory_gib_per_vcpu?: AwsSpotFleetRequestArgsLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu;
  memory_mib?: AwsSpotFleetRequestArgsLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib;
  network_bandwidth_gbps?: AwsSpotFleetRequestArgsLaunchTemplateConfigOverridesInstanceRequirementsNetworkBandwidthGbps;
  network_interface_count?: AwsSpotFleetRequestArgsLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount;
  total_local_storage_gb?: AwsSpotFleetRequestArgsLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb;
  vcpu_count?: AwsSpotFleetRequestArgsLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount;
}

export interface AwsSpotFleetRequestArgsLaunchTemplateConfigOverrides {
  availability_zone?: string;
  instance_type?: string;
  instance_requirements?: AwsSpotFleetRequestArgsLaunchTemplateConfigOverridesInstanceRequirements;
}

export interface AwsSpotFleetRequestArgsLaunchTemplateConfig {
  launch_template_specification: AwsSpotFleetRequestArgsLaunchTemplateConfigLaunchTemplateSpecification;
  overrides?: AwsSpotFleetRequestArgsLaunchTemplateConfigOverrides[];
}

export interface AwsSpotFleetRequestArgsSpotMaintenanceStrategiesCapacityRebalance {
  replacement_strategy?: string;
}

export interface AwsSpotFleetRequestArgsSpotMaintenanceStrategies {
  capacity_rebalance?: AwsSpotFleetRequestArgsSpotMaintenanceStrategiesCapacityRebalance;
}

export interface AwsSpotFleetRequestArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsSpotFleetRequestArgs {
  allocation_strategy?: string;
  context?: string;
  excess_capacity_termination_policy?: string;
  fleet_type?: string;
  iam_fleet_role: string;
  instance_interruption_behaviour?: string;
  instance_pools_to_use_count?: number;
  on_demand_allocation_strategy?: string;
  on_demand_max_total_price?: string;
  on_demand_target_capacity?: number;
  replace_unhealthy_instances?: boolean;
  spot_price?: string;
  tags?: { [key: string]: string };
  target_capacity: number;
  target_capacity_unit_type?: string;
  terminate_instances_on_delete?: string;
  terminate_instances_with_expiration?: boolean;
  valid_from?: string;
  valid_until?: string;
  wait_for_fulfillment?: boolean;
  launch_specification?: AwsSpotFleetRequestArgsLaunchSpecification[];
  launch_template_config?: AwsSpotFleetRequestArgsLaunchTemplateConfig[];
  spot_maintenance_strategies?: AwsSpotFleetRequestArgsSpotMaintenanceStrategies;
  timeouts?: AwsSpotFleetRequestArgsTimeouts;
}

export class aws_spot_fleet_request extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSpotFleetRequestArgs) {
    const meta = {launch_specification:{isBlock:true,ebs_block_device:{isBlock:true},ephemeral_block_device:{isBlock:true},root_block_device:{isBlock:true}},launch_template_config:{isBlock:true,launch_template_specification:{isBlock:true},overrides:{isBlock:true,instance_requirements:{isBlock:true,accelerator_count:{isBlock:true},accelerator_total_memory_mib:{isBlock:true},baseline_ebs_bandwidth_mbps:{isBlock:true},memory_gib_per_vcpu:{isBlock:true},memory_mib:{isBlock:true},network_bandwidth_gbps:{isBlock:true},network_interface_count:{isBlock:true},total_local_storage_gb:{isBlock:true},vcpu_count:{isBlock:true}}}},spot_maintenance_strategies:{isBlock:true,capacity_rebalance:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_spot_fleet_request", resourceName);
  }

  get client_token(): string {
    return `${this.resourceType}.${this.resourceName}.client_token`;
  }

  get iam_fleet_role(): string {
    return `${this.resourceType}.${this.resourceName}.iam_fleet_role`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get load_balancers(): string {
    return `${this.resourceType}.${this.resourceName}.load_balancers`;
  }

  get spot_request_state(): string {
    return `${this.resourceType}.${this.resourceName}.spot_request_state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get target_capacity(): string {
    return `${this.resourceType}.${this.resourceName}.target_capacity`;
  }

  get target_group_arns(): string {
    return `${this.resourceType}.${this.resourceName}.target_group_arns`;
  }
}
