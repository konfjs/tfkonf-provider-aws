import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLoadBalancerPolicyArgsPolicyAttribute {
  name?: string;
  value?: string;
}

export interface AwsLoadBalancerPolicyArgs {
  load_balancer_name: string;
  policy_name: string;
  policy_type_name: string;
  policy_attribute?: AwsLoadBalancerPolicyArgsPolicyAttribute[];
}

export class aws_load_balancer_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLoadBalancerPolicyArgs) {
    const meta = {policy_attribute:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_load_balancer_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get load_balancer_name(): string {
    return `${this.resourceType}.${this.resourceName}.load_balancer_name`;
  }

  get policy_name(): string {
    return `${this.resourceType}.${this.resourceName}.policy_name`;
  }

  get policy_type_name(): string {
    return `${this.resourceType}.${this.resourceName}.policy_type_name`;
  }
}
