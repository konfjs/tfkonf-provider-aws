import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpsworksMemcachedLayerArgsCloudwatchConfigurationLogStreams {
  batch_count?: number;
  batch_size?: number;
  buffer_duration?: number;
  datetime_format?: string;
  encoding?: string;
  file: string;
  file_fingerprint_lines?: string;
  initial_position?: string;
  log_group_name: string;
  multiline_start_pattern?: string;
  time_zone?: string;
}

export interface AwsOpsworksMemcachedLayerArgsCloudwatchConfiguration {
  enabled?: boolean;
  log_streams?: AwsOpsworksMemcachedLayerArgsCloudwatchConfigurationLogStreams[];
}

export interface AwsOpsworksMemcachedLayerArgsEbsVolume {
  encrypted?: boolean;
  iops?: number;
  mount_point: string;
  number_of_disks: number;
  raid_level?: string;
  size: number;
  type?: string;
}

export interface AwsOpsworksMemcachedLayerArgsLoadBasedAutoScalingDownscaling {
  alarms?: string[];
  cpu_threshold?: number;
  ignore_metrics_time?: number;
  instance_count?: number;
  load_threshold?: number;
  memory_threshold?: number;
  thresholds_wait_time?: number;
}

export interface AwsOpsworksMemcachedLayerArgsLoadBasedAutoScalingUpscaling {
  alarms?: string[];
  cpu_threshold?: number;
  ignore_metrics_time?: number;
  instance_count?: number;
  load_threshold?: number;
  memory_threshold?: number;
  thresholds_wait_time?: number;
}

export interface AwsOpsworksMemcachedLayerArgsLoadBasedAutoScaling {
  enable?: boolean;
  downscaling?: AwsOpsworksMemcachedLayerArgsLoadBasedAutoScalingDownscaling;
  upscaling?: AwsOpsworksMemcachedLayerArgsLoadBasedAutoScalingUpscaling;
}

export interface AwsOpsworksMemcachedLayerArgs {
  allocated_memory?: number;
  auto_assign_elastic_ips?: boolean;
  auto_assign_public_ips?: boolean;
  auto_healing?: boolean;
  custom_configure_recipes?: string[];
  custom_deploy_recipes?: string[];
  custom_instance_profile_arn?: string;
  custom_json?: string;
  custom_security_group_ids?: string[];
  custom_setup_recipes?: string[];
  custom_shutdown_recipes?: string[];
  custom_undeploy_recipes?: string[];
  drain_elb_on_shutdown?: boolean;
  elastic_load_balancer?: string;
  install_updates_on_boot?: boolean;
  instance_shutdown_timeout?: number;
  name?: string;
  stack_id: string;
  system_packages?: string[];
  tags?: { [key: string]: string };
  use_ebs_optimized_instances?: boolean;
  cloudwatch_configuration?: AwsOpsworksMemcachedLayerArgsCloudwatchConfiguration;
  ebs_volume?: AwsOpsworksMemcachedLayerArgsEbsVolume[];
  load_based_auto_scaling?: AwsOpsworksMemcachedLayerArgsLoadBasedAutoScaling;
}

export class aws_opsworks_memcached_layer extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsOpsworksMemcachedLayerArgs) {
    const meta = {cloudwatch_configuration:{isBlock:true,log_streams:{isBlock:true}},ebs_volume:{isBlock:true},load_based_auto_scaling:{isBlock:true,downscaling:{isBlock:true},upscaling:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_opsworks_memcached_layer", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get stack_id(): string {
    return `${this.resourceType}.${this.resourceName}.stack_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
