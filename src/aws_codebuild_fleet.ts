import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodebuildFleetArgsScalingConfigurationTargetTrackingScalingConfigs {
  metric_type?: string;
  target_value?: number;
}

export interface AwsCodebuildFleetArgsScalingConfiguration {
  max_capacity?: number;
  scaling_type?: string;
  target_tracking_scaling_configs?: AwsCodebuildFleetArgsScalingConfigurationTargetTrackingScalingConfigs[];
}

export interface AwsCodebuildFleetArgsVpcConfig {
  security_group_ids: string[];
  subnets: string[];
  vpc_id: string;
}

export interface AwsCodebuildFleetArgs {
  base_capacity: number;
  compute_type: string;
  environment_type: string;
  fleet_service_role?: string;
  image_id?: string;
  name: string;
  tags?: { [key: string]: string };
  scaling_configuration?: AwsCodebuildFleetArgsScalingConfiguration;
  vpc_config?: AwsCodebuildFleetArgsVpcConfig[];
}

export class aws_codebuild_fleet extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCodebuildFleetArgs) {
    const meta = {scaling_configuration:{isBlock:true,target_tracking_scaling_configs:{isBlock:true}},vpc_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_codebuild_fleet", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get base_capacity(): string {
    return `${this.resourceType}.${this.resourceName}.base_capacity`;
  }

  get compute_type(): string {
    return `${this.resourceType}.${this.resourceName}.compute_type`;
  }

  get created(): string {
    return `${this.resourceType}.${this.resourceName}.created`;
  }

  get environment_type(): string {
    return `${this.resourceType}.${this.resourceName}.environment_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get overflow_behavior(): string {
    return `${this.resourceType}.${this.resourceName}.overflow_behavior`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
