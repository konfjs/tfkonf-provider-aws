import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2InstanceTypeArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2InstanceTypeArgs {
  instance_type: string;
  timeouts?: DataAwsEc2InstanceTypeArgsTimeouts;
}

export class data_aws_ec2_instance_type extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEc2InstanceTypeArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_instance_type", resourceName);
  }

  get auto_recovery_supported(): string {
    return `data.${this.resourceType}.${this.resourceName}.auto_recovery_supported`;
  }

  get bare_metal(): string {
    return `data.${this.resourceType}.${this.resourceName}.bare_metal`;
  }

  get burstable_performance_supported(): string {
    return `data.${this.resourceType}.${this.resourceName}.burstable_performance_supported`;
  }

  get current_generation(): string {
    return `data.${this.resourceType}.${this.resourceName}.current_generation`;
  }

  get dedicated_hosts_supported(): string {
    return `data.${this.resourceType}.${this.resourceName}.dedicated_hosts_supported`;
  }

  get default_cores(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_cores`;
  }

  get default_threads_per_core(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_threads_per_core`;
  }

  get default_vcpus(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_vcpus`;
  }

  get ebs_encryption_support(): string {
    return `data.${this.resourceType}.${this.resourceName}.ebs_encryption_support`;
  }

  get ebs_nvme_support(): string {
    return `data.${this.resourceType}.${this.resourceName}.ebs_nvme_support`;
  }

  get ebs_optimized_support(): string {
    return `data.${this.resourceType}.${this.resourceName}.ebs_optimized_support`;
  }

  get ebs_performance_baseline_bandwidth(): string {
    return `data.${this.resourceType}.${this.resourceName}.ebs_performance_baseline_bandwidth`;
  }

  get ebs_performance_baseline_iops(): string {
    return `data.${this.resourceType}.${this.resourceName}.ebs_performance_baseline_iops`;
  }

  get ebs_performance_baseline_throughput(): string {
    return `data.${this.resourceType}.${this.resourceName}.ebs_performance_baseline_throughput`;
  }

  get ebs_performance_maximum_bandwidth(): string {
    return `data.${this.resourceType}.${this.resourceName}.ebs_performance_maximum_bandwidth`;
  }

  get ebs_performance_maximum_iops(): string {
    return `data.${this.resourceType}.${this.resourceName}.ebs_performance_maximum_iops`;
  }

  get ebs_performance_maximum_throughput(): string {
    return `data.${this.resourceType}.${this.resourceName}.ebs_performance_maximum_throughput`;
  }

  get efa_supported(): string {
    return `data.${this.resourceType}.${this.resourceName}.efa_supported`;
  }

  get ena_support(): string {
    return `data.${this.resourceType}.${this.resourceName}.ena_support`;
  }

  get encryption_in_transit_supported(): string {
    return `data.${this.resourceType}.${this.resourceName}.encryption_in_transit_supported`;
  }

  get fpgas(): string {
    return `data.${this.resourceType}.${this.resourceName}.fpgas`;
  }

  get free_tier_eligible(): string {
    return `data.${this.resourceType}.${this.resourceName}.free_tier_eligible`;
  }

  get gpus(): string {
    return `data.${this.resourceType}.${this.resourceName}.gpus`;
  }

  get hibernation_supported(): string {
    return `data.${this.resourceType}.${this.resourceName}.hibernation_supported`;
  }

  get hypervisor(): string {
    return `data.${this.resourceType}.${this.resourceName}.hypervisor`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get inference_accelerators(): string {
    return `data.${this.resourceType}.${this.resourceName}.inference_accelerators`;
  }

  get instance_disks(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_disks`;
  }

  get instance_storage_supported(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_storage_supported`;
  }

  get instance_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_type`;
  }

  get ipv6_supported(): string {
    return `data.${this.resourceType}.${this.resourceName}.ipv6_supported`;
  }

  get maximum_ipv4_addresses_per_interface(): string {
    return `data.${this.resourceType}.${this.resourceName}.maximum_ipv4_addresses_per_interface`;
  }

  get maximum_ipv6_addresses_per_interface(): string {
    return `data.${this.resourceType}.${this.resourceName}.maximum_ipv6_addresses_per_interface`;
  }

  get maximum_network_cards(): string {
    return `data.${this.resourceType}.${this.resourceName}.maximum_network_cards`;
  }

  get maximum_network_interfaces(): string {
    return `data.${this.resourceType}.${this.resourceName}.maximum_network_interfaces`;
  }

  get memory_size(): string {
    return `data.${this.resourceType}.${this.resourceName}.memory_size`;
  }

  get network_performance(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_performance`;
  }

  get supported_architectures(): string {
    return `data.${this.resourceType}.${this.resourceName}.supported_architectures`;
  }

  get supported_placement_strategies(): string {
    return `data.${this.resourceType}.${this.resourceName}.supported_placement_strategies`;
  }

  get supported_root_device_types(): string {
    return `data.${this.resourceType}.${this.resourceName}.supported_root_device_types`;
  }

  get supported_usages_classes(): string {
    return `data.${this.resourceType}.${this.resourceName}.supported_usages_classes`;
  }

  get supported_virtualization_types(): string {
    return `data.${this.resourceType}.${this.resourceName}.supported_virtualization_types`;
  }

  get sustained_clock_speed(): string {
    return `data.${this.resourceType}.${this.resourceName}.sustained_clock_speed`;
  }

  get total_fpga_memory(): string {
    return `data.${this.resourceType}.${this.resourceName}.total_fpga_memory`;
  }

  get total_gpu_memory(): string {
    return `data.${this.resourceType}.${this.resourceName}.total_gpu_memory`;
  }

  get total_instance_storage(): string {
    return `data.${this.resourceType}.${this.resourceName}.total_instance_storage`;
  }

  get valid_cores(): string {
    return `data.${this.resourceType}.${this.resourceName}.valid_cores`;
  }

  get valid_threads_per_core(): string {
    return `data.${this.resourceType}.${this.resourceName}.valid_threads_per_core`;
  }
}
