import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGameliftGameServerGroupArgsAutoScalingPolicyTargetTrackingConfiguration {
  target_value: number;
}

export interface AwsGameliftGameServerGroupArgsAutoScalingPolicy {
  target_tracking_configuration: AwsGameliftGameServerGroupArgsAutoScalingPolicyTargetTrackingConfiguration;
}

export interface AwsGameliftGameServerGroupArgsInstanceDefinition {
  instance_type: string;
  weighted_capacity?: string;
}

export interface AwsGameliftGameServerGroupArgsLaunchTemplate {
  version?: string;
}

export interface AwsGameliftGameServerGroupArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsGameliftGameServerGroupArgs {
  game_server_group_name: string;
  max_size: number;
  min_size: number;
  role_arn: string;
  tags?: { [key: string]: string };
  vpc_subnets?: string[];
  auto_scaling_policy?: AwsGameliftGameServerGroupArgsAutoScalingPolicy;
  instance_definition: AwsGameliftGameServerGroupArgsInstanceDefinition[];
  launch_template: AwsGameliftGameServerGroupArgsLaunchTemplate;
  timeouts?: AwsGameliftGameServerGroupArgsTimeouts;
}

export class aws_gamelift_game_server_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGameliftGameServerGroupArgs) {
    const meta = {auto_scaling_policy:{isBlock:true,target_tracking_configuration:{isBlock:true}},instance_definition:{isBlock:true},launch_template:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_gamelift_game_server_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get auto_scaling_group_arn(): string {
    return `${this.resourceType}.${this.resourceName}.auto_scaling_group_arn`;
  }

  get balancing_strategy(): string {
    return `${this.resourceType}.${this.resourceName}.balancing_strategy`;
  }

  get game_server_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.game_server_group_name`;
  }

  get game_server_protection_policy(): string {
    return `${this.resourceType}.${this.resourceName}.game_server_protection_policy`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get max_size(): string {
    return `${this.resourceType}.${this.resourceName}.max_size`;
  }

  get min_size(): string {
    return `${this.resourceType}.${this.resourceName}.min_size`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
