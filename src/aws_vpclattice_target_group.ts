import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpclatticeTargetGroupArgsConfigHealthCheckMatcher {
  value?: string;
}

export interface AwsVpclatticeTargetGroupArgsConfigHealthCheck {
  enabled?: boolean;
  health_check_interval_seconds?: number;
  health_check_timeout_seconds?: number;
  healthy_threshold_count?: number;
  path?: string;
  protocol_version?: string;
  unhealthy_threshold_count?: number;
  matcher?: AwsVpclatticeTargetGroupArgsConfigHealthCheckMatcher;
}

export interface AwsVpclatticeTargetGroupArgsConfig {
  vpc_identifier?: string;
  health_check?: AwsVpclatticeTargetGroupArgsConfigHealthCheck;
}

export interface AwsVpclatticeTargetGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsVpclatticeTargetGroupArgs {
  name: string;
  tags?: { [key: string]: string };
  type: string;
  config?: AwsVpclatticeTargetGroupArgsConfig;
  timeouts?: AwsVpclatticeTargetGroupArgsTimeouts;
}

export class aws_vpclattice_target_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVpclatticeTargetGroupArgs) {
    const meta = {config:{isBlock:true,health_check:{isBlock:true,matcher:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpclattice_target_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
