import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGameliftFleetArgsCertificateConfiguration {
  certificate_type?: string;
}

export interface AwsGameliftFleetArgsEc2InboundPermission {
  from_port: number;
  ip_range: string;
  protocol: string;
  to_port: number;
}

export interface AwsGameliftFleetArgsResourceCreationLimitPolicy {
  new_game_sessions_per_creator?: number;
  policy_period_in_minutes?: number;
}

export interface AwsGameliftFleetArgsRuntimeConfigurationServerProcess {
  concurrent_executions: number;
  launch_path: string;
  parameters?: string;
}

export interface AwsGameliftFleetArgsRuntimeConfiguration {
  game_session_activation_timeout_seconds?: number;
  max_concurrent_game_session_activations?: number;
  server_process?: AwsGameliftFleetArgsRuntimeConfigurationServerProcess[];
}

export interface AwsGameliftFleetArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsGameliftFleetArgs {
  build_id?: string;
  description?: string;
  ec2_instance_type: string;
  fleet_type?: string;
  instance_role_arn?: string;
  name: string;
  new_game_session_protection_policy?: string;
  script_id?: string;
  tags?: { [key: string]: string };
  certificate_configuration?: AwsGameliftFleetArgsCertificateConfiguration;
  ec2_inbound_permission?: AwsGameliftFleetArgsEc2InboundPermission[];
  resource_creation_limit_policy?: AwsGameliftFleetArgsResourceCreationLimitPolicy;
  runtime_configuration?: AwsGameliftFleetArgsRuntimeConfiguration;
  timeouts?: AwsGameliftFleetArgsTimeouts;
}

export class aws_gamelift_fleet extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGameliftFleetArgs) {
    const meta = {certificate_configuration:{isBlock:true},ec2_inbound_permission:{isBlock:true},resource_creation_limit_policy:{isBlock:true},runtime_configuration:{isBlock:true,server_process:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_gamelift_fleet", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get build_arn(): string {
    return `${this.resourceType}.${this.resourceName}.build_arn`;
  }

  get ec2_instance_type(): string {
    return `${this.resourceType}.${this.resourceName}.ec2_instance_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get log_paths(): string {
    return `${this.resourceType}.${this.resourceName}.log_paths`;
  }

  get metric_groups(): string {
    return `${this.resourceType}.${this.resourceName}.metric_groups`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get operating_system(): string {
    return `${this.resourceType}.${this.resourceName}.operating_system`;
  }

  get script_arn(): string {
    return `${this.resourceType}.${this.resourceName}.script_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
