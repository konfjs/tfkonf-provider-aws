import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBatchComputeEnvironmentArgsComputeResourcesEc2Configuration {
  image_type?: string;
}

export interface AwsBatchComputeEnvironmentArgsComputeResourcesLaunchTemplate {
  launch_template_id?: string;
  launch_template_name?: string;
}

export interface AwsBatchComputeEnvironmentArgsComputeResources {
  allocation_strategy?: string;
  bid_percentage?: number;
  ec2_key_pair?: string;
  image_id?: string;
  instance_role?: string;
  instance_type?: string[];
  max_vcpus: number;
  min_vcpus?: number;
  placement_group?: string;
  security_group_ids?: string[];
  spot_iam_fleet_role?: string;
  subnets: string[];
  tags?: { [key: string]: string };
  type: string;
  ec2_configuration?: AwsBatchComputeEnvironmentArgsComputeResourcesEc2Configuration[];
  launch_template?: AwsBatchComputeEnvironmentArgsComputeResourcesLaunchTemplate;
}

export interface AwsBatchComputeEnvironmentArgsEksConfiguration {
  eks_cluster_arn: string;
  kubernetes_namespace: string;
}

export interface AwsBatchComputeEnvironmentArgsUpdatePolicy {
  job_execution_timeout_minutes: number;
  terminate_jobs_on_update: boolean;
}

export interface AwsBatchComputeEnvironmentArgs {
  state?: string;
  tags?: { [key: string]: string };
  type: string;
  compute_resources?: AwsBatchComputeEnvironmentArgsComputeResources;
  eks_configuration?: AwsBatchComputeEnvironmentArgsEksConfiguration;
  update_policy?: AwsBatchComputeEnvironmentArgsUpdatePolicy;
}

export class aws_batch_compute_environment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsBatchComputeEnvironmentArgs) {
    const meta = {compute_resources:{isBlock:true,ec2_configuration:{isBlock:true},launch_template:{isBlock:true}},eks_configuration:{isBlock:true},update_policy:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_batch_compute_environment", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get compute_environment_name(): string {
    return `${this.resourceType}.${this.resourceName}.compute_environment_name`;
  }

  get compute_environment_name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.compute_environment_name_prefix`;
  }

  get ecs_cluster_arn(): string {
    return `${this.resourceType}.${this.resourceName}.ecs_cluster_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get service_role(): string {
    return `${this.resourceType}.${this.resourceName}.service_role`;
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
