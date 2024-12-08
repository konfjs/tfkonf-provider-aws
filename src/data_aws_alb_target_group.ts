import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsAlbTargetGroupArgsTimeouts {
  read?: string;
}

export interface DataAwsAlbTargetGroupArgs {
  timeouts?: DataAwsAlbTargetGroupArgsTimeouts;
}

export class data_aws_alb_target_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsAlbTargetGroupArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_alb_target_group", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get arn_suffix(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn_suffix`;
  }

  get connection_termination(): string {
    return `data.${this.resourceType}.${this.resourceName}.connection_termination`;
  }

  get deregistration_delay(): string {
    return `data.${this.resourceType}.${this.resourceName}.deregistration_delay`;
  }

  get health_check(): string {
    return `data.${this.resourceType}.${this.resourceName}.health_check`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get lambda_multi_value_headers_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.lambda_multi_value_headers_enabled`;
  }

  get load_balancer_arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.load_balancer_arns`;
  }

  get load_balancing_algorithm_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.load_balancing_algorithm_type`;
  }

  get load_balancing_anomaly_mitigation(): string {
    return `data.${this.resourceType}.${this.resourceName}.load_balancing_anomaly_mitigation`;
  }

  get load_balancing_cross_zone_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.load_balancing_cross_zone_enabled`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get port(): string {
    return `data.${this.resourceType}.${this.resourceName}.port`;
  }

  get preserve_client_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.preserve_client_ip`;
  }

  get protocol(): string {
    return `data.${this.resourceType}.${this.resourceName}.protocol`;
  }

  get protocol_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.protocol_version`;
  }

  get proxy_protocol_v2(): string {
    return `data.${this.resourceType}.${this.resourceName}.proxy_protocol_v2`;
  }

  get slow_start(): string {
    return `data.${this.resourceType}.${this.resourceName}.slow_start`;
  }

  get stickiness(): string {
    return `data.${this.resourceType}.${this.resourceName}.stickiness`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get target_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.target_type`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
