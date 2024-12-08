import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlobalacceleratorEndpointGroupArgsEndpointConfiguration {
  attachment_arn?: string;
  endpoint_id?: string;
  weight?: number;
}

export interface AwsGlobalacceleratorEndpointGroupArgsPortOverride {
  endpoint_port: number;
  listener_port: number;
}

export interface AwsGlobalacceleratorEndpointGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsGlobalacceleratorEndpointGroupArgs {
  health_check_interval_seconds?: number;
  health_check_protocol?: string;
  listener_arn: string;
  threshold_count?: number;
  traffic_dial_percentage?: number;
  endpoint_configuration?: AwsGlobalacceleratorEndpointGroupArgsEndpointConfiguration[];
  port_override?: AwsGlobalacceleratorEndpointGroupArgsPortOverride[];
  timeouts?: AwsGlobalacceleratorEndpointGroupArgsTimeouts;
}

export class aws_globalaccelerator_endpoint_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsGlobalacceleratorEndpointGroupArgs) {
    const meta = {endpoint_configuration:{isBlock:true},port_override:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_globalaccelerator_endpoint_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get endpoint_group_region(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_group_region`;
  }

  get health_check_path(): string {
    return `${this.resourceType}.${this.resourceName}.health_check_path`;
  }

  get health_check_port(): string {
    return `${this.resourceType}.${this.resourceName}.health_check_port`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get listener_arn(): string {
    return `${this.resourceType}.${this.resourceName}.listener_arn`;
  }
}
