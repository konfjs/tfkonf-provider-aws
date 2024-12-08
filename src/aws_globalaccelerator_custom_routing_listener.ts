import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlobalacceleratorCustomRoutingListenerArgsPortRange {
  from_port?: number;
  to_port?: number;
}

export interface AwsGlobalacceleratorCustomRoutingListenerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsGlobalacceleratorCustomRoutingListenerArgs {
  accelerator_arn: string;
  port_range: AwsGlobalacceleratorCustomRoutingListenerArgsPortRange[];
  timeouts?: AwsGlobalacceleratorCustomRoutingListenerArgsTimeouts;
}

export class aws_globalaccelerator_custom_routing_listener extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGlobalacceleratorCustomRoutingListenerArgs) {
    const meta = {port_range:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_globalaccelerator_custom_routing_listener", resourceName);
  }

  get accelerator_arn(): string {
    return `${this.resourceType}.${this.resourceName}.accelerator_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
