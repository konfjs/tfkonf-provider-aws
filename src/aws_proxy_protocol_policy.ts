import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsProxyProtocolPolicyArgs {
  instance_ports: string[];
  load_balancer: string;
}

export class aws_proxy_protocol_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsProxyProtocolPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_proxy_protocol_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_ports(): string {
    return `${this.resourceType}.${this.resourceName}.instance_ports`;
  }

  get load_balancer(): string {
    return `${this.resourceType}.${this.resourceName}.load_balancer`;
  }
}
