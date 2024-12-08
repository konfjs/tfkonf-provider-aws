import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlobalacceleratorListenerArgsPortRange {
  from_port?: number;
  to_port?: number;
}

export interface AwsGlobalacceleratorListenerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsGlobalacceleratorListenerArgs {
  accelerator_arn: string;
  client_affinity?: string;
  protocol: string;
  port_range: AwsGlobalacceleratorListenerArgsPortRange[];
  timeouts?: AwsGlobalacceleratorListenerArgsTimeouts;
}

export class aws_globalaccelerator_listener extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsGlobalacceleratorListenerArgs) {
    const meta = {port_range:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_globalaccelerator_listener", resourceName);
  }

  get accelerator_arn(): string {
    return `${this.resourceType}.${this.resourceName}.accelerator_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get protocol(): string {
    return `${this.resourceType}.${this.resourceName}.protocol`;
  }
}
