import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53HealthCheckArgs {
  child_health_threshold?: number;
  child_healthchecks?: string[];
  cloudwatch_alarm_name?: string;
  cloudwatch_alarm_region?: string;
  disabled?: boolean;
  fqdn?: string;
  insufficient_data_health_status?: string;
  invert_healthcheck?: boolean;
  ip_address?: string;
  measure_latency?: boolean;
  port?: number;
  reference_name?: string;
  regions?: string[];
  request_interval?: number;
  resource_path?: string;
  routing_control_arn?: string;
  search_string?: string;
  tags?: { [key: string]: string };
  type: string;
}

export class aws_route53_health_check extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRoute53HealthCheckArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53_health_check", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get enable_sni(): string {
    return `${this.resourceType}.${this.resourceName}.enable_sni`;
  }

  get failure_threshold(): string {
    return `${this.resourceType}.${this.resourceName}.failure_threshold`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
