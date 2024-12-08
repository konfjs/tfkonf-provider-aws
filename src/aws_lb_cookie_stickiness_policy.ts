import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLbCookieStickinessPolicyArgs {
  cookie_expiration_period?: number;
  lb_port: number;
  load_balancer: string;
  name: string;
}

export class aws_lb_cookie_stickiness_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLbCookieStickinessPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lb_cookie_stickiness_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get lb_port(): string {
    return `${this.resourceType}.${this.resourceName}.lb_port`;
  }

  get load_balancer(): string {
    return `${this.resourceType}.${this.resourceName}.load_balancer`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
