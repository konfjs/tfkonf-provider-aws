import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLoadBalancerBackendServerPolicyArgs {
  instance_port: number;
  load_balancer_name: string;
  policy_names?: string[];
}

export class aws_load_balancer_backend_server_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLoadBalancerBackendServerPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_load_balancer_backend_server_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_port(): string {
    return `${this.resourceType}.${this.resourceName}.instance_port`;
  }

  get load_balancer_name(): string {
    return `${this.resourceType}.${this.resourceName}.load_balancer_name`;
  }
}
