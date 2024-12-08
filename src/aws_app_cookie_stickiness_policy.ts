import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppCookieStickinessPolicyArgs {
  cookie_name: string;
  lb_port: number;
  load_balancer: string;
  name: string;
}

export class aws_app_cookie_stickiness_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAppCookieStickinessPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_app_cookie_stickiness_policy", resourceName);
  }

  get cookie_name(): string {
    return `${this.resourceType}.${this.resourceName}.cookie_name`;
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
