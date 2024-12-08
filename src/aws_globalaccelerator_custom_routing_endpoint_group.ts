import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlobalacceleratorCustomRoutingEndpointGroupArgsDestinationConfiguration {
  from_port: number;
  protocols: string[];
  to_port: number;
}

export interface AwsGlobalacceleratorCustomRoutingEndpointGroupArgsEndpointConfiguration {
  endpoint_id?: string;
}

export interface AwsGlobalacceleratorCustomRoutingEndpointGroupArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsGlobalacceleratorCustomRoutingEndpointGroupArgs {
  listener_arn: string;
  destination_configuration: AwsGlobalacceleratorCustomRoutingEndpointGroupArgsDestinationConfiguration[];
  endpoint_configuration?: AwsGlobalacceleratorCustomRoutingEndpointGroupArgsEndpointConfiguration[];
  timeouts?: AwsGlobalacceleratorCustomRoutingEndpointGroupArgsTimeouts;
}

export class aws_globalaccelerator_custom_routing_endpoint_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGlobalacceleratorCustomRoutingEndpointGroupArgs) {
    const meta = {destination_configuration:{isBlock:true},endpoint_configuration:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_globalaccelerator_custom_routing_endpoint_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get endpoint_group_region(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_group_region`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get listener_arn(): string {
    return `${this.resourceType}.${this.resourceName}.listener_arn`;
  }
}
