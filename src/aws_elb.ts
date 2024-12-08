import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElbArgsAccessLogs {
  bucket: string;
  bucket_prefix?: string;
  enabled?: boolean;
  interval?: number;
}

export interface AwsElbArgsHealthCheck {
  healthy_threshold: number;
  interval: number;
  target: string;
  timeout: number;
  unhealthy_threshold: number;
}

export interface AwsElbArgsListener {
  instance_port: number;
  instance_protocol: string;
  lb_port: number;
  lb_protocol: string;
  ssl_certificate_id?: string;
}

export interface AwsElbArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsElbArgs {
  connection_draining?: boolean;
  connection_draining_timeout?: number;
  cross_zone_load_balancing?: boolean;
  desync_mitigation_mode?: string;
  idle_timeout?: number;
  tags?: { [key: string]: string };
  access_logs?: AwsElbArgsAccessLogs;
  health_check?: AwsElbArgsHealthCheck;
  listener: AwsElbArgsListener[];
  timeouts?: AwsElbArgsTimeouts;
}

export class aws_elb extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsElbArgs) {
    const meta = {access_logs:{isBlock:true},health_check:{isBlock:true},listener:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_elb", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zones(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zones`;
  }

  get dns_name(): string {
    return `${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instances(): string {
    return `${this.resourceType}.${this.resourceName}.instances`;
  }

  get internal(): string {
    return `${this.resourceType}.${this.resourceName}.internal`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get security_groups(): string {
    return `${this.resourceType}.${this.resourceName}.security_groups`;
  }

  get source_security_group(): string {
    return `${this.resourceType}.${this.resourceName}.source_security_group`;
  }

  get source_security_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.source_security_group_id`;
  }

  get subnets(): string {
    return `${this.resourceType}.${this.resourceName}.subnets`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.zone_id`;
  }
}
