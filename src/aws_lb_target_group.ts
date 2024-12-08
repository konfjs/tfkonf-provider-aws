import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLbTargetGroupArgsHealthCheck {
  enabled?: boolean;
  healthy_threshold?: number;
  interval?: number;
  port?: string;
  protocol?: string;
  unhealthy_threshold?: number;
}

export interface AwsLbTargetGroupArgsStickiness {
  cookie_duration?: number;
  cookie_name?: string;
  enabled?: boolean;
  type: string;
}

export interface AwsLbTargetGroupArgsTargetFailover {
  on_deregistration: string;
  on_unhealthy: string;
}

export interface AwsLbTargetGroupArgsTargetGroupHealthDnsFailover {
  minimum_healthy_targets_count?: string;
  minimum_healthy_targets_percentage?: string;
}

export interface AwsLbTargetGroupArgsTargetGroupHealthUnhealthyStateRouting {
  minimum_healthy_targets_count?: number;
  minimum_healthy_targets_percentage?: string;
}

export interface AwsLbTargetGroupArgsTargetGroupHealth {
  dns_failover?: AwsLbTargetGroupArgsTargetGroupHealthDnsFailover;
  unhealthy_state_routing?: AwsLbTargetGroupArgsTargetGroupHealthUnhealthyStateRouting;
}

export interface AwsLbTargetGroupArgsTargetHealthState {
  enable_unhealthy_connection_termination: boolean;
  unhealthy_draining_interval?: number;
}

export interface AwsLbTargetGroupArgs {
  deregistration_delay?: string;
  lambda_multi_value_headers_enabled?: boolean;
  port?: number;
  protocol?: string;
  proxy_protocol_v2?: boolean;
  slow_start?: number;
  tags?: { [key: string]: string };
  target_type?: string;
  vpc_id?: string;
  health_check?: AwsLbTargetGroupArgsHealthCheck;
  stickiness?: AwsLbTargetGroupArgsStickiness;
  target_failover?: AwsLbTargetGroupArgsTargetFailover[];
  target_group_health?: AwsLbTargetGroupArgsTargetGroupHealth;
  target_health_state?: AwsLbTargetGroupArgsTargetHealthState[];
}

export class aws_lb_target_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLbTargetGroupArgs) {
    const meta = {health_check:{isBlock:true},stickiness:{isBlock:true},target_failover:{isBlock:true},target_group_health:{isBlock:true,dns_failover:{isBlock:true},unhealthy_state_routing:{isBlock:true}},target_health_state:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lb_target_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get arn_suffix(): string {
    return `${this.resourceType}.${this.resourceName}.arn_suffix`;
  }

  get connection_termination(): string {
    return `${this.resourceType}.${this.resourceName}.connection_termination`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_address_type(): string {
    return `${this.resourceType}.${this.resourceName}.ip_address_type`;
  }

  get load_balancer_arns(): string {
    return `${this.resourceType}.${this.resourceName}.load_balancer_arns`;
  }

  get load_balancing_algorithm_type(): string {
    return `${this.resourceType}.${this.resourceName}.load_balancing_algorithm_type`;
  }

  get load_balancing_anomaly_mitigation(): string {
    return `${this.resourceType}.${this.resourceName}.load_balancing_anomaly_mitigation`;
  }

  get load_balancing_cross_zone_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.load_balancing_cross_zone_enabled`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get preserve_client_ip(): string {
    return `${this.resourceType}.${this.resourceName}.preserve_client_ip`;
  }

  get protocol_version(): string {
    return `${this.resourceType}.${this.resourceName}.protocol_version`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
