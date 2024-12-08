import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLoadBalancerListenerPolicyArgs {
  load_balancer_name: string;
  load_balancer_port: number;
  policy_names?: string[];
  triggers?: { [key: string]: string };
}

export class aws_load_balancer_listener_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLoadBalancerListenerPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_load_balancer_listener_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get load_balancer_name(): string {
    return `${this.resourceType}.${this.resourceName}.load_balancer_name`;
  }

  get load_balancer_port(): string {
    return `${this.resourceType}.${this.resourceName}.load_balancer_port`;
  }
}
